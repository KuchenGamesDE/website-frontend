function Fx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function zx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),Ox=Symbol.for("react.portal"),Ux=Symbol.for("react.fragment"),Bx=Symbol.for("react.strict_mode"),Vx=Symbol.for("react.profiler"),Hx=Symbol.for("react.provider"),Gx=Symbol.for("react.context"),Wx=Symbol.for("react.forward_ref"),jx=Symbol.for("react.suspense"),$x=Symbol.for("react.memo"),Xx=Symbol.for("react.lazy"),vh=Symbol.iterator;function qx(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vg=Object.assign,xg={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||gg}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _g(){}_g.prototype=Hs.prototype;function rf(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||gg}var sf=rf.prototype=new _g;sf.constructor=rf;vg(sf,Hs.prototype);sf.isPureReactComponent=!0;var xh=Array.isArray,yg=Object.prototype.hasOwnProperty,of={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function Sg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yg.call(e,i)&&!wg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ia,type:t,key:s,ref:o,props:r,_owner:of.current}}function Yx(t,e){return{$$typeof:ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function af(t){return typeof t=="object"&&t!==null&&t.$$typeof===ia}function Qx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _h=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qx(""+t.key):e.toString(36)}function il(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ia:case Ox:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pu(o,0):i,xh(r)?(n="",t!=null&&(n=t.replace(_h,"$&/")+"/"),il(r,e,n,"",function(u){return u})):r!=null&&(af(r)&&(r=Yx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(_h,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",xh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pu(s,a);o+=il(s,e,n,l,r)}else if(l=qx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,a++),o+=il(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(t,e,n){if(t==null)return t;var i=[],r=0;return il(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Zx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},rl={transition:null},Kx={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:rl,ReactCurrentOwner:of};Re.Children={map:fa,forEach:function(t,e,n){fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fa(t,function(){e++}),e},toArray:function(t){return fa(t,function(e){return e})||[]},only:function(t){if(!af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Re.Component=Hs;Re.Fragment=Ux;Re.Profiler=Vx;Re.PureComponent=rf;Re.StrictMode=Bx;Re.Suspense=jx;Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;Re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=of.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yg.call(e,l)&&!wg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ia,type:t.type,key:r,ref:s,props:i,_owner:o}};Re.createContext=function(t){return t={$$typeof:Gx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hx,_context:t},t.Consumer=t};Re.createElement=Sg;Re.createFactory=function(t){var e=Sg.bind(null,t);return e.type=t,e};Re.createRef=function(){return{current:null}};Re.forwardRef=function(t){return{$$typeof:Wx,render:t}};Re.isValidElement=af;Re.lazy=function(t){return{$$typeof:Xx,_payload:{_status:-1,_result:t},_init:Zx}};Re.memo=function(t,e){return{$$typeof:$x,type:t,compare:e===void 0?null:e}};Re.startTransition=function(t){var e=rl.transition;rl.transition={};try{t()}finally{rl.transition=e}};Re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Re.useCallback=function(t,e){return Bt.current.useCallback(t,e)};Re.useContext=function(t){return Bt.current.useContext(t)};Re.useDebugValue=function(){};Re.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};Re.useEffect=function(t,e){return Bt.current.useEffect(t,e)};Re.useId=function(){return Bt.current.useId()};Re.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};Re.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};Re.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};Re.useMemo=function(t,e){return Bt.current.useMemo(t,e)};Re.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};Re.useRef=function(t){return Bt.current.useRef(t)};Re.useState=function(t){return Bt.current.useState(t)};Re.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};Re.useTransition=function(){return Bt.current.useTransition()};Re.version="18.2.0";(function(t){t.exports=Re})(U);const ft=zx(U.exports),Mg=Fx({__proto__:null,default:ft},[U.exports]);var Xc={},bg={exports:{}},on={},Eg={exports:{}},Tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,N){var z=D.length;D.push(N);e:for(;0<z;){var Y=z-1>>>1,q=D[Y];if(0<r(q,N))D[Y]=N,D[z]=q,z=Y;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var N=D[0],z=D.pop();if(z!==N){D[0]=z;e:for(var Y=0,q=D.length,ae=q>>>1;Y<ae;){var fe=2*(Y+1)-1,ge=D[fe],W=fe+1,je=D[W];if(0>r(ge,z))W<q&&0>r(je,ge)?(D[Y]=je,D[W]=z,Y=W):(D[Y]=ge,D[fe]=z,Y=fe);else if(W<q&&0>r(je,z))D[Y]=je,D[W]=z,Y=W;else break e}}return N}function r(D,N){var z=D.sortIndex-N.sortIndex;return z!==0?z:D.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,v=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var N=n(u);N!==null;){if(N.callback===null)i(u);else if(N.startTime<=D)i(u),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(u)}}function y(D){if(p=!1,_(D),!v)if(n(l)!==null)v=!0,V(S);else{var N=n(u);N!==null&&X(y,N.startTime-D)}}function S(D,N){v=!1,p&&(p=!1,m(w),w=-1),g=!0;var z=f;try{for(_(N),d=n(l);d!==null&&(!(d.expirationTime>N)||D&&!O());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,f=d.priorityLevel;var q=Y(d.expirationTime<=N);N=t.unstable_now(),typeof q=="function"?d.callback=q:d===n(l)&&i(l),_(N)}else i(l);d=n(l)}if(d!==null)var ae=!0;else{var fe=n(u);fe!==null&&X(y,fe.startTime-N),ae=!1}return ae}finally{d=null,f=z,g=!1}}var C=!1,L=null,w=-1,A=5,k=-1;function O(){return!(t.unstable_now()-k<A)}function Z(){if(L!==null){var D=t.unstable_now();k=D;var N=!0;try{N=L(!0,D)}finally{N?J():(C=!1,L=null)}}else C=!1}var J;if(typeof x=="function")J=function(){x(Z)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,j=F.port2;F.port1.onmessage=Z,J=function(){j.postMessage(null)}}else J=function(){h(Z,0)};function V(D){L=D,C||(C=!0,J())}function X(D,N){w=h(function(){D(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,V(S))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var z=f;f=N;try{return D()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=f;f=D;try{return N()}finally{f=z}},t.unstable_scheduleCallback=function(D,N,z){var Y=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,D){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=z+q,D={id:c++,callback:N,priorityLevel:D,startTime:z,expirationTime:q,sortIndex:-1},z>Y?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(p?(m(w),w=-1):p=!0,X(y,z-Y))):(D.sortIndex=q,e(l,D),v||g||(v=!0,V(S))),D},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(D){var N=f;return function(){var z=f;f=N;try{return D.apply(this,arguments)}finally{f=z}}}})(Tg);(function(t){t.exports=Tg})(Eg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg=U.exports,sn=Eg.exports;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ag=new Set,Fo={};function Ir(t,e){Rs(t,e),Rs(t+"Capture",e)}function Rs(t,e){for(Fo[t]=e,t=0;t<e.length;t++)Ag.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=Object.prototype.hasOwnProperty,Jx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yh={},wh={};function e_(t){return qc.call(wh,t)?!0:qc.call(yh,t)?!1:Jx.test(t)?wh[t]=!0:(yh[t]=!0,!1)}function t_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function n_(t,e,n,i){if(e===null||typeof e>"u"||t_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lf=/[\-:]([a-z])/g;function uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lf,uf);Tt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lf,uf);Tt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lf,uf);Tt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cf(t,e,n,i){var r=Tt.hasOwnProperty(e)?Tt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(n_(e,n,r,i)&&(n=null),i||r===null?e_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=Cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),Pg=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),hf=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Rg=Symbol.for("react.offscreen"),Sh=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=Sh&&t[Sh]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,Ru;function xo(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Du=!1;function Nu(t,e){if(!t||Du)return"";Du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xo(t):""}function i_(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function Kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case Yc:return"Profiler";case df:return"StrictMode";case Qc:return"Suspense";case Zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pg:return(t.displayName||"Context")+".Consumer";case Lg:return(t._context.displayName||"Context")+".Provider";case ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hf:return e=t.displayName||null,e!==null?e:Kc(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return Kc(t(e))}catch{}}return null}function r_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(e);case 8:return e===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function s_(t){var e=Dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=s_(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jc(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ig(t,e){e=e.checked,e!=null&&cf(t,"checked",e,!1)}function ed(t,e){Ig(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?td(t,e.type,n):e.hasOwnProperty("defaultValue")&&td(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function td(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(_o(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function kg(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Th(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o_=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){o_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function Og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function Ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var a_=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(t,e){if(e){if(a_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var od=null;function pf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ad=null,Ss=null,Ms=null;function Ch(t){if(t=oa(t)){if(typeof ad!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=nu(e),ad(t.stateNode,t.type,e))}}function Bg(t){Ss?Ms?Ms.push(t):Ms=[t]:Ss=t}function Vg(){if(Ss){var t=Ss,e=Ms;if(Ms=Ss=null,Ch(t),e)for(t=0;t<e.length;t++)Ch(e[t])}}function Hg(t,e){return t(e)}function Gg(){}var Iu=!1;function Wg(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return Hg(t,e,n)}finally{Iu=!1,(Ss!==null||Ms!==null)&&(Gg(),Vg())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var i=nu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var ld=!1;if(fi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){ld=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{ld=!1}function l_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var To=!1,Ml=null,bl=!1,ud=null,u_={onError:function(t){To=!0,Ml=t}};function c_(t,e,n,i,r,s,o,a,l){To=!1,Ml=null,l_.apply(u_,arguments)}function d_(t,e,n,i,r,s,o,a,l){if(c_.apply(this,arguments),To){if(To){var u=Ml;To=!1,Ml=null}else throw Error(ee(198));bl||(bl=!0,ud=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ah(t){if(kr(t)!==t)throw Error(ee(188))}function f_(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ah(r),t;if(s===i)return Ah(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function $g(t){return t=f_(t),t!==null?Xg(t):null}function Xg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xg(t);if(e!==null)return e;t=t.sibling}return null}var qg=sn.unstable_scheduleCallback,Lh=sn.unstable_cancelCallback,h_=sn.unstable_shouldYield,p_=sn.unstable_requestPaint,ot=sn.unstable_now,m_=sn.unstable_getCurrentPriorityLevel,mf=sn.unstable_ImmediatePriority,Yg=sn.unstable_UserBlockingPriority,El=sn.unstable_NormalPriority,g_=sn.unstable_LowPriority,Qg=sn.unstable_IdlePriority,Kl=null,qn=null;function v_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:y_,x_=Math.log,__=Math.LN2;function y_(t){return t>>>=0,t===0?32:31-(x_(t)/__|0)|0}var ga=64,va=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=yo(a):(s&=o,s!==0&&(i=yo(s)))}else o=n&~r,o!==0?i=yo(o):s!==0&&(i=yo(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Rn(e),r=1<<n,i|=t[n],e&=~r;return i}function w_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=w_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zg(){var t=ga;return ga<<=1,(ga&4194240)===0&&(ga=64),t}function ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function M_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Rn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Rn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var He=0;function Kg(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Jg,vf,e0,t0,n0,dd=!1,xa=[],Oi=null,Ui=null,Bi=null,Uo=new Map,Bo=new Map,Ri=[],b_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ph(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function to(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=oa(e),e!==null&&vf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function E_(t,e,n,i,r){switch(e){case"focusin":return Oi=to(Oi,t,e,n,i,r),!0;case"dragenter":return Ui=to(Ui,t,e,n,i,r),!0;case"mouseover":return Bi=to(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Uo.set(s,to(Uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,to(Bo.get(s)||null,t,e,n,i,r)),!0}return!1}function i0(t){var e=mr(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=jg(n),e!==null){t.blockedOn=e,n0(t.priority,function(){e0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);od=i,n.target.dispatchEvent(i),od=null}else return e=oa(n),e!==null&&vf(e),t.blockedOn=n,!1;e.shift()}return!0}function Rh(t,e,n){sl(t)&&n.delete(e)}function T_(){dd=!1,Oi!==null&&sl(Oi)&&(Oi=null),Ui!==null&&sl(Ui)&&(Ui=null),Bi!==null&&sl(Bi)&&(Bi=null),Uo.forEach(Rh),Bo.forEach(Rh)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,dd||(dd=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,T_)))}function Vo(t){function e(r){return no(r,t)}if(0<xa.length){no(xa[0],t);for(var n=1;n<xa.length;n++){var i=xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&no(Oi,t),Ui!==null&&no(Ui,t),Bi!==null&&no(Bi,t),Uo.forEach(e),Bo.forEach(e),n=0;n<Ri.length;n++)i=Ri[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)i0(n),n.blockedOn===null&&Ri.shift()}var bs=_i.ReactCurrentBatchConfig,Cl=!0;function C_(t,e,n,i){var r=He,s=bs.transition;bs.transition=null;try{He=1,xf(t,e,n,i)}finally{He=r,bs.transition=s}}function A_(t,e,n,i){var r=He,s=bs.transition;bs.transition=null;try{He=4,xf(t,e,n,i)}finally{He=r,bs.transition=s}}function xf(t,e,n,i){if(Cl){var r=fd(t,e,n,i);if(r===null)ju(t,e,i,Al,n),Ph(t,i);else if(E_(r,t,e,n,i))i.stopPropagation();else if(Ph(t,i),e&4&&-1<b_.indexOf(t)){for(;r!==null;){var s=oa(r);if(s!==null&&Jg(s),s=fd(t,e,n,i),s===null&&ju(t,e,i,Al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(t,e,i,null,n)}}var Al=null;function fd(t,e,n,i){if(Al=null,t=pf(i),t=mr(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function r0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m_()){case mf:return 1;case Yg:return 4;case El:case g_:return 16;case Qg:return 536870912;default:return 16}default:return 16}}var Ni=null,_f=null,ol=null;function s0(){if(ol)return ol;var t,e=_f,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ol=r.slice(t,1<i?1-i:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function Dh(){return!1}function an(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:Dh,this.isPropagationStopped=Dh,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=an(Gs),sa=et({},Gs,{view:0,detail:0}),L_=an(sa),Fu,zu,io,Jl=et({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Fu=t.screenX-io.screenX,zu=t.screenY-io.screenY):zu=Fu=0,io=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Nh=an(Jl),P_=et({},Jl,{dataTransfer:0}),R_=an(P_),D_=et({},sa,{relatedTarget:0}),Ou=an(D_),N_=et({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),I_=an(N_),k_=et({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F_=an(k_),z_=et({},Gs,{data:0}),Ih=an(z_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B_[t])?!!e[t]:!1}function wf(){return V_}var H_=et({},sa,{key:function(t){if(t.key){var e=O_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G_=an(H_),W_=et({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=an(W_),j_=et({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),$_=an(j_),X_=et({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=an(X_),Y_=et({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q_=an(Y_),Z_=[9,13,27,32],Sf=fi&&"CompositionEvent"in window,Co=null;fi&&"documentMode"in document&&(Co=document.documentMode);var K_=fi&&"TextEvent"in window&&!Co,o0=fi&&(!Sf||Co&&8<Co&&11>=Co),Fh=String.fromCharCode(32),zh=!1;function a0(t,e){switch(t){case"keyup":return Z_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function J_(t,e){switch(t){case"compositionend":return l0(e);case"keypress":return e.which!==32?null:(zh=!0,Fh);case"textInput":return t=e.data,t===Fh&&zh?null:t;default:return null}}function e1(t,e){if(cs)return t==="compositionend"||!Sf&&a0(t,e)?(t=s0(),ol=_f=Ni=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o0&&e.locale!=="ko"?null:e.data;default:return null}}var t1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t1[t.type]:e==="textarea"}function u0(t,e,n,i){Bg(i),e=Ll(e,"onChange"),0<e.length&&(n=new yf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ao=null,Ho=null;function n1(t){y0(t,0)}function eu(t){var e=hs(t);if(Ng(e))return t}function i1(t,e){if(t==="change")return e}var c0=!1;if(fi){var Uu;if(fi){var Bu="oninput"in document;if(!Bu){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Bu=typeof Uh.oninput=="function"}Uu=Bu}else Uu=!1;c0=Uu&&(!document.documentMode||9<document.documentMode)}function Bh(){Ao&&(Ao.detachEvent("onpropertychange",d0),Ho=Ao=null)}function d0(t){if(t.propertyName==="value"&&eu(Ho)){var e=[];u0(e,Ho,t,pf(t)),Wg(n1,e)}}function r1(t,e,n){t==="focusin"?(Bh(),Ao=e,Ho=n,Ao.attachEvent("onpropertychange",d0)):t==="focusout"&&Bh()}function s1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(Ho)}function o1(t,e){if(t==="click")return eu(e)}function a1(t,e){if(t==="input"||t==="change")return eu(e)}function l1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:l1;function Go(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qc.call(e,r)||!Fn(t[r],e[r]))return!1}return!0}function Vh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hh(t,e){var n=Vh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vh(n)}}function f0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?f0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function h0(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function u1(t){var e=h0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&f0(n.ownerDocument.documentElement,n)){if(i!==null&&Mf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hh(n,s);var o=Hh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var c1=fi&&"documentMode"in document&&11>=document.documentMode,ds=null,hd=null,Lo=null,pd=!1;function Gh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pd||ds==null||ds!==Sl(i)||(i=ds,"selectionStart"in i&&Mf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Lo&&Go(Lo,i)||(Lo=i,i=Ll(hd,"onSelect"),0<i.length&&(e=new yf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ds)))}function ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},Vu={},p0={};fi&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function tu(t){if(Vu[t])return Vu[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p0)return Vu[t]=e[n];return t}var m0=tu("animationend"),g0=tu("animationiteration"),v0=tu("animationstart"),x0=tu("transitionend"),_0=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){_0.set(t,e),Ir(e,[t])}for(var Hu=0;Hu<Wh.length;Hu++){var Gu=Wh[Hu],d1=Gu.toLowerCase(),f1=Gu[0].toUpperCase()+Gu.slice(1);Ki(d1,"on"+f1)}Ki(m0,"onAnimationEnd");Ki(g0,"onAnimationIteration");Ki(v0,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(x0,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function jh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,d_(i,e,void 0,t),t.currentTarget=null}function y0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;jh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;jh(r,a,u),s=l}}}if(bl)throw t=ud,bl=!1,ud=null,t}function $e(t,e){var n=e[_d];n===void 0&&(n=e[_d]=new Set);var i=t+"__bubble";n.has(i)||(w0(e,t,2,!1),n.add(i))}function Wu(t,e,n){var i=0;e&&(i|=4),w0(n,t,i,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[wa]){t[wa]=!0,Ag.forEach(function(n){n!=="selectionchange"&&(h1.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,Wu("selectionchange",!1,e))}}function w0(t,e,n,i){switch(r0(e)){case 1:var r=C_;break;case 4:r=A_;break;default:r=xf}n=r.bind(null,e,n,t),r=void 0,!ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ju(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Wg(function(){var u=s,c=pf(n),d=[];e:{var f=_0.get(t);if(f!==void 0){var g=yf,v=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":g=G_;break;case"focusin":v="focus",g=Ou;break;case"focusout":v="blur",g=Ou;break;case"beforeblur":case"afterblur":g=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=$_;break;case m0:case g0:case v0:g=I_;break;case x0:g=q_;break;case"scroll":g=L_;break;case"wheel":g=Q_;break;case"copy":case"cut":case"paste":g=F_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=kh}var p=(e&4)!==0,h=!p&&t==="scroll",m=p?f!==null?f+"Capture":null:f;p=[];for(var x=u,_;x!==null;){_=x;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,m!==null&&(y=Oo(x,m),y!=null&&p.push(jo(x,y,_)))),h)break;x=x.return}0<p.length&&(f=new g(f,v,null,n,c),d.push({event:f,listeners:p}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==od&&(v=n.relatedTarget||n.fromElement)&&(mr(v)||v[hi]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?mr(v):null,v!==null&&(h=kr(v),v!==h||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(p=Nh,y="onMouseLeave",m="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(p=kh,y="onPointerLeave",m="onPointerEnter",x="pointer"),h=g==null?f:hs(g),_=v==null?f:hs(v),f=new p(y,x+"leave",g,n,c),f.target=h,f.relatedTarget=_,y=null,mr(c)===u&&(p=new p(m,x+"enter",v,n,c),p.target=_,p.relatedTarget=h,y=p),h=y,g&&v)t:{for(p=g,m=v,x=0,_=p;_;_=Br(_))x++;for(_=0,y=m;y;y=Br(y))_++;for(;0<x-_;)p=Br(p),x--;for(;0<_-x;)m=Br(m),_--;for(;x--;){if(p===m||m!==null&&p===m.alternate)break t;p=Br(p),m=Br(m)}p=null}else p=null;g!==null&&$h(d,f,g,p,!1),v!==null&&h!==null&&$h(d,h,v,p,!0)}}e:{if(f=u?hs(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=i1;else if(Oh(f))if(c0)S=a1;else{S=s1;var C=r1}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=o1);if(S&&(S=S(t,u))){u0(d,S,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&td(f,"number",f.value)}switch(C=u?hs(u):window,t){case"focusin":(Oh(C)||C.contentEditable==="true")&&(ds=C,hd=u,Lo=null);break;case"focusout":Lo=hd=ds=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,Gh(d,n,c);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":Gh(d,n,c)}var L;if(Sf)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else cs?a0(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(o0&&n.locale!=="ko"&&(cs||w!=="onCompositionStart"?w==="onCompositionEnd"&&cs&&(L=s0()):(Ni=c,_f="value"in Ni?Ni.value:Ni.textContent,cs=!0)),C=Ll(u,w),0<C.length&&(w=new Ih(w,t,null,n,c),d.push({event:w,listeners:C}),L?w.data=L:(L=l0(n),L!==null&&(w.data=L)))),(L=K_?J_(t,n):e1(t,n))&&(u=Ll(u,"onBeforeInput"),0<u.length&&(c=new Ih("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=L))}y0(d,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(t,n),s!=null&&i.unshift(jo(t,s,r)),s=Oo(t,e),s!=null&&i.push(jo(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Oo(n,s),l!=null&&o.unshift(jo(n,l,a))):r||(l=Oo(n,s),l!=null&&o.push(jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var p1=/\r\n?/g,m1=/\u0000|\uFFFD/g;function Xh(t){return(typeof t=="string"?t:""+t).replace(p1,`
`).replace(m1,"")}function Sa(t,e,n){if(e=Xh(e),Xh(t)!==e&&n)throw Error(ee(425))}function Pl(){}var md=null,gd=null;function vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xd=typeof setTimeout=="function"?setTimeout:void 0,g1=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,v1=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(x1)}:xd;function x1(t){setTimeout(function(){throw t})}function $u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Vo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Vo(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ws,$o="__reactProps$"+Ws,hi="__reactContainer$"+Ws,_d="__reactEvents$"+Ws,_1="__reactListeners$"+Ws,y1="__reactHandles$"+Ws;function mr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yh(t);t!==null;){if(n=t[Wn])return n;t=Yh(t)}return e}t=n,n=t.parentNode}return null}function oa(t){return t=t[Wn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function nu(t){return t[$o]||null}var yd=[],ps=-1;function Ji(t){return{current:t}}function Ye(t){0>ps||(t.current=yd[ps],yd[ps]=null,ps--)}function We(t,e){ps++,yd[ps]=t.current,t.current=e}var Zi={},Dt=Ji(Zi),$t=Ji(!1),br=Zi;function Ds(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Xt(t){return t=t.childContextTypes,t!=null}function Rl(){Ye($t),Ye(Dt)}function Qh(t,e,n){if(Dt.current!==Zi)throw Error(ee(168));We(Dt,e),We($t,n)}function S0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,r_(t)||"Unknown",r));return et({},n,i)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,br=Dt.current,We(Dt,t),We($t,$t.current),!0}function Zh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=S0(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,Ye($t),Ye(Dt),We(Dt,t)):Ye($t),We($t,n)}var ri=null,iu=!1,Xu=!1;function M0(t){ri===null?ri=[t]:ri.push(t)}function w1(t){iu=!0,M0(t)}function er(){if(!Xu&&ri!==null){Xu=!0;var t=0,e=He;try{var n=ri;for(He=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,iu=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),qg(mf,er),r}finally{He=e,Xu=!1}}return null}var ms=[],gs=0,Nl=null,Il=0,hn=[],pn=0,Er=null,oi=1,ai="";function ur(t,e){ms[gs++]=Il,ms[gs++]=Nl,Nl=t,Il=e}function b0(t,e,n){hn[pn++]=oi,hn[pn++]=ai,hn[pn++]=Er,Er=t;var i=oi;t=ai;var r=32-Rn(i)-1;i&=~(1<<r),n+=1;var s=32-Rn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,oi=1<<32-Rn(e)+r|n<<r|i,ai=s+t}else oi=1<<s|n<<r|i,ai=t}function bf(t){t.return!==null&&(ur(t,1),b0(t,1,0))}function Ef(t){for(;t===Nl;)Nl=ms[--gs],ms[gs]=null,Il=ms[--gs],ms[gs]=null;for(;t===Er;)Er=hn[--pn],hn[pn]=null,ai=hn[--pn],hn[pn]=null,oi=hn[--pn],hn[pn]=null}var rn=null,nn=null,Qe=!1,Ln=null;function E0(t,e){var n=gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,nn=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:oi,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,nn=null,!0):!1;default:return!1}}function wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sd(t){if(Qe){var e=nn;if(e){var n=e;if(!Kh(t,e)){if(wd(t))throw Error(ee(418));e=Vi(n.nextSibling);var i=rn;e&&Kh(t,e)?E0(i,n):(t.flags=t.flags&-4097|2,Qe=!1,rn=t)}}else{if(wd(t))throw Error(ee(418));t.flags=t.flags&-4097|2,Qe=!1,rn=t}}}function Jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function Ma(t){if(t!==rn)return!1;if(!Qe)return Jh(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vd(t.type,t.memoizedProps)),e&&(e=nn)){if(wd(t))throw T0(),Error(ee(418));for(;e;)E0(t,e),e=Vi(e.nextSibling)}if(Jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=rn?Vi(t.stateNode.nextSibling):null;return!0}function T0(){for(var t=nn;t;)t=Vi(t.nextSibling)}function Ns(){nn=rn=null,Qe=!1}function Tf(t){Ln===null?Ln=[t]:Ln.push(t)}var S1=_i.ReactCurrentBatchConfig;function Cn(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var kl=Ji(null),Fl=null,vs=null,Cf=null;function Af(){Cf=vs=Fl=null}function Lf(t){var e=kl.current;Ye(kl),t._currentValue=e}function Md(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){Fl=t,Cf=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Wt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(Cf!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Fl===null)throw Error(ee(308));vs=t,Fl.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var gr=null;function Pf(t){gr===null?gr=[t]:gr.push(t)}function C0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pf(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Ne&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Pf(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gf(t,n)}}function ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,p=a;switch(f=e,g=n,p.tag){case 1:if(v=p.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=p.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=et({},d,f);break e;case 2:Pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=d}}function tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var L0=new Cg.Component().refs;function bd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=zt(),r=Wi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Dn(e,t,r,i),ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=zt(),r=Wi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Dn(e,t,r,i),ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),i=Wi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Dn(e,t,i,n),ll(e,t,i))}};function np(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,i)||!Go(r,s):!0}function P0(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(r=Xt(e)?br:Dt.current,i=e.contextTypes,s=(i=i!=null)?Ds(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ip(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function Ed(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=L0,Rf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=_n(s):(s=Xt(e)?br:Dt.current,r.context=Ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ru.enqueueReplaceState(r,r.state,null),zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===L0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rp(t){var e=t._init;return e(t._payload)}function R0(t){function e(m,x){if(t){var _=m.deletions;_===null?(m.deletions=[x],m.flags|=16):_.push(x)}}function n(m,x){if(!t)return null;for(;x!==null;)e(m,x),x=x.sibling;return null}function i(m,x){for(m=new Map;x!==null;)x.key!==null?m.set(x.key,x):m.set(x.index,x),x=x.sibling;return m}function r(m,x){return m=ji(m,x),m.index=0,m.sibling=null,m}function s(m,x,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<x?(m.flags|=2,x):_):(m.flags|=2,x)):(m.flags|=1048576,x)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,x,_,y){return x===null||x.tag!==6?(x=ec(_,m.mode,y),x.return=m,x):(x=r(x,_),x.return=m,x)}function l(m,x,_,y){var S=_.type;return S===us?c(m,x,_.props.children,y,_.key):x!==null&&(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Li&&rp(S)===x.type)?(y=r(x,_.props),y.ref=ro(m,x,_),y.return=m,y):(y=pl(_.type,_.key,_.props,null,m.mode,y),y.ref=ro(m,x,_),y.return=m,y)}function u(m,x,_,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=tc(_,m.mode,y),x.return=m,x):(x=r(x,_.children||[]),x.return=m,x)}function c(m,x,_,y,S){return x===null||x.tag!==7?(x=wr(_,m.mode,y,S),x.return=m,x):(x=r(x,_),x.return=m,x)}function d(m,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=ec(""+x,m.mode,_),x.return=m,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ha:return _=pl(x.type,x.key,x.props,null,m.mode,_),_.ref=ro(m,null,x),_.return=m,_;case ls:return x=tc(x,m.mode,_),x.return=m,x;case Li:var y=x._init;return d(m,y(x._payload),_)}if(_o(x)||Js(x))return x=wr(x,m.mode,_,null),x.return=m,x;ba(m,x)}return null}function f(m,x,_,y){var S=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(m,x,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ha:return _.key===S?l(m,x,_,y):null;case ls:return _.key===S?u(m,x,_,y):null;case Li:return S=_._init,f(m,x,S(_._payload),y)}if(_o(_)||Js(_))return S!==null?null:c(m,x,_,y,null);ba(m,_)}return null}function g(m,x,_,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(_)||null,a(x,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:return m=m.get(y.key===null?_:y.key)||null,l(x,m,y,S);case ls:return m=m.get(y.key===null?_:y.key)||null,u(x,m,y,S);case Li:var C=y._init;return g(m,x,_,C(y._payload),S)}if(_o(y)||Js(y))return m=m.get(_)||null,c(x,m,y,S,null);ba(x,y)}return null}function v(m,x,_,y){for(var S=null,C=null,L=x,w=x=0,A=null;L!==null&&w<_.length;w++){L.index>w?(A=L,L=null):A=L.sibling;var k=f(m,L,_[w],y);if(k===null){L===null&&(L=A);break}t&&L&&k.alternate===null&&e(m,L),x=s(k,x,w),C===null?S=k:C.sibling=k,C=k,L=A}if(w===_.length)return n(m,L),Qe&&ur(m,w),S;if(L===null){for(;w<_.length;w++)L=d(m,_[w],y),L!==null&&(x=s(L,x,w),C===null?S=L:C.sibling=L,C=L);return Qe&&ur(m,w),S}for(L=i(m,L);w<_.length;w++)A=g(L,m,w,_[w],y),A!==null&&(t&&A.alternate!==null&&L.delete(A.key===null?w:A.key),x=s(A,x,w),C===null?S=A:C.sibling=A,C=A);return t&&L.forEach(function(O){return e(m,O)}),Qe&&ur(m,w),S}function p(m,x,_,y){var S=Js(_);if(typeof S!="function")throw Error(ee(150));if(_=S.call(_),_==null)throw Error(ee(151));for(var C=S=null,L=x,w=x=0,A=null,k=_.next();L!==null&&!k.done;w++,k=_.next()){L.index>w?(A=L,L=null):A=L.sibling;var O=f(m,L,k.value,y);if(O===null){L===null&&(L=A);break}t&&L&&O.alternate===null&&e(m,L),x=s(O,x,w),C===null?S=O:C.sibling=O,C=O,L=A}if(k.done)return n(m,L),Qe&&ur(m,w),S;if(L===null){for(;!k.done;w++,k=_.next())k=d(m,k.value,y),k!==null&&(x=s(k,x,w),C===null?S=k:C.sibling=k,C=k);return Qe&&ur(m,w),S}for(L=i(m,L);!k.done;w++,k=_.next())k=g(L,m,w,k.value,y),k!==null&&(t&&k.alternate!==null&&L.delete(k.key===null?w:k.key),x=s(k,x,w),C===null?S=k:C.sibling=k,C=k);return t&&L.forEach(function(Z){return e(m,Z)}),Qe&&ur(m,w),S}function h(m,x,_,y){if(typeof _=="object"&&_!==null&&_.type===us&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ha:e:{for(var S=_.key,C=x;C!==null;){if(C.key===S){if(S=_.type,S===us){if(C.tag===7){n(m,C.sibling),x=r(C,_.props.children),x.return=m,m=x;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Li&&rp(S)===C.type){n(m,C.sibling),x=r(C,_.props),x.ref=ro(m,C,_),x.return=m,m=x;break e}n(m,C);break}else e(m,C);C=C.sibling}_.type===us?(x=wr(_.props.children,m.mode,y,_.key),x.return=m,m=x):(y=pl(_.type,_.key,_.props,null,m.mode,y),y.ref=ro(m,x,_),y.return=m,m=y)}return o(m);case ls:e:{for(C=_.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(m,x.sibling),x=r(x,_.children||[]),x.return=m,m=x;break e}else{n(m,x);break}else e(m,x);x=x.sibling}x=tc(_,m.mode,y),x.return=m,m=x}return o(m);case Li:return C=_._init,h(m,x,C(_._payload),y)}if(_o(_))return v(m,x,_,y);if(Js(_))return p(m,x,_,y);ba(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(m,x.sibling),x=r(x,_),x.return=m,m=x):(n(m,x),x=ec(_,m.mode,y),x.return=m,m=x),o(m)):n(m,x)}return h}var Is=R0(!0),D0=R0(!1),aa={},Yn=Ji(aa),Xo=Ji(aa),qo=Ji(aa);function vr(t){if(t===aa)throw Error(ee(174));return t}function Df(t,e){switch(We(qo,e),We(Xo,t),We(Yn,aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=id(e,t)}Ye(Yn),We(Yn,e)}function ks(){Ye(Yn),Ye(Xo),Ye(qo)}function N0(t){vr(qo.current);var e=vr(Yn.current),n=id(e,t.type);e!==n&&(We(Xo,t),We(Yn,n))}function Nf(t){Xo.current===t&&(Ye(Yn),Ye(Xo))}var Ke=Ji(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function If(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var ul=_i.ReactCurrentDispatcher,Yu=_i.ReactCurrentBatchConfig,Tr=0,Je=null,gt=null,yt=null,Ul=!1,Po=!1,Yo=0,M1=0;function Ct(){throw Error(ee(321))}function kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function Ff(t,e,n,i,r,s){if(Tr=s,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=t===null||t.memoizedState===null?C1:A1,t=n(i,r),Po){s=0;do{if(Po=!1,Yo=0,25<=s)throw Error(ee(301));s+=1,yt=gt=null,e.updateQueue=null,ul.current=L1,t=n(i,r)}while(Po)}if(ul.current=Bl,e=gt!==null&&gt.next!==null,Tr=0,yt=gt=Je=null,Ul=!1,e)throw Error(ee(300));return t}function zf(){var t=Yo!==0;return Yo=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Je.memoizedState=yt=t:yt=yt.next=t,yt}function yn(){if(gt===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=yt===null?Je.memoizedState:yt.next;if(e!==null)yt=e,gt=t;else{if(t===null)throw Error(ee(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},yt===null?Je.memoizedState=yt=t:yt=yt.next=t}return yt}function Qo(t,e){return typeof e=="function"?e(t):e}function Qu(t){var e=yn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Tr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Je.lanes|=c,Cr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Fn(i,e.memoizedState)||(Wt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Je.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=yn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fn(s,e.memoizedState)||(Wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function I0(){}function k0(t,e){var n=Je,i=yn(),r=e(),s=!Fn(i.memoizedState,r);if(s&&(i.memoizedState=r,Wt=!0),i=i.queue,Of(O0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,Zo(9,z0.bind(null,n,i,r,e),void 0,null),wt===null)throw Error(ee(349));(Tr&30)!==0||F0(n,e,r)}return r}function F0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z0(t,e,n,i){e.value=n,e.getSnapshot=i,U0(e)&&B0(t)}function O0(t,e,n){return n(function(){U0(e)&&B0(t)})}function U0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function B0(t){var e=pi(t,1);e!==null&&Dn(e,t,1,-1)}function sp(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=T1.bind(null,Je,t),[e.memoizedState,t]}function Zo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function V0(){return yn().memoizedState}function cl(t,e,n,i){var r=Hn();Je.flags|=t,r.memoizedState=Zo(1|e,n,void 0,i===void 0?null:i)}function su(t,e,n,i){var r=yn();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&kf(i,o.deps)){r.memoizedState=Zo(e,n,s,i);return}}Je.flags|=t,r.memoizedState=Zo(1|e,n,s,i)}function op(t,e){return cl(8390656,8,t,e)}function Of(t,e){return su(2048,8,t,e)}function H0(t,e){return su(4,2,t,e)}function G0(t,e){return su(4,4,t,e)}function W0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j0(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,W0.bind(null,e,t),n)}function Uf(){}function $0(t,e){var n=yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function q0(t,e,n){return(Tr&21)===0?(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=n):(Fn(n,e)||(n=Zg(),Je.lanes|=n,Cr|=n,t.baseState=!0),e)}function b1(t,e){var n=He;He=n!==0&&4>n?n:4,t(!0);var i=Yu.transition;Yu.transition={};try{t(!1),e()}finally{He=n,Yu.transition=i}}function Y0(){return yn().memoizedState}function E1(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Q0(t))Z0(e,n);else if(n=C0(t,e,n,i),n!==null){var r=zt();Dn(n,t,i,r),K0(n,e,i)}}function T1(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q0(t))Z0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(r.next=r,Pf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=C0(t,e,r,i),n!==null&&(r=zt(),Dn(n,t,i,r),K0(n,e,i))}}function Q0(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function Z0(t,e){Po=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function K0(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gf(t,n)}}var Bl={readContext:_n,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},C1={readContext:_n,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,W0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Hn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=E1.bind(null,Je,t),[i.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:sp,useDebugValue:Uf,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=sp(!1),e=t[0];return t=b1.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Je,r=Hn();if(Qe){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),wt===null)throw Error(ee(349));(Tr&30)!==0||F0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,op(O0.bind(null,i,s,t),[t]),i.flags|=2048,Zo(9,z0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=wt.identifierPrefix;if(Qe){var n=ai,i=oi;n=(i&~(1<<32-Rn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=M1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},A1={readContext:_n,useCallback:$0,useContext:_n,useEffect:Of,useImperativeHandle:j0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:X0,useReducer:Qu,useRef:V0,useState:function(){return Qu(Qo)},useDebugValue:Uf,useDeferredValue:function(t){var e=yn();return q0(e,gt.memoizedState,t)},useTransition:function(){var t=Qu(Qo)[0],e=yn().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:k0,useId:Y0,unstable_isNewReconciler:!1},L1={readContext:_n,useCallback:$0,useContext:_n,useEffect:Of,useImperativeHandle:j0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:X0,useReducer:Zu,useRef:V0,useState:function(){return Zu(Qo)},useDebugValue:Uf,useDeferredValue:function(t){var e=yn();return gt===null?e.memoizedState=t:q0(e,gt.memoizedState,t)},useTransition:function(){var t=Zu(Qo)[0],e=yn().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:k0,useId:Y0,unstable_isNewReconciler:!1};function Fs(t,e){try{var n="",i=e;do n+=i_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ku(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var P1=typeof WeakMap=="function"?WeakMap:Map;function J0(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hl||(Hl=!0,Fd=i),Td(t,e)},n}function ev(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Td(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ap(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new P1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=W1.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var R1=_i.ReactCurrentOwner,Wt=!1;function Ft(t,e,n,i){e.child=t===null?D0(e,null,n,i):Is(e,t.child,n,i)}function cp(t,e,n,i,r){n=n.render;var s=e.ref;return Es(e,r),i=Ff(t,e,n,i,s,r),n=zf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(Qe&&n&&bf(e),e.flags|=1,Ft(t,e,i,r),e.child)}function dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tv(t,e,s,i,r)):(t=pl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function tv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Go(s,i)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(Wt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return Cd(t,e,n,i,r)}function nv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(_s,en),en|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,We(_s,en),en|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,We(_s,en),en|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,We(_s,en),en|=i;return Ft(t,e,r,n),e.child}function iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cd(t,e,n,i,r){var s=Xt(n)?br:Dt.current;return s=Ds(e,s),Es(e,r),n=Ff(t,e,n,i,s,r),i=zf(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(Qe&&i&&bf(e),e.flags|=1,Ft(t,e,n,r),e.child)}function fp(t,e,n,i,r){if(Xt(n)){var s=!0;Dl(e)}else s=!1;if(Es(e,r),e.stateNode===null)dl(t,e),P0(e,n,i),Ed(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=Xt(n)?br:Dt.current,u=Ds(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ip(e,o,i,u),Pi=!1;var f=e.memoizedState;o.state=f,zl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||$t.current||Pi?(typeof c=="function"&&(bd(e,n,c,i),l=e.memoizedState),(a=Pi||np(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,A0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Cn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_n(l):(l=Xt(n)?br:Dt.current,l=Ds(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ip(e,o,i,l),Pi=!1,f=e.memoizedState,o.state=f,zl(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||$t.current||Pi?(typeof g=="function"&&(bd(e,n,g,i),v=e.memoizedState),(u=Pi||np(e,n,u,i,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Ad(t,e,n,i,s,r)}function Ad(t,e,n,i,r,s){iv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zh(e,n,!1),mi(t,e,s);i=e.stateNode,R1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):Ft(t,e,a,s),e.memoizedState=i.state,r&&Zh(e,n,!0),e.child}function rv(t){var e=t.stateNode;e.pendingContext?Qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qh(t,e.context,!1),Df(t,e.containerInfo)}function hp(t,e,n,i,r){return Ns(),Tf(r),e.flags|=256,Ft(t,e,n,i),e.child}var Ld={dehydrated:null,treeContext:null,retryLane:0};function Pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function sv(t,e,n){var i=e.pendingProps,r=Ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),We(Ke,r&1),t===null)return Sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lu(o,i,0,null),t=wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pd(n),e.memoizedState=Ld,t):Bf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return D1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ji(a,s):(s=wr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ld,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bf(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ea(t,e,n,i){return i!==null&&Tf(i),Is(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ku(Error(ee(422))),Ea(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lu({mode:"visible",children:i.children},r,0,null),s=wr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Is(e,t.child,null,o),e.child.memoizedState=Pd(o),e.memoizedState=Ld,s);if((e.mode&1)===0)return Ea(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Ku(s,i,void 0),Ea(t,e,o,i)}if(a=(o&t.childLanes)!==0,Wt||a){if(i=wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),Dn(i,t,r,-1))}return $f(),i=Ku(Error(ee(421))),Ea(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=j1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,nn=Vi(r.nextSibling),rn=e,Qe=!0,Ln=null,t!==null&&(hn[pn++]=oi,hn[pn++]=ai,hn[pn++]=Er,oi=t.id,ai=t.overflow,Er=e),e=Bf(e,i.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Md(t.return,e,n)}function Ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ft(t,e,i.children,n),i=Ke.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(We(Ke,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N1(t,e,n){switch(e.tag){case 3:rv(e),Ns();break;case 5:N0(e);break;case 1:Xt(e.type)&&Dl(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;We(kl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(We(Ke,Ke.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?sv(t,e,n):(We(Ke,Ke.current&1),t=mi(t,e,n),t!==null?t.sibling:null);We(Ke,Ke.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),We(Ke,Ke.current),i)break;return null;case 22:case 23:return e.lanes=0,nv(t,e,n)}return mi(t,e,n)}var av,Rd,lv,uv;av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rd=function(){};lv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(Yn.current);var s=null;switch(n){case"input":r=Jc(t,r),i=Jc(t,i),s=[];break;case"select":r=et({},r,{value:void 0}),i=et({},i,{value:void 0}),s=[];break;case"textarea":r=nd(t,r),i=nd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pl)}rd(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function so(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function I1(t,e,n){var i=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return Xt(e.type)&&Rl(),At(e),null;case 3:return i=e.stateNode,ks(),Ye($t),Ye(Dt),If(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ln!==null&&(Ud(Ln),Ln=null))),Rd(t,e),At(e),null;case 5:Nf(e);var r=vr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)lv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return At(e),null}if(t=vr(Yn.current),Ma(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wn]=e,i[$o]=s,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)$e(wo[r],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":Mh(i,s),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$e("invalid",i);break;case"textarea":Eh(i,s),$e("invalid",i)}rd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sa(i.textContent,a,t),r=["children",""+a]):Fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",i)}switch(n){case"input":pa(i),bh(i,s,!0);break;case"textarea":pa(i),Th(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Wn]=e,t[$o]=i,av(t,e,!1,!1),e.stateNode=t;e:{switch(o=sd(n,i),n){case"dialog":$e("cancel",t),$e("close",t),r=i;break;case"iframe":case"object":case"embed":$e("load",t),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)$e(wo[r],t);r=i;break;case"source":$e("error",t),r=i;break;case"img":case"image":case"link":$e("error",t),$e("load",t),r=i;break;case"details":$e("toggle",t),r=i;break;case"input":Mh(t,i),r=Jc(t,i),$e("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=et({},i,{value:void 0}),$e("invalid",t);break;case"textarea":Eh(t,i),r=nd(t,i),$e("invalid",t);break;default:r=i}rd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zo(t,l):typeof l=="number"&&zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",t):l!=null&&cf(t,s,l,o))}switch(n){case"input":pa(t),bh(t,i,!1);break;case"textarea":pa(t),Th(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Pl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=vr(qo.current),vr(Yn.current),Ma(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(s=i.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:Sa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return At(e),null;case 13:if(Ye(Ke),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&nn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)T0(),Ns(),e.flags|=98560,s=!1;else if(s=Ma(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Wn]=e}else Ns(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else Ln!==null&&(Ud(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ke.current&1)!==0?vt===0&&(vt=3):$f())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return ks(),Rd(t,e),t===null&&Wo(e.stateNode.containerInfo),At(e),null;case 10:return Lf(e.type._context),At(e),null;case 17:return Xt(e.type)&&Rl(),At(e),null;case 19:if(Ye(Ke),s=e.memoizedState,s===null)return At(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)so(s,!1);else{if(vt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,so(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return We(Ke,Ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&ot()>zs&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return At(e),null}else 2*ot()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ot(),e.sibling=null,n=Ke.current,We(Ke,i?n&1|2:n&1),e):(At(e),null);case 22:case 23:return jf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(en&1073741824)!==0&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function k1(t,e){switch(Ef(e),e.tag){case 1:return Xt(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),Ye($t),Ye(Dt),If(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Nf(e),null;case 13:if(Ye(Ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ye(Ke),null;case 4:return ks(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var Ta=!1,Rt=!1,F1=typeof WeakSet=="function"?WeakSet:Set,pe=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){it(t,e,i)}else n.current=null}function Dd(t,e,n){try{n()}catch(i){it(t,e,i)}}var mp=!1;function z1(t,e){if(md=Cl,t=h0(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:t,selectionRange:n},Cl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var p=v.memoizedProps,h=v.memoizedState,m=e.stateNode,x=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:Cn(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){it(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=mp,mp=!1,v}function Ro(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dd(e,n,s)}r=r.next}while(r!==i)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cv(t){var e=t.alternate;e!==null&&(t.alternate=null,cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[$o],delete e[_d],delete e[_1],delete e[y1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dv(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pl));else if(i!==4&&(t=t.child,t!==null))for(Id(t,e,n),t=t.sibling;t!==null;)Id(t,e,n),t=t.sibling}function kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}var Mt=null,An=!1;function wi(t,e,n){for(n=n.child;n!==null;)fv(t,e,n),n=n.sibling}function fv(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:Rt||xs(n,e);case 6:var i=Mt,r=An;Mt=null,wi(t,e,n),Mt=i,An=r,Mt!==null&&(An?(t=Mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(An?(t=Mt,n=n.stateNode,t.nodeType===8?$u(t.parentNode,n):t.nodeType===1&&$u(t,n),Vo(t)):$u(Mt,n.stateNode));break;case 4:i=Mt,r=An,Mt=n.stateNode.containerInfo,An=!0,wi(t,e,n),Mt=i,An=r;break;case 0:case 11:case 14:case 15:if(!Rt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Dd(n,e,o),r=r.next}while(r!==i)}wi(t,e,n);break;case 1:if(!Rt&&(xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){it(n,e,a)}wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:n.mode&1?(Rt=(i=Rt)||n.memoizedState!==null,wi(t,e,n),Rt=i):wi(t,e,n);break;default:wi(t,e,n)}}function vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new F1),e.forEach(function(i){var r=$1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,An=!1;break e;case 3:Mt=a.stateNode.containerInfo,An=!0;break e;case 4:Mt=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(Mt===null)throw Error(ee(160));fv(s,o,r),Mt=null,An=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){it(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hv(e,t),e=e.sibling}function hv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Vn(t),i&4){try{Ro(3,t,t.return),ou(3,t)}catch(p){it(t,t.return,p)}try{Ro(5,t,t.return)}catch(p){it(t,t.return,p)}}break;case 1:Sn(e,t),Vn(t),i&512&&n!==null&&xs(n,n.return);break;case 5:if(Sn(e,t),Vn(t),i&512&&n!==null&&xs(n,n.return),t.flags&32){var r=t.stateNode;try{zo(r,"")}catch(p){it(t,t.return,p)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ig(r,s),sd(a,o);var u=sd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Ug(r,d):c==="dangerouslySetInnerHTML"?zg(r,d):c==="children"?zo(r,d):cf(r,c,d,u)}switch(a){case"input":ed(r,s);break;case"textarea":kg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ws(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?ws(r,!!s.multiple,s.defaultValue,!0):ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[$o]=s}catch(p){it(t,t.return,p)}}break;case 6:if(Sn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(p){it(t,t.return,p)}}break;case 3:if(Sn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(p){it(t,t.return,p)}break;case 4:Sn(e,t),Vn(t);break;case 13:Sn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gf=ot())),i&4&&vp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(u=Rt)||c,Sn(e,t),Rt=u):Sn(e,t),Vn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(pe=t,c=t.child;c!==null;){for(d=pe=c;pe!==null;){switch(f=pe,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ro(4,f,f.return);break;case 1:xs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(p){it(i,n,p)}}break;case 5:xs(f,f.return);break;case 22:if(f.memoizedState!==null){_p(d);continue}}g!==null?(g.return=f,pe=g):_p(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Og("display",o))}catch(p){it(t,t.return,p)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(p){it(t,t.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Sn(e,t),Vn(t),i&4&&vp(t);break;case 21:break;default:Sn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dv(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(zo(r,""),i.flags&=-33);var s=gp(t);kd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=gp(t);Id(t,a,o);break;default:throw Error(ee(161))}}catch(l){it(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function O1(t,e,n){pe=t,pv(t)}function pv(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ta;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=Ta;var u=Rt;if(Ta=o,(Rt=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?yp(r):l!==null?(l.return=o,pe=l):yp(r);for(;s!==null;)pe=s,pv(s),s=s.sibling;pe=r,Ta=a,Rt=u}xp(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,pe=s):xp(t)}}function xp(t){for(;pe!==null;){var e=pe;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Rt||ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Rt||e.flags&512&&Nd(e)}catch(f){it(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function _p(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function yp(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(l){it(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){it(e,r,l)}}var s=e.return;try{Nd(e)}catch(l){it(e,s,l)}break;case 5:var o=e.return;try{Nd(e)}catch(l){it(e,o,l)}}}catch(l){it(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var U1=Math.ceil,Vl=_i.ReactCurrentDispatcher,Vf=_i.ReactCurrentOwner,xn=_i.ReactCurrentBatchConfig,Ne=0,wt=null,dt=null,Et=0,en=0,_s=Ji(0),vt=0,Ko=null,Cr=0,au=0,Hf=0,Do=null,Ht=null,Gf=0,zs=1/0,ni=null,Hl=!1,Fd=null,Gi=null,Ca=!1,Ii=null,Gl=0,No=0,zd=null,fl=-1,hl=0;function zt(){return(Ne&6)!==0?ot():fl!==-1?fl:fl=ot()}function Wi(t){return(t.mode&1)===0?1:(Ne&2)!==0&&Et!==0?Et&-Et:S1.transition!==null?(hl===0&&(hl=Zg()),hl):(t=He,t!==0||(t=window.event,t=t===void 0?16:r0(t.type)),t)}function Dn(t,e,n,i){if(50<No)throw No=0,zd=null,Error(ee(185));ra(t,n,i),((Ne&2)===0||t!==wt)&&(t===wt&&((Ne&2)===0&&(au|=n),vt===4&&Di(t,Et)),qt(t,i),n===1&&Ne===0&&(e.mode&1)===0&&(zs=ot()+500,iu&&er()))}function qt(t,e){var n=t.callbackNode;S_(t,e);var i=Tl(t,t===wt?Et:0);if(i===0)n!==null&&Lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lh(n),e===1)t.tag===0?w1(wp.bind(null,t)):M0(wp.bind(null,t)),v1(function(){(Ne&6)===0&&er()}),n=null;else{switch(Kg(i)){case 1:n=mf;break;case 4:n=Yg;break;case 16:n=El;break;case 536870912:n=Qg;break;default:n=El}n=Sv(n,mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mv(t,e){if(fl=-1,hl=0,(Ne&6)!==0)throw Error(ee(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=Tl(t,t===wt?Et:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Wl(t,i);else{e=i;var r=Ne;Ne|=2;var s=vv();(wt!==t||Et!==e)&&(ni=null,zs=ot()+500,yr(t,e));do try{H1();break}catch(a){gv(t,a)}while(1);Af(),Vl.current=s,Ne=r,dt!==null?e=0:(wt=null,Et=0,e=vt)}if(e!==0){if(e===2&&(r=cd(t),r!==0&&(i=r,e=Od(t,r))),e===1)throw n=Ko,yr(t,0),Di(t,i),qt(t,ot()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,(i&30)===0&&!B1(r)&&(e=Wl(t,i),e===2&&(s=cd(t),s!==0&&(i=s,e=Od(t,s))),e===1))throw n=Ko,yr(t,0),Di(t,i),qt(t,ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:cr(t,Ht,ni);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=Gf+500-ot(),10<e)){if(Tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=xd(cr.bind(null,t,Ht,ni),e);break}cr(t,Ht,ni);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Rn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*U1(i/1960))-i,10<i){t.timeoutHandle=xd(cr.bind(null,t,Ht,ni),i);break}cr(t,Ht,ni);break;case 5:cr(t,Ht,ni);break;default:throw Error(ee(329))}}}return qt(t,ot()),t.callbackNode===n?mv.bind(null,t):null}function Od(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Wl(t,e),t!==2&&(e=Ht,Ht=n,e!==null&&Ud(e)),t}function Ud(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function B1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~Hf,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),i=1<<n;t[n]=-1,e&=~i}}function wp(t){if((Ne&6)!==0)throw Error(ee(327));Ts();var e=Tl(t,0);if((e&1)===0)return qt(t,ot()),null;var n=Wl(t,e);if(t.tag!==0&&n===2){var i=cd(t);i!==0&&(e=i,n=Od(t,i))}if(n===1)throw n=Ko,yr(t,0),Di(t,e),qt(t,ot()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,Ht,ni),qt(t,ot()),null}function Wf(t,e){var n=Ne;Ne|=1;try{return t(e)}finally{Ne=n,Ne===0&&(zs=ot()+500,iu&&er())}}function Ar(t){Ii!==null&&Ii.tag===0&&(Ne&6)===0&&Ts();var e=Ne;Ne|=1;var n=xn.transition,i=He;try{if(xn.transition=null,He=1,t)return t()}finally{He=i,xn.transition=n,Ne=e,(Ne&6)===0&&er()}}function jf(){en=_s.current,Ye(_s)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,g1(n)),dt!==null)for(n=dt.return;n!==null;){var i=n;switch(Ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rl();break;case 3:ks(),Ye($t),Ye(Dt),If();break;case 5:Nf(i);break;case 4:ks();break;case 13:Ye(Ke);break;case 19:Ye(Ke);break;case 10:Lf(i.type._context);break;case 22:case 23:jf()}n=n.return}if(wt=t,dt=t=ji(t.current,null),Et=en=e,vt=0,Ko=null,Hf=au=Cr=0,Ht=Do=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}gr=null}return t}function gv(t,e){do{var n=dt;try{if(Af(),ul.current=Bl,Ul){for(var i=Je.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(Tr=0,yt=gt=Je=null,Po=!1,Yo=0,Vf.current=null,n===null||n.return===null){vt=1,Ko=e,dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Et,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=lp(o);if(g!==null){g.flags&=-257,up(g,o,a,s,e),g.mode&1&&ap(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var p=new Set;p.add(l),e.updateQueue=p}else v.add(l);break e}else{if((e&1)===0){ap(s,u,e),$f();break e}l=Error(ee(426))}}else if(Qe&&a.mode&1){var h=lp(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),up(h,o,a,s,e),Tf(Fs(l,a));break e}}s=l=Fs(l,a),vt!==4&&(vt=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=J0(s,l,e);ep(s,m);break e;case 1:a=l;var x=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Gi===null||!Gi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=ev(s,a,e);ep(s,y);break e}}s=s.return}while(s!==null)}_v(n)}catch(S){e=S,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(1)}function vv(){var t=Vl.current;return Vl.current=Bl,t===null?Bl:t}function $f(){(vt===0||vt===3||vt===2)&&(vt=4),wt===null||(Cr&268435455)===0&&(au&268435455)===0||Di(wt,Et)}function Wl(t,e){var n=Ne;Ne|=2;var i=vv();(wt!==t||Et!==e)&&(ni=null,yr(t,e));do try{V1();break}catch(r){gv(t,r)}while(1);if(Af(),Ne=n,Vl.current=i,dt!==null)throw Error(ee(261));return wt=null,Et=0,vt}function V1(){for(;dt!==null;)xv(dt)}function H1(){for(;dt!==null&&!h_();)xv(dt)}function xv(t){var e=wv(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?_v(t):dt=e,Vf.current=null}function _v(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=I1(n,e,en),n!==null){dt=n;return}}else{if(n=k1(n,e),n!==null){n.flags&=32767,dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,dt=null;return}}if(e=e.sibling,e!==null){dt=e;return}dt=e=t}while(e!==null);vt===0&&(vt=5)}function cr(t,e,n){var i=He,r=xn.transition;try{xn.transition=null,He=1,G1(t,e,n,i)}finally{xn.transition=r,He=i}return null}function G1(t,e,n,i){do Ts();while(Ii!==null);if((Ne&6)!==0)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M_(t,s),t===wt&&(dt=wt=null,Et=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ca||(Ca=!0,Sv(El,function(){return Ts(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=xn.transition,xn.transition=null;var o=He;He=1;var a=Ne;Ne|=4,Vf.current=null,z1(t,n),hv(n,t),u1(gd),Cl=!!md,gd=md=null,t.current=n,O1(n),p_(),Ne=a,He=o,xn.transition=s}else t.current=n;if(Ca&&(Ca=!1,Ii=t,Gl=r),s=t.pendingLanes,s===0&&(Gi=null),v_(n.stateNode),qt(t,ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hl)throw Hl=!1,t=Fd,Fd=null,t;return(Gl&1)!==0&&t.tag!==0&&Ts(),s=t.pendingLanes,(s&1)!==0?t===zd?No++:(No=0,zd=t):No=0,er(),null}function Ts(){if(Ii!==null){var t=Kg(Gl),e=xn.transition,n=He;try{if(xn.transition=null,He=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,Gl=0,(Ne&6)!==0)throw Error(ee(331));var r=Ne;for(Ne|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if((pe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:Ro(8,c,s)}var d=c.child;if(d!==null)d.return=c,pe=d;else for(;pe!==null;){c=pe;var f=c.sibling,g=c.return;if(cv(c),c===u){pe=null;break}if(f!==null){f.return=g,pe=f;break}pe=g}}}var v=s.alternate;if(v!==null){var p=v.child;if(p!==null){v.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}pe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,pe=m;break e}pe=s.return}}var x=t.current;for(pe=x;pe!==null;){o=pe;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,pe=_;else e:for(o=x;pe!==null;){if(a=pe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ou(9,a)}}catch(S){it(a,a.return,S)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Ne=r,er(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Kl,t)}catch{}i=!0}return i}finally{He=n,xn.transition=e}}return!1}function Sp(t,e,n){e=Fs(n,e),e=J0(t,e,1),t=Hi(t,e,1),e=zt(),t!==null&&(ra(t,1,e),qt(t,e))}function it(t,e,n){if(t.tag===3)Sp(t,t,n);else for(;e!==null;){if(e.tag===3){Sp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Fs(n,t),t=ev(e,t,1),e=Hi(e,t,1),t=zt(),e!==null&&(ra(e,1,t),qt(e,t));break}}e=e.return}}function W1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(Et&n)===n&&(vt===4||vt===3&&(Et&130023424)===Et&&500>ot()-Gf?yr(t,0):Hf|=n),qt(t,e)}function yv(t,e){e===0&&((t.mode&1)===0?e=1:(e=va,va<<=1,(va&130023424)===0&&(va=4194304)));var n=zt();t=pi(t,e),t!==null&&(ra(t,e,n),qt(t,n))}function j1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yv(t,n)}function $1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),yv(t,n)}var wv;wv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Wt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Wt=!1,N1(t,e,n);Wt=(t.flags&131072)!==0}else Wt=!1,Qe&&(e.flags&1048576)!==0&&b0(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;dl(t,e),t=e.pendingProps;var r=Ds(e,Dt.current);Es(e,n),r=Ff(null,e,i,t,r,n);var s=zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xt(i)?(s=!0,Dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rf(e),r.updater=ru,e.stateNode=r,r._reactInternals=e,Ed(e,i,t,n),e=Ad(null,e,i,!0,s,n)):(e.tag=0,Qe&&s&&bf(e),Ft(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=q1(i),t=Cn(i,t),r){case 0:e=Cd(null,e,i,t,n);break e;case 1:e=fp(null,e,i,t,n);break e;case 11:e=cp(null,e,i,t,n);break e;case 14:e=dp(null,e,i,Cn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),Cd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),fp(t,e,i,r,n);case 3:e:{if(rv(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,A0(t,e),zl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fs(Error(ee(423)),e),e=hp(t,e,i,n,r);break e}else if(i!==r){r=Fs(Error(ee(424)),e),e=hp(t,e,i,n,r);break e}else for(nn=Vi(e.stateNode.containerInfo.firstChild),rn=e,Qe=!0,Ln=null,n=D0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=mi(t,e,n);break e}Ft(t,e,i,n)}e=e.child}return e;case 5:return N0(e),t===null&&Sd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,vd(i,r)?o=null:s!==null&&vd(i,s)&&(e.flags|=32),iv(t,e),Ft(t,e,o,n),e.child;case 6:return t===null&&Sd(e),null;case 13:return sv(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):Ft(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),cp(t,e,i,r,n);case 7:return Ft(t,e,e.pendingProps,n),e.child;case 8:return Ft(t,e,e.pendingProps.children,n),e.child;case 12:return Ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,We(kl,i._currentValue),i._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===r.children&&!$t.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Md(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Md(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,n),r=_n(r),i=i(r),e.flags|=1,Ft(t,e,i,n),e.child;case 14:return i=e.type,r=Cn(i,e.pendingProps),r=Cn(i.type,r),dp(t,e,i,r,n);case 15:return tv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),dl(t,e),e.tag=1,Xt(i)?(t=!0,Dl(e)):t=!1,Es(e,n),P0(e,i,r),Ed(e,i,r,n),Ad(null,e,i,!0,t,n);case 19:return ov(t,e,n);case 22:return nv(t,e,n)}throw Error(ee(156,e.tag))};function Sv(t,e){return qg(t,e)}function X1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(t,e,n,i){return new X1(t,e,n,i)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q1(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ff)return 11;if(t===hf)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return wr(n.children,r,s,e);case df:o=8,r|=8;break;case Yc:return t=gn(12,n,e,r|2),t.elementType=Yc,t.lanes=s,t;case Qc:return t=gn(13,n,e,r),t.elementType=Qc,t.lanes=s,t;case Zc:return t=gn(19,n,e,r),t.elementType=Zc,t.lanes=s,t;case Rg:return lu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lg:o=10;break e;case Pg:o=9;break e;case ff:o=11;break e;case hf:o=14;break e;case Li:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function wr(t,e,n,i){return t=gn(7,t,i,e),t.lanes=n,t}function lu(t,e,n,i){return t=gn(22,t,i,e),t.elementType=Rg,t.lanes=n,t.stateNode={isHidden:!1},t}function ec(t,e,n){return t=gn(6,t,null,e),t.lanes=n,t}function tc(t,e,n){return e=gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ku(0),this.expirationTimes=ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qf(t,e,n,i,r,s,o,a,l){return t=new Y1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(s),t}function Q1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mv(t){if(!t)return Zi;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(Xt(n))return S0(t,n,e)}return e}function bv(t,e,n,i,r,s,o,a,l){return t=qf(n,i,!0,t,r,s,o,a,l),t.context=Mv(null),n=t.current,i=zt(),r=Wi(n),s=ci(i,r),s.callback=e!=null?e:null,Hi(n,s,r),t.current.lanes=r,ra(t,r,i),qt(t,i),t}function uu(t,e,n,i){var r=e.current,s=zt(),o=Wi(r);return n=Mv(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,o),t!==null&&(Dn(t,r,o,s),ll(t,r,o)),o}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){Mp(t,e),(t=t.alternate)&&Mp(t,e)}function Z1(){return null}var Ev=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qf(t){this._internalRoot=t}cu.prototype.render=Qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));uu(t,e,null,null)};cu.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){uu(null,t,null,null)}),e[hi]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=t0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&i0(t)}};function Zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function K1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=jl(o);s.call(u)}}var o=bv(e,i,t,0,null,!1,!1,"",bp);return t._reactRootContainer=o,t[hi]=o.current,Wo(t.nodeType===8?t.parentNode:t),Ar(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=jl(l);a.call(u)}}var l=qf(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=l,t[hi]=l.current,Wo(t.nodeType===8?t.parentNode:t),Ar(function(){uu(e,l,n,i)}),l}function fu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=jl(o);a.call(l)}}uu(e,o,t,r)}else o=K1(n,e,t,r,i);return jl(o)}Jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(gf(e,n|1),qt(e,ot()),(Ne&6)===0&&(zs=ot()+500,er()))}break;case 13:Ar(function(){var i=pi(t,1);if(i!==null){var r=zt();Dn(i,t,1,r)}}),Yf(t,1)}};vf=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=zt();Dn(e,t,134217728,n)}Yf(t,134217728)}};e0=function(t){if(t.tag===13){var e=Wi(t),n=pi(t,e);if(n!==null){var i=zt();Dn(n,t,e,i)}Yf(t,e)}};t0=function(){return He};n0=function(t,e){var n=He;try{return He=t,e()}finally{He=n}};ad=function(t,e,n){switch(e){case"input":if(ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nu(i);if(!r)throw Error(ee(90));Ng(i),ed(i,r)}}}break;case"textarea":kg(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};Hg=Wf;Gg=Ar;var J1={usingClientEntryPoint:!1,Events:[oa,hs,nu,Bg,Vg,Wf]},oo={findFiberByHostInstance:mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ey={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$g(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||Z1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{Kl=Aa.inject(ey),qn=Aa}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zf(e))throw Error(ee(200));return Q1(t,e,null,n)};on.createRoot=function(t,e){if(!Zf(t))throw Error(ee(299));var n=!1,i="",r=Ev;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qf(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,Wo(t.nodeType===8?t.parentNode:t),new Qf(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=$g(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return Ar(t)};on.hydrate=function(t,e,n){if(!du(e))throw Error(ee(200));return fu(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!Zf(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ev;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bv(e,null,t,1,n!=null?n:null,r,!1,s,o),t[hi]=e.current,Wo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cu(e)};on.render=function(t,e,n){if(!du(e))throw Error(ee(200));return fu(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!du(t))throw Error(ee(40));return t._reactRootContainer?(Ar(function(){fu(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};on.unstable_batchedUpdates=Wf;on.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!du(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return fu(t,e,n,!1,i)};on.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=on})(bg);var Tv,Ep=bg.exports;Tv=Xc.createRoot=Ep.createRoot,Xc.hydrateRoot=Ep.hydrateRoot;/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Jo.apply(this,arguments)}var ki;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ki||(ki={}));const Tp="popstate";function ty(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Bd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:$l(r)}return iy(e,n,null,t)}function at(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ny(){return Math.random().toString(36).substr(2,8)}function Cp(t,e){return{usr:t.state,key:t.key,idx:e}}function Bd(t,e,n,i){return n===void 0&&(n=null),Jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?js(e):e,{state:n,key:e&&e.key||i||ny()})}function $l(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function js(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function iy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=ki.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Jo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=ki.Pop;let h=c(),m=h==null?null:h-u;u=h,l&&l({action:a,location:p.location,delta:m})}function f(h,m){a=ki.Push;let x=Bd(p.location,h,m);n&&n(x,h),u=c()+1;let _=Cp(x,u),y=p.createHref(x);try{o.pushState(_,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(y)}s&&l&&l({action:a,location:p.location,delta:1})}function g(h,m){a=ki.Replace;let x=Bd(p.location,h,m);n&&n(x,h),u=c();let _=Cp(x,u),y=p.createHref(x);o.replaceState(_,"",y),s&&l&&l({action:a,location:p.location,delta:0})}function v(h){let m=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof h=="string"?h:$l(h);return at(m,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,m)}let p={get action(){return a},get location(){return t(r,o)},listen(h){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Tp,d),l=h,()=>{r.removeEventListener(Tp,d),l=null}},createHref(h){return e(r,h)},createURL:v,encodeLocation(h){let m=v(h);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(h){return o.go(h)}};return p}var Ap;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ap||(Ap={}));function ry(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?js(e):e,r=Jf(i.pathname||"/",n);if(r==null)return null;let s=Cv(t);sy(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=py(s[a],vy(r));return o}function Cv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(at(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=$i([i,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(at(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:fy(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Av(s.path))r(s,o,l)}),e}function Av(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Av(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function sy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const oy=/^:\w+$/,ay=3,ly=2,uy=1,cy=10,dy=-2,Lp=t=>t==="*";function fy(t,e){let n=t.split("/"),i=n.length;return n.some(Lp)&&(i+=dy),e&&(i+=ly),n.filter(r=>!Lp(r)).reduce((r,s)=>r+(oy.test(s)?ay:s===""?uy:cy),i)}function hy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function py(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=my({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=a.route;s.push({params:i,pathname:$i([r,c.pathname]),pathnameBase:wy($i([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=$i([r,c.pathnameBase]))}return s}function my(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=gy(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=xy(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function gy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function vy(t){try{return decodeURI(t)}catch(e){return Kf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xy(t,e){try{return decodeURIComponent(t)}catch(n){return Kf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Jf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function _y(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?js(t):t;return{pathname:n?n.startsWith("/")?n:yy(n,e):e,search:Sy(i),hash:My(r)}}function yy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function nc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eh(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function th(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=js(t):(r=Jo({},t),at(!r.pathname||!r.pathname.includes("?"),nc("?","pathname","search",r)),at(!r.pathname||!r.pathname.includes("#"),nc("#","pathname","hash",r)),at(!r.search||!r.search.includes("#"),nc("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(i||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=_y(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const $i=t=>t.join("/").replace(/\/\/+/g,"/"),wy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Sy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,My=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function by(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ey=["post","put","patch","delete"];[...Ey];var hu={exports:{}},pu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=U.exports,Cy=Symbol.for("react.element"),Ay=Symbol.for("react.fragment"),Ly=Object.prototype.hasOwnProperty,Py=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ry={key:!0,ref:!0,__self:!0,__source:!0};function Lv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ly.call(e,i)&&!Ry.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cy,type:t,key:s,ref:o,props:r,_owner:Py.current}}pu.Fragment=Ay;pu.jsx=Lv;pu.jsxs=Lv;(function(t){t.exports=pu})(hu);const tr=hu.exports.Fragment,R=hu.exports.jsx,me=hu.exports.jsxs;/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xl.apply(this,arguments)}const nh=U.exports.createContext(null),Dy=U.exports.createContext(null),$s=U.exports.createContext(null),mu=U.exports.createContext(null),nr=U.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),Pv=U.exports.createContext(null);function Ny(t,e){let{relative:n}=e===void 0?{}:e;Xs()||at(!1);let{basename:i,navigator:r}=U.exports.useContext($s),{hash:s,pathname:o,search:a}=Nv(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:$i([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Xs(){return U.exports.useContext(mu)!=null}function qs(){return Xs()||at(!1),U.exports.useContext(mu).location}function Rv(t){U.exports.useContext($s).static||U.exports.useLayoutEffect(t)}function Dv(){let{isDataRoute:t}=U.exports.useContext(nr);return t?$y():Iy()}function Iy(){Xs()||at(!1);let t=U.exports.useContext(nh),{basename:e,navigator:n}=U.exports.useContext($s),{matches:i}=U.exports.useContext(nr),{pathname:r}=qs(),s=JSON.stringify(eh(i).map(l=>l.pathnameBase)),o=U.exports.useRef(!1);return Rv(()=>{o.current=!0}),U.exports.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=th(l,JSON.parse(s),r,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:$i([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,r,t])}function Nv(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=U.exports.useContext(nr),{pathname:r}=qs(),s=JSON.stringify(eh(i).map(o=>o.pathnameBase));return U.exports.useMemo(()=>th(t,JSON.parse(s),r,n==="path"),[t,s,r,n])}function ky(t,e){return Fy(t,e)}function Fy(t,e,n){Xs()||at(!1);let{navigator:i}=U.exports.useContext($s),{matches:r}=U.exports.useContext(nr),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=qs(),u;if(e){var c;let p=typeof e=="string"?js(e):e;a==="/"||((c=p.pathname)==null?void 0:c.startsWith(a))||at(!1),u=p}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=ry(t,{pathname:f}),v=Vy(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:$i([a,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?a:$i([a,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),r,n);return e&&v?R(mu.Provider,{value:{location:Xl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ki.Pop},children:v}):v}function zy(){let t=jy(),e=by(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null;return me(tr,{children:[R("h2",{children:"Unexpected Application Error!"}),R("h3",{style:{fontStyle:"italic"},children:e}),n?R("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}const Oy=R(zy,{});class Uy extends U.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?R(nr.Provider,{value:this.props.routeContext,children:R(Pv.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function By(t){let{routeContext:e,match:n,children:i}=t,r=U.exports.useContext(nh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),R(nr.Provider,{value:e,children:i})}function Vy(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let s=t,o=(i=n)==null?void 0:i.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||at(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Oy);let f=e.concat(s.slice(0,u+1)),g=()=>{let v;return c?v=d:l.route.Component?v=U.exports.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,R(By,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?R(Uy,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var Vd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Vd||(Vd={}));var ea;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ea||(ea={}));function Hy(t){let e=U.exports.useContext(nh);return e||at(!1),e}function Gy(t){let e=U.exports.useContext(Dy);return e||at(!1),e}function Wy(t){let e=U.exports.useContext(nr);return e||at(!1),e}function Iv(t){let e=Wy(),n=e.matches[e.matches.length-1];return n.route.id||at(!1),n.route.id}function jy(){var t;let e=U.exports.useContext(Pv),n=Gy(ea.UseRouteError),i=Iv(ea.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function $y(){let{router:t}=Hy(Vd.UseNavigateStable),e=Iv(ea.UseNavigateStable),n=U.exports.useRef(!1);return Rv(()=>{n.current=!0}),U.exports.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Xl({fromRouteId:e},s)))},[t,e])}const Xy="startTransition";Mg[Xy];function qy(t){let{to:e,replace:n,state:i,relative:r}=t;Xs()||at(!1);let{matches:s}=U.exports.useContext(nr),{pathname:o}=qs(),a=Dv(),l=th(e,eh(s).map(c=>c.pathnameBase),o,r==="path"),u=JSON.stringify(l);return U.exports.useEffect(()=>a(JSON.parse(u),{replace:n,state:i,relative:r}),[a,u,r,n,i]),null}function ml(t){at(!1)}function Yy(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ki.Pop,navigator:s,static:o=!1}=t;Xs()&&at(!1);let a=e.replace(/^\/*/,"/"),l=U.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=js(i));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=i,v=U.exports.useMemo(()=>{let p=Jf(u,a);return p==null?null:{location:{pathname:p,search:c,hash:d,state:f,key:g},navigationType:r}},[a,u,c,d,f,g,r]);return v==null?null:R($s.Provider,{value:l,children:R(mu.Provider,{children:n,value:v})})}function Qy(t){let{children:e,location:n}=t;return ky(Hd(e),n)}var Pp;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Pp||(Pp={}));new Promise(()=>{});function Hd(t,e){e===void 0&&(e=[]);let n=[];return U.exports.Children.forEach(t,(i,r)=>{if(!U.exports.isValidElement(i))return;let s=[...e,r];if(i.type===U.exports.Fragment){n.push.apply(n,Hd(i.props.children,s));return}i.type!==ml&&at(!1),!i.props.index||!i.props.children||at(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Hd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zy(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ky(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Jy(t,e){return t.button===0&&(!e||e==="_self")&&!Ky(t)}const ew=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],tw="startTransition",Rp=Mg[tw];function nw(t){let{basename:e,children:n,future:i,window:r}=t,s=U.exports.useRef();s.current==null&&(s.current=ty({window:r,v5Compat:!0}));let o=s.current,[a,l]=U.exports.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=U.exports.useCallback(d=>{u&&Rp?Rp(()=>l(d)):l(d)},[l,u]);return U.exports.useLayoutEffect(()=>o.listen(c),[o,c]),R(Yy,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=U.exports.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=Zy(e,ew),{basename:f}=U.exports.useContext($s),g,v=!1;if(typeof u=="string"&&rw.test(u)&&(g=u,iw))try{let x=new URL(window.location.href),_=u.startsWith("//")?new URL(x.protocol+u):new URL(u),y=Jf(_.pathname,f);_.origin===x.origin&&y!=null?u=y+_.search+_.hash:v=!0}catch{}let p=Ny(u,{relative:r}),h=sw(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:r});function m(x){i&&i(x),x.defaultPrevented||h(x)}return R("a",{...d,href:g||p,onClick:v||s?i:m,ref:n,target:l})});var Dp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Dp||(Dp={}));var Np;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Np||(Np={}));function sw(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Dv(),l=qs(),u=Nv(t,{relative:o});return U.exports.useCallback(c=>{if(Jy(c,n)){c.preventDefault();let d=i!==void 0?i:$l(l)===$l(u);a(t,{replace:d,state:r,preventScrollReset:s,relative:o})}},[l,a,u,i,r,n,t,s,o])}function kv(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=kv(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function Fi(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=kv(t))&&(i&&(i+=" "),i+=e);return i}const Io=t=>typeof t=="number"&&!isNaN(t),Lr=t=>typeof t=="string",jt=t=>typeof t=="function",gl=t=>Lr(t)||jt(t)?t:null,ic=t=>U.exports.isValidElement(t)||Lr(t)||jt(t)||Io(t);function ow(t,e,n){n===void 0&&(n=300);const{scrollHeight:i,style:r}=t;requestAnimationFrame(()=>{r.minHeight="initial",r.height=i+"px",r.transition=`all ${n}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)})})}function gu(t){let{enter:e,exit:n,appendPosition:i=!1,collapse:r=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f}=o;const g=i?`${e}--${l}`:e,v=i?`${n}--${l}`:n,p=U.exports.useRef(0);return U.exports.useLayoutEffect(()=>{const h=d.current,m=g.split(" "),x=_=>{_.target===d.current&&(h.dispatchEvent(new Event("d")),h.removeEventListener("animationend",x),h.removeEventListener("animationcancel",x),p.current===0&&_.type!=="animationcancel"&&h.classList.remove(...m))};h.classList.add(...m),h.addEventListener("animationend",x),h.addEventListener("animationcancel",x)},[]),U.exports.useEffect(()=>{const h=d.current,m=()=>{h.removeEventListener("animationend",m),r?ow(h,c,s):c()};f||(u?m():(p.current=1,h.className+=` ${v}`,h.addEventListener("animationend",m)))},[f]),ft.createElement(ft.Fragment,null,a)}}function Ip(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const fn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(i=>i!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},La=t=>{let{theme:e,type:n,...i}=t;return R("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},rc={info:function(t){return R(La,{...t,children:R("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"})})},warning:function(t){return R(La,{...t,children:R("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"})})},success:function(t){return R(La,{...t,children:R("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"})})},error:function(t){return R(La,{...t,children:R("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})})},spinner:function(){return R("div",{className:"Toastify__spinner"})}};function aw(t){const[,e]=U.exports.useReducer(g=>g+1,0),[n,i]=U.exports.useState([]),r=U.exports.useRef(null),s=U.exports.useRef(new Map).current,o=g=>n.indexOf(g)!==-1,a=U.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:g=>s.get(g)}).current;function l(g){let{containerId:v}=g;const{limit:p}=a.props;!p||v&&a.containerId!==v||(a.count-=a.queue.length,a.queue=[])}function u(g){i(v=>g==null?[]:v.filter(p=>p!==g))}function c(){const{toastContent:g,toastProps:v,staleId:p}=a.queue.shift();f(g,v,p)}function d(g,v){let{delay:p,staleId:h,...m}=v;if(!ic(g)||function(Z){return!r.current||a.props.enableMultiContainer&&Z.containerId!==a.props.containerId||s.has(Z.toastId)&&Z.updateId==null}(m))return;const{toastId:x,updateId:_,data:y}=m,{props:S}=a,C=()=>u(x),L=_==null;L&&a.count++;const w={...S,style:S.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(m).filter(Z=>{let[J,F]=Z;return F!=null})),toastId:x,updateId:_,data:y,closeToast:C,isIn:!1,className:gl(m.className||S.toastClassName),bodyClassName:gl(m.bodyClassName||S.bodyClassName),progressClassName:gl(m.progressClassName||S.progressClassName),autoClose:!m.isLoading&&(A=m.autoClose,k=S.autoClose,A===!1||Io(A)&&A>0?A:k),deleteToast(){const Z=Ip(s.get(x),"removed");s.delete(x),fn.emit(4,Z);const J=a.queue.length;if(a.count=x==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),J>0){const F=x==null?a.props.limit:1;if(J===1||F===1)a.displayedToast++,c();else{const j=F>J?J:F;a.displayedToast=j;for(let V=0;V<j;V++)c()}}else e()}};var A,k;w.iconOut=function(Z){let{theme:J,type:F,isLoading:j,icon:V}=Z,X=null;const D={theme:J,type:F};return V===!1||(jt(V)?X=V(D):U.exports.isValidElement(V)?X=U.exports.cloneElement(V,D):Lr(V)||Io(V)?X=V:j?X=rc.spinner():(N=>N in rc)(F)&&(X=rc[F](D))),X}(w),jt(m.onOpen)&&(w.onOpen=m.onOpen),jt(m.onClose)&&(w.onClose=m.onClose),w.closeButton=S.closeButton,m.closeButton===!1||ic(m.closeButton)?w.closeButton=m.closeButton:m.closeButton===!0&&(w.closeButton=!ic(S.closeButton)||S.closeButton);let O=g;U.exports.isValidElement(g)&&!Lr(g.type)?O=U.exports.cloneElement(g,{closeToast:C,toastProps:w,data:y}):jt(g)&&(O=g({closeToast:C,toastProps:w,data:y})),S.limit&&S.limit>0&&a.count>S.limit&&L?a.queue.push({toastContent:O,toastProps:w,staleId:h}):Io(p)?setTimeout(()=>{f(O,w,h)},p):f(O,w,h)}function f(g,v,p){const{toastId:h}=v;p&&s.delete(p);const m={content:g,props:v};s.set(h,m),i(x=>[...x,h].filter(_=>_!==p)),fn.emit(4,Ip(m,m.props.updateId==null?"added":"updated"))}return U.exports.useEffect(()=>(a.containerId=t.containerId,fn.cancelEmit(3).on(0,d).on(1,g=>r.current&&u(g)).on(5,l).emit(2,a),()=>{s.clear(),fn.emit(3,a)}),[]),U.exports.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(g){const v=new Map,p=Array.from(s.values());return t.newestOnTop&&p.reverse(),p.forEach(h=>{const{position:m}=h.props;v.has(m)||v.set(m,[]),v.get(m).push(h)}),Array.from(v,h=>g(h[0],h[1]))},containerRef:r,isToastActive:o}}function kp(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Fp(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function lw(t){const[e,n]=U.exports.useState(!1),[i,r]=U.exports.useState(!1),s=U.exports.useRef(null),o=U.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=U.exports.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=t;function g(y){if(t.draggable){y.nativeEvent.type==="touchstart"&&y.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",x),document.addEventListener("touchmove",m),document.addEventListener("touchend",x);const S=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=S.getBoundingClientRect(),S.style.transition="",o.x=kp(y.nativeEvent),o.y=Fp(y.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=S.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=S.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function v(y){if(o.boundingRect){const{top:S,bottom:C,left:L,right:w}=o.boundingRect;y.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=L&&o.x<=w&&o.y>=S&&o.y<=C?h():p()}}function p(){n(!0)}function h(){n(!1)}function m(y){const S=s.current;o.canDrag&&S&&(o.didMove=!0,e&&h(),o.x=kp(y),o.y=Fp(y),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),S.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,S.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function x(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",x);const y=s.current;if(o.canDrag&&o.didMove&&y){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return r(!0),void t.closeToast();y.style.transition="transform 0.2s, opacity 0.2s",y.style.transform=`translate${t.draggableDirection}(0)`,y.style.opacity="1"}}U.exports.useEffect(()=>{a.current=t}),U.exports.useEffect(()=>(s.current&&s.current.addEventListener("d",p,{once:!0}),jt(t.onOpen)&&t.onOpen(U.exports.isValidElement(t.children)&&t.children.props),()=>{const y=a.current;jt(y.onClose)&&y.onClose(U.exports.isValidElement(y.children)&&y.children.props)}),[]),U.exports.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||h(),window.addEventListener("focus",p),window.addEventListener("blur",h)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",p),window.removeEventListener("blur",h))}),[t.pauseOnFocusLoss]);const _={onMouseDown:g,onTouchStart:g,onMouseUp:v,onTouchEnd:v};return l&&u&&(_.onMouseEnter=h,_.onMouseLeave=p),f&&(_.onClick=y=>{d&&d(y),o.canCloseOnClick&&c()}),{playToast:p,pauseToast:h,isRunning:e,preventExitTransition:i,toastRef:s,eventHandlers:_}}function Fv(t){let{closeToast:e,theme:n,ariaLabel:i="close"}=t;return R("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:r=>{r.stopPropagation(),e(r)},"aria-label":i,children:R("svg",{"aria-hidden":"true",viewBox:"0 0 14 16",children:R("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})})})}function uw(t){let{delay:e,isRunning:n,closeToast:i,type:r="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:f}=t;const g=s||l&&u===0,v={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(v.transform=`scaleX(${u})`);const p=Fi("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":c}),h=jt(o)?o({rtl:c,type:r,defaultClassName:p}):Fi(p,o);return ft.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:h,style:v,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&i()}})}const cw=t=>{const{isRunning:e,preventExitTransition:n,toastRef:i,eventHandlers:r}=lw(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:f,position:g,className:v,style:p,bodyClassName:h,bodyStyle:m,progressClassName:x,progressStyle:_,updateId:y,role:S,progress:C,rtl:L,toastId:w,deleteToast:A,isIn:k,isLoading:O,iconOut:Z,closeOnClick:J,theme:F}=t,j=Fi("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":J}),V=jt(v)?v({rtl:L,position:g,type:u,defaultClassName:j}):Fi(j,v),X=!!C||!a,D={closeToast:d,type:u,theme:F};let N=null;return s===!1||(N=jt(s)?s(D):U.exports.isValidElement(s)?U.exports.cloneElement(s,D):Fv(D)),ft.createElement(f,{isIn:k,done:A,position:g,preventExitTransition:n,nodeRef:i},me("div",{id:w,onClick:l,className:V,...r,style:p,ref:i,children:[me("div",{...k&&{role:S},className:jt(h)?h({type:u}):Fi("Toastify__toast-body",h),style:m,children:[Z!=null&&R("div",{className:Fi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O}),children:Z}),R("div",{children:o})]}),N,R(uw,{...y&&!X?{key:`pb-${y}`}:{},rtl:L,theme:F,delay:a,isRunning:e,isIn:k,closeToast:d,hide:c,type:u,style:_,className:x,controlledProgress:X,progress:C||0})]}))},vu=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},dw=gu(vu("bounce",!0));gu(vu("slide",!0));gu(vu("zoom"));gu(vu("flip"));const Gd=U.exports.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:i,isToastActive:r}=aw(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const d=Fi("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return jt(s)?s({position:c,rtl:a,defaultClassName:d}):Fi(d,gl(s))}return U.exports.useEffect(()=>{e&&(e.current=i.current)},[]),R("div",{ref:i,className:"Toastify",id:l,children:n((c,d)=>{const f=d.length?{...o}:{...o,pointerEvents:"none"};return R("div",{className:u(c),style:f,children:d.map((g,v)=>{let{content:p,props:h}=g;return U.exports.createElement(cw,{...h,isIn:r(h.toastId),style:{...h.style,"--nth":v+1,"--len":d.length},key:`toast-${h.key}`},p)})},`container-${c}`)})})});Gd.displayName="ToastContainer",Gd.defaultProps={position:"top-right",transition:dw,autoClose:5e3,closeButton:Fv,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let sc,dr=new Map,So=[],fw=1;function zv(){return""+fw++}function hw(t){return t&&(Lr(t.toastId)||Io(t.toastId))?t.toastId:zv()}function ko(t,e){return dr.size>0?fn.emit(0,t,e):So.push({content:t,options:e}),e.toastId}function ql(t,e){return{...e,type:e&&e.type||t,toastId:hw(e)}}function Pa(t){return(e,n)=>ko(e,ql(t,n))}function Xe(t,e){return ko(t,ql("default",e))}Xe.loading=(t,e)=>ko(t,ql("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Xe.promise=function(t,e,n){let i,{pending:r,error:s,success:o}=e;r&&(i=Lr(r)?Xe.loading(r,n):Xe.loading(r.render,{...n,...r}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null)return void Xe.dismiss(i);const g={type:c,...a,...n,data:f},v=Lr(d)?{render:d}:d;return i?Xe.update(i,{...g,...v}):Xe(v.render,{...g,...v}),f},u=jt(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},Xe.success=Pa("success"),Xe.info=Pa("info"),Xe.error=Pa("error"),Xe.warning=Pa("warning"),Xe.warn=Xe.warning,Xe.dark=(t,e)=>ko(t,ql("default",{theme:"dark",...e})),Xe.dismiss=t=>{dr.size>0?fn.emit(1,t):So=So.filter(e=>t!=null&&e.options.toastId!==t)},Xe.clearWaitingQueue=function(t){return t===void 0&&(t={}),fn.emit(5,t)},Xe.isActive=t=>{let e=!1;return dr.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Xe.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(i,r){let{containerId:s}=r;const o=dr.get(s||sc);return o&&o.getToast(i)}(t,e);if(n){const{props:i,content:r}=n,s={delay:100,...i,...e,toastId:e.toastId||t,updateId:zv()};s.toastId!==t&&(s.staleId=t);const o=s.render||r;delete s.render,ko(o,s)}},0)},Xe.done=t=>{Xe.update(t,{progress:1})},Xe.onChange=t=>(fn.on(4,t),()=>{fn.off(4,t)}),Xe.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Xe.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},fn.on(2,t=>{sc=t.containerId||t,dr.set(sc,t),So.forEach(e=>{fn.emit(0,e.content,e.options)}),So=[]}).on(3,t=>{dr.delete(t.containerId||t),dr.size===0&&fn.off(0).off(1).off(5)});var pw=Object.defineProperty,mw=(t,e,n)=>e in t?pw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,oc=(t,e,n)=>(mw(t,typeof e!="symbol"?e+"":e,n),n);class gw{constructor(){oc(this,"current",this.detect()),oc(this,"handoffState","pending"),oc(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let vl=new gw,xu=(t,e)=>{vl.isServer?U.exports.useEffect(t,e):U.exports.useLayoutEffect(t,e)};function Cs(t){let e=U.exports.useRef(t);return xu(()=>{e.current=t},[t]),e}function vw(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function la(){let t=[],e={addEventListener(n,i,r,s){return n.addEventListener(i,r,s),e.add(()=>n.removeEventListener(i,r,s))},requestAnimationFrame(...n){let i=requestAnimationFrame(...n);return e.add(()=>cancelAnimationFrame(i))},nextFrame(...n){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...n))},setTimeout(...n){let i=setTimeout(...n);return e.add(()=>clearTimeout(i))},microTask(...n){let i={current:!0};return vw(()=>{i.current&&n[0]()}),e.add(()=>{i.current=!1})},style(n,i,r){let s=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:r}),this.add(()=>{Object.assign(n.style,{[i]:s})})},group(n){let i=la();return n(i),this.add(()=>i.dispose())},add(n){return t.push(n),()=>{let i=t.indexOf(n);if(i>=0)for(let r of t.splice(i,1))r()}},dispose(){for(let n of t.splice(0))n()}};return e}function Ov(){let[t]=U.exports.useState(la);return U.exports.useEffect(()=>()=>t.dispose(),[t]),t}let li=function(t){let e=Cs(t);return ft.useCallback((...n)=>e.current(...n),[e])};function Uv(){let[t,e]=U.exports.useState(vl.isHandoffComplete);return t&&vl.isHandoffComplete===!1&&e(!1),U.exports.useEffect(()=>{t!==!0&&e(!0)},[t]),U.exports.useEffect(()=>vl.handoff(),[]),t}function $n(t,e,...n){if(t in e){let r=e[t];return typeof r=="function"?r(...n):r}let i=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,$n),i}let xw=Symbol();function Bv(...t){let e=U.exports.useRef(t);U.exports.useEffect(()=>{e.current=t},[t]);let n=li(i=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(i):r.current=i)});return t.every(i=>i==null||(i==null?void 0:i[xw]))?void 0:n}function Wd(...t){return t.filter(Boolean).join(" ")}var Vv=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Vv||{}),ui=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(ui||{});function Hv({ourProps:t,theirProps:e,slot:n,defaultTag:i,features:r,visible:s=!0,name:o}){let a=Gv(e,t);if(s)return Ra(a,n,i,o);let l=r!=null?r:0;if(l&2){let{static:u=!1,...c}=a;if(u)return Ra(c,n,i,o)}if(l&1){let{unmount:u=!0,...c}=a;return $n(u?0:1,{[0](){return null},[1](){return Ra({...c,hidden:!0,style:{display:"none"}},n,i,o)}})}return Ra(a,n,i,o)}function Ra(t,e={},n,i){let{as:r=n,children:s,refName:o="ref",...a}=ac(t,["unmount","static"]),l=t.ref!==void 0?{[o]:t.ref}:{},u=typeof s=="function"?s(e):s;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(e));let c={};if(e){let d=!1,f=[];for(let[g,v]of Object.entries(e))typeof v=="boolean"&&(d=!0),v===!0&&f.push(g);d&&(c["data-headlessui-state"]=f.join(" "))}if(r===U.exports.Fragment&&Object.keys(zp(a)).length>0){if(!U.exports.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${i} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let d=u.props,f=typeof(d==null?void 0:d.className)=="function"?(...v)=>Wd(d==null?void 0:d.className(...v),a.className):Wd(d==null?void 0:d.className,a.className),g=f?{className:f}:{};return U.exports.cloneElement(u,Object.assign({},Gv(u.props,zp(ac(a,["ref"]))),c,l,_w(u.ref,l.ref),g))}return U.exports.createElement(r,Object.assign({},ac(a,["ref"]),r!==U.exports.Fragment&&l,r!==U.exports.Fragment&&c),u)}function _w(...t){return{ref:t.every(e=>e==null)?void 0:e=>{for(let n of t)n!=null&&(typeof n=="function"?n(e):n.current=e)}}}function Gv(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let i of t)for(let r in i)r.startsWith("on")&&typeof i[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(i[r])):e[r]=i[r];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(i=>[i,void 0])));for(let i in n)Object.assign(e,{[i](r,...s){let o=n[i];for(let a of o){if((r instanceof Event||(r==null?void 0:r.nativeEvent)instanceof Event)&&r.defaultPrevented)return;a(r,...s)}}});return e}function ih(t){var e;return Object.assign(U.exports.forwardRef(t),{displayName:(e=t.displayName)!=null?e:t.name})}function zp(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function ac(t,e=[]){let n=Object.assign({},t);for(let i of e)i in n&&delete n[i];return n}let rh=U.exports.createContext(null);rh.displayName="OpenClosedContext";var si=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(si||{});function Wv(){return U.exports.useContext(rh)}function yw({value:t,children:e}){return ft.createElement(rh.Provider,{value:t},e)}function sh(){let t=U.exports.useRef(!1);return xu(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function ww(t=0){let[e,n]=U.exports.useState(t),i=sh(),r=U.exports.useCallback(l=>{i.current&&n(u=>u|l)},[e,i]),s=U.exports.useCallback(l=>Boolean(e&l),[e]),o=U.exports.useCallback(l=>{i.current&&n(u=>u&~l)},[n,i]),a=U.exports.useCallback(l=>{i.current&&n(u=>u^l)},[n]);return{flags:e,addFlag:r,hasFlag:s,removeFlag:o,toggleFlag:a}}function Sw(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function lc(t,...e){t&&e.length>0&&t.classList.add(...e)}function uc(t,...e){t&&e.length>0&&t.classList.remove(...e)}function Mw(t,e){let n=la();if(!t)return n.dispose;let{transitionDuration:i,transitionDelay:r}=getComputedStyle(t),[s,o]=[i,r].map(l=>{let[u=0]=l.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,d)=>d-c);return u}),a=s+o;if(a!==0){n.group(u=>{u.setTimeout(()=>{e(),u.dispose()},a),u.addEventListener(t,"transitionrun",c=>{c.target===c.currentTarget&&u.dispose()})});let l=n.addEventListener(t,"transitionend",u=>{u.target===u.currentTarget&&(e(),l())})}else e();return n.add(()=>e()),n.dispose}function bw(t,e,n,i){let r=n?"enter":"leave",s=la(),o=i!==void 0?Sw(i):()=>{};r==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let a=$n(r,{enter:()=>e.enter,leave:()=>e.leave}),l=$n(r,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),u=$n(r,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return uc(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),lc(t,...a,...u),s.nextFrame(()=>{uc(t,...u),lc(t,...l),Mw(t,()=>(uc(t,...a),lc(t,...e.entered),o()))}),s.dispose}function Ew({container:t,direction:e,classes:n,onStart:i,onStop:r}){let s=sh(),o=Ov(),a=Cs(e);xu(()=>{let l=la();o.add(l.dispose);let u=t.current;if(u&&a.current!=="idle"&&s.current)return l.dispose(),i.current(a.current),l.add(bw(u,n.current,a.current==="enter",()=>{l.dispose(),r.current(a.current)})),l.dispose},[e])}function rr(t=""){return t.split(" ").filter(e=>e.trim().length>1)}let _u=U.exports.createContext(null);_u.displayName="TransitionContext";var Tw=(t=>(t.Visible="visible",t.Hidden="hidden",t))(Tw||{});function Cw(){let t=U.exports.useContext(_u);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function Aw(){let t=U.exports.useContext(yu);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let yu=U.exports.createContext(null);yu.displayName="NestingContext";function wu(t){return"children"in t?wu(t.children):t.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function jv(t,e){let n=Cs(t),i=U.exports.useRef([]),r=sh(),s=Ov(),o=li((g,v=ui.Hidden)=>{let p=i.current.findIndex(({el:h})=>h===g);p!==-1&&($n(v,{[ui.Unmount](){i.current.splice(p,1)},[ui.Hidden](){i.current[p].state="hidden"}}),s.microTask(()=>{var h;!wu(i)&&r.current&&((h=n.current)==null||h.call(n))}))}),a=li(g=>{let v=i.current.find(({el:p})=>p===g);return v?v.state!=="visible"&&(v.state="visible"):i.current.push({el:g,state:"visible"}),()=>o(g,ui.Unmount)}),l=U.exports.useRef([]),u=U.exports.useRef(Promise.resolve()),c=U.exports.useRef({enter:[],leave:[],idle:[]}),d=li((g,v,p)=>{l.current.splice(0),e&&(e.chains.current[v]=e.chains.current[v].filter(([h])=>h!==g)),e==null||e.chains.current[v].push([g,new Promise(h=>{l.current.push(h)})]),e==null||e.chains.current[v].push([g,new Promise(h=>{Promise.all(c.current[v].map(([m,x])=>x)).then(()=>h())})]),v==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>p(v)):p(v)}),f=li((g,v,p)=>{Promise.all(c.current[v].splice(0).map(([h,m])=>m)).then(()=>{var h;(h=l.current.shift())==null||h()}).then(()=>p(v))});return U.exports.useMemo(()=>({children:i,register:a,unregister:o,onStart:d,onStop:f,wait:u,chains:c}),[a,o,i,d,f,c,u])}function Lw(){}let Pw=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Op(t){var e;let n={};for(let i of Pw)n[i]=(e=t[i])!=null?e:Lw;return n}function Rw(t){let e=U.exports.useRef(Op(t));return U.exports.useEffect(()=>{e.current=Op(t)},[t]),e}let Dw="div",$v=Vv.RenderStrategy;function Nw(t,e){let{beforeEnter:n,afterEnter:i,beforeLeave:r,afterLeave:s,enter:o,enterFrom:a,enterTo:l,entered:u,leave:c,leaveFrom:d,leaveTo:f,...g}=t,v=U.exports.useRef(null),p=Bv(v,e),h=g.unmount?ui.Unmount:ui.Hidden,{show:m,appear:x,initial:_}=Cw(),[y,S]=U.exports.useState(m?"visible":"hidden"),C=Aw(),{register:L,unregister:w}=C,A=U.exports.useRef(null);U.exports.useEffect(()=>L(v),[L,v]),U.exports.useEffect(()=>{if(h===ui.Hidden&&v.current){if(m&&y!=="visible"){S("visible");return}return $n(y,{hidden:()=>w(v),visible:()=>L(v)})}},[y,v,L,w,m,h]);let k=Cs({enter:rr(o),enterFrom:rr(a),enterTo:rr(l),entered:rr(u),leave:rr(c),leaveFrom:rr(d),leaveTo:rr(f)}),O=Rw({beforeEnter:n,afterEnter:i,beforeLeave:r,afterLeave:s}),Z=Uv();U.exports.useEffect(()=>{if(Z&&y==="visible"&&v.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[v,y,Z]);let J=_&&!x,F=(()=>!Z||J||A.current===m?"idle":m?"enter":"leave")(),j=ww(0),V=li(Y=>$n(Y,{enter:()=>{j.addFlag(si.Opening),O.current.beforeEnter()},leave:()=>{j.addFlag(si.Closing),O.current.beforeLeave()},idle:()=>{}})),X=li(Y=>$n(Y,{enter:()=>{j.removeFlag(si.Opening),O.current.afterEnter()},leave:()=>{j.removeFlag(si.Closing),O.current.afterLeave()},idle:()=>{}})),D=jv(()=>{S("hidden"),w(v)},C);Ew({container:v,classes:k,direction:F,onStart:Cs(Y=>{D.onStart(v,Y,V)}),onStop:Cs(Y=>{D.onStop(v,Y,X),Y==="leave"&&!wu(D)&&(S("hidden"),w(v))})}),U.exports.useEffect(()=>{J&&(h===ui.Hidden?A.current=null:A.current=m)},[m,J,y]);let N=g,z={ref:p};return x&&m&&_&&(N={...N,className:Wd(g.className,...k.current.enter,...k.current.enterFrom)}),ft.createElement(yu.Provider,{value:D},ft.createElement(yw,{value:$n(y,{visible:si.Open,hidden:si.Closed})|j.flags},Hv({ourProps:z,theirProps:N,defaultTag:Dw,features:$v,visible:y==="visible",name:"Transition.Child"})))}function Iw(t,e){let{show:n,appear:i=!1,unmount:r,...s}=t,o=U.exports.useRef(null),a=Bv(o,e);Uv();let l=Wv();if(n===void 0&&l!==null&&(n=(l&si.Open)===si.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,c]=U.exports.useState(n?"visible":"hidden"),d=jv(()=>{c("hidden")}),[f,g]=U.exports.useState(!0),v=U.exports.useRef([n]);xu(()=>{f!==!1&&v.current[v.current.length-1]!==n&&(v.current.push(n),g(!1))},[v,n]);let p=U.exports.useMemo(()=>({show:n,appear:i,initial:f}),[n,i,f]);U.exports.useEffect(()=>{if(n)c("visible");else if(!wu(d))c("hidden");else{let _=o.current;if(!_)return;let y=_.getBoundingClientRect();y.x===0&&y.y===0&&y.width===0&&y.height===0&&c("hidden")}},[n,d]);let h={unmount:r},m=li(()=>{var _;f&&g(!1),(_=t.beforeEnter)==null||_.call(t)}),x=li(()=>{var _;f&&g(!1),(_=t.beforeLeave)==null||_.call(t)});return ft.createElement(yu.Provider,{value:d},R(_u.Provider,{value:p,children:Hv({ourProps:{...h,as:U.exports.Fragment,children:ft.createElement(Xv,{ref:a,...h,...s,beforeEnter:m,beforeLeave:x})},theirProps:{},defaultTag:U.exports.Fragment,features:$v,visible:u==="visible",name:"Transition"})}))}function kw(t,e){let n=U.exports.useContext(_u)!==null,i=Wv()!==null;return ft.createElement(ft.Fragment,null,!n&&i?ft.createElement(jd,{ref:e,...t}):ft.createElement(Xv,{ref:e,...t}))}let jd=ih(Iw),Xv=ih(Nw),Fw=ih(kw),zw=Object.assign(jd,{Child:Fw,Root:jd});const oh=""+new URL("logo.116d291e.png",import.meta.url).href,Up="relative hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium after:absolute after:h-[3px] after:w-[70%] after:bottom-[1px] after:left-[0] after:bg-[var(--main-color)]",ao="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",Bp="relative  hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium after:absolute after:h-[3px] after:w-[70%] after:bottom-[1px] after:left-[0] after:bg-[var(--main-color)]",lo="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";function Ow(){const[t,e]=U.exports.useState(!1),i=qs().pathname;return R(tr,{children:me("nav",{className:"bg-zinc-800",children:[R("div",{className:"mx-auto min-w-[90vw] px-4 sm:px-6 lg:px-8",children:me("div",{className:"flex h-16 min-w-[90vw] items-center justify-between",children:[me("div",{ref:U.exports.createRef(),className:"flex min-w-[60vw] items-center justify-between md:min-w-[90vw]",children:[me(Ze,{to:"https://kuchengames.de",className:"flex flex-shrink-0 flex-row items-center justify-around p-2 font-bold text-[var(--white-color)] hover:text-white",children:[R("img",{className:"h-8 w-8",src:oh,alt:"Workflow"}),R("p",{className:"ml-2 font-extrabold tracking-tight",children:"KuchenGames"})]}),R("div",{className:"hidden md:block",children:me("div",{ref:U.exports.createRef(),className:"ml-10 flex items-baseline space-x-4",children:[R(Ze,{to:"/",className:i==="/"?Up:ao,children:"Home"}),R(Ze,{to:"https://dash.kuchengames.de",className:ao+" pointer-events-none cursor-not-allowed text-gray-500",children:"Dashboard"}),R(Ze,{to:"/team",className:i==="/team"?Up:ao,children:"Team"}),R(Ze,{to:"https://shop.kuchengames.de",className:ao,children:"Shop"}),R(Ze,{to:"https://wiki.kuchengames.de",className:ao,children:"Wiki"})]})})]}),R("div",{className:"mr-2 flex md:hidden",children:me("button",{onClick:()=>e(!t),type:"button",className:"inline-flex cursor-pointer items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]","aria-controls":"mobile-menu","aria-expanded":"false",children:[R("span",{className:"sr-only",children:"Open main menu"}),t?R("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:R("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):R("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:R("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),R(zw,{show:t,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:()=>R("div",{className:"md:hidden",id:"mobile-menu",children:me("div",{ref:U.exports.createRef(),className:"space-y-1 px-2 pb-3 pt-2 sm:px-3",children:[R(Ze,{to:"/",className:i==="/"?Bp:lo,children:"Home"}),R(Ze,{to:"https://dash.kuchengames.de",className:lo+" pointer-events-none cursor-not-allowed text-gray-500",children:"Dashboard"}),R(Ze,{to:"/team",className:i==="/team"?Bp:lo,children:"Team"}),R(Ze,{to:"https://shop.kuchengames.de",className:lo,children:"Shop"}),R(Ze,{to:"https://wiki.kuchengames.de",className:lo,children:"Wiki"})]})})})]})})}var qv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vp=ft.createContext&&ft.createContext(qv),Xi=globalThis&&globalThis.__assign||function(){return Xi=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Xi.apply(this,arguments)},Uw=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function Yv(t){return t&&t.map(function(e,n){return ft.createElement(e.tag,Xi({key:n},e.attr),Yv(e.child))})}function wn(t){return function(e){return R(Bw,{...Xi({attr:Xi({},t.attr)},e),children:Yv(t.child)})}}function Bw(t){var e=function(n){var i=t.attr,r=t.size,s=t.title,o=Uw(t,["attr","size","title"]),a=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),me("svg",{...Xi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:Xi(Xi({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&R("title",{children:s}),t.children]})};return Vp!==void 0?R(Vp.Consumer,{children:function(n){return e(n)}}):e(qv)}function Qv(t){return wn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"}}]})(t)}function Vw(t){return wn({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(t)}function Hw(t){return wn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(t)}function Gw(t){return wn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"}}]})(t)}function Ww(t){return wn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)}function jw(t){return wn({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(t)}function $w(t){return wn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(t)}function Xw(){return me("footer",{className:"items-left flex min-h-[150px] w-screen flex-col justify-start bg-zinc-900 p-3",children:[R("div",{className:"items-left flex flex-col justify-start md:flex-row",children:me(Ze,{to:"https://kuchengames.de",className:"flex flex-shrink-0 flex-row items-center p-2 font-bold text-[var(--white-color)] hover:text-white",children:[R("img",{className:"h-[70px] w-[70px]",src:oh,alt:"Workflow"}),R("p",{className:"ml-2 text-xl font-extrabold tracking-tight",children:"KuchenGames"})]})}),me("div",{className:"items-left mb-2 flex flex-row justify-start",children:[R(Ze,{target:"_blank",to:"https://discord.kuchengames.de",className:"p-2 text-[var(--main-color)] hover:text-[var(--description-color)]",children:R(Qv,{className:"mr-1",size:"1.5rem"})}),R(Ze,{target:"_blank",to:"https://github.com/kuchengamesde",className:"p-2 text-[var(--main-color)] hover:text-[var(--description-color)]",children:R(Vw,{className:"mr-1",size:"1.5rem"})}),R(Ze,{target:"_blank",to:"https://www.tiktok.com/@kuchengames.de",className:"p-2 text-[var(--main-color)] hover:text-[var(--description-color)]",children:R(Gw,{className:"mr-1",size:"1.5rem"})}),R(Ze,{target:"_blank",to:"https://www.instagram.com/kuchengames",className:"p-2 text-[var(--main-color)] hover:text-[var(--description-color)]",children:R(Hw,{className:"mr-1",size:"1.5rem"})}),R(Ze,{target:"_blank",to:"https://twitter.com/KuchenGamesDE",className:"p-2 text-[var(--main-color)] hover:text-[var(--description-color)]",children:R(Ww,{className:"mr-1",size:"1.5rem"})}),R(Ze,{target:"_blank",to:"https://www.youtube.com/@KuchenGamesDE",className:"p-2 text-[var(--main-color)] hover:text-[var(--description-color)]",children:R(jw,{className:"mr-1",size:"1.5rem"})})]}),R("hr",{}),me("p",{className:"mt-2 pt-2 text-sm font-semibold text-[var(--description-color)]",children:["Copyright \xA9 2023 \xBB"," ",R(Ze,{target:"_blank",to:"https://kuchengames.de",className:"hover:text-[var(--main-color)]",children:"KuchenGames.de"})]}),me("p",{className:"pt-2 text-sm font-thin text-[var(--description-color)]",children:["Made with \u2764 by"," ",R(Ze,{target:"_blank",to:"https://github.com/LuciferMorningstarDev",className:"hover:text-[var(--main-color)]",children:"LuciferMorningstarDev"})]})]})}const qw=""+new URL("bg-header.771fde14.png",import.meta.url).href;function Yw(){return R("img",{src:qw,alt:"headerBackground",className:"fixed left-0 top-0 z-[-1] h-screen w-screen"})}function Qw(t){return wn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 18h12v2H6zm6-14.414-6.707 6.707 1.414 1.414L11 7.414V16h2V7.414l4.293 4.293 1.414-1.414z"}}]})(t)}function Zw(t){return wn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z"}},{tag:"path",attr:{d:"M13 8h-2v4H7.991l4.005 4.005L16 12h-3z"}}]})(t)}function Kw(t){return wn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 1.993C6.486 1.994 2 6.48 2 11.994c.001 5.514 4.487 10 10 10 5.515 0 10.001-4.486 10.001-10s-4.486-10-10-10.001zM12 19.994c-4.41 0-7.999-3.589-8-8 0-4.411 3.589-8 8.001-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8.001 8z"}},{tag:"path",attr:{d:"m12.001 8.001-4.005 4.005h3.005V16h2v-3.994h3.004z"}}]})(t)}const Jw=(...t)=>t.filter(Boolean).join(" ");function eS(){const[t,e]=U.exports.useState(!1),n=()=>{window.scrollY>300?e(!0):e(!1)},i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return U.exports.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),R("div",{className:"fixed bottom-4 right-4",children:R("button",{type:"button",onClick:i,className:Jw(t?"opacity-100":"opacity-0","inline-flex cursor-pointer items-center rounded-full border-transparent bg-zinc-800 p-3 text-white shadow-sm shadow-sm shadow-[var(--main-color)] transition-opacity hover:text-[var(--main-color)] hover:shadow-lg hover:shadow-[var(--main-color)] focus:border-transparent focus:outline-none focus:ring-0 focus:ring-2 focus:ring-[var(--accent-color)]"),children:R(Qw,{className:"h-6 w-6","aria-hidden":"true"})})})}async function tS(){return new Promise((t,e)=>{fetch("https://discord.com/api/guilds/993855292448198756/widget.json",{method:"GET"},1e4).then(n=>n.json()).then(t).catch(e)})}function nS(){const[t,e]=U.exports.useState(0);return U.exports.useEffect(()=>{tS().then(n=>{e((n==null?void 0:n.presence_count)||0)}).catch(console.error)},[]),me("div",{className:"flex flex-row items-center justify-center",children:[R("div",{className:"text-white"}),me("div",{className:"text-white",children:[R("p",{className:"font-lgf font-bold",children:"DISCORD SERVER"}),me("p",{className:"text-[var(--description-color)]",children:[R("span",{className:"font-bold text-[var(--main-color)]",children:t>0?t:"Keine"})," Nutzer Online"]})]})]})}async function iS(){return new Promise((t,e)=>{fetch("https://api.mcsrvstat.us/2/kuchengames.de",{method:"GET"},1e4).then(n=>n.json()).then(t).catch(e)})}function rS(){const[t,e]=U.exports.useState(0),[n,i]=U.exports.useState(0);return U.exports.useEffect(()=>{iS().then(r=>{var s,o;i(((s=r==null?void 0:r.players)==null?void 0:s.max)||0),e(((o=r==null?void 0:r.players)==null?void 0:o.online)||0)}).catch(console.error)},[]),me("div",{className:"flex flex-row items-center justify-center",children:[R("div",{className:"text-white"}),me("div",{className:"text-white",children:[R("p",{className:"font-lg font-bold",children:"MINECRAFT SERVER"}),R("p",{className:"text-[var(--description-color)]",children:n===0?me("span",{children:["Wartungsmodus ",R("span",{className:"font-bold text-[var(--main-color)]",children:t})," Online"]}):me("span",{children:[t>0?me(tr,{children:[R("span",{className:"font-bold text-[var(--main-color)]",children:t})," / ",R("span",{className:"font-bold text-[var(--main-color)]",children:n})]}):R("span",{className:"font-bold text-[var(--main-color)]",children:"Keine"})," ","Spieler Online"]})})]})]})}function sS(){return me("div",{className:"flex min-h-[calc(100vh-70px)] flex-col items-center justify-around text-white md:flex-row",children:[me("div",{className:"items-left flex min-h-[calc(80vh)] w-[90vw] flex-col justify-center md:w-[35vw]",children:[R("h3",{className:"font-semibold",children:"MINECRAFT CITYBUILD NETZWERK"}),R("h1",{className:"text-3xl font-extrabold text-[var(--main-color)] md:text-5xl",children:"KUCHENGAMES.DE"}),R("div",{className:"my-4 h-1 w-full bg-gray-700"}),R("p",{className:"text-[var(--white-color)] drop-shadow-lg",children:"Bereit, deine eigene Stadt zu bauen? Auf unserem Minecraft Citybuild kannst du zeigen, was in dir steckt! Hier darfst du gerne kreativ sein und einzigartige Geb\xE4ude errichten - solange sie nicht zu sehr in die H\xF6he ragen und unseren Server zum Absturz bringen. Wirf schon mal deinen Bauplan an und bleib dran f\xFCr weitere Updates!"}),R("br",{}),R("p",{className:"text-[var(--white-color)]",children:"Tritt uns bei und Spiele mit deinen Freunden"}),me("div",{className:"mt-4 flex w-full flex-row items-center justify-around",children:[R("button",{onClick:()=>{navigator!=null&&navigator.clipboard?(navigator.clipboard.writeText("kuchengames.de:25565"),Xe.success("\u{1F370} IP erfolgreich kopiert!")):Xe.error("\u{1F370} Error!")},className:"inline-flex items-center rounded bg-[#07bc0c] px-4 py-2 font-bold text-[black] transition-all hover:bg-[#2c722f] hover:text-[white]",children:R("span",{children:"IP Kopieren"})}),R(Ze,{to:"https://discord.kuchengames.de",className:"border-1 inline-flex items-center rounded border-white bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400",children:R("span",{children:"Discord beitreten"})})]})]}),me("div",{className:"flex min-h-[calc(80vh)] w-[90vw] flex-col items-center justify-center md:w-[35vw]",children:[R("img",{className:"float max-w-[400px]",src:oh,alt:"Logo"}),me("div",{className:"mt-4 flex w-full flex-row flex-wrap items-center justify-around rounded-md bg-gray-400 bg-opacity-10 bg-clip-padding p-4 text-center backdrop-blur-lg backdrop-filter",children:[R(nS,{}),R(rS,{})]})]})]})}const oS=[{title:"Wann wird der Server er\xF6ffnet?",content:`
Aktuell steht kein Termin fest jedoch arbeiten wir stark daran ihn in den n\xE4chsten Monaten zu er\xF6ffnen.
<br />
Auf unserem
<a target="_blank" href="https://discord.kuchengames.de" style="color:orange;text-decoration:none;">
    Discord
</a>
halten wir dich dar\xFCber auf dem Laufenden.
        `},{title:"Wird man mit der Bedrock Edition beitreten k\xF6nnen?",content:`
Anfangs ist es uns nicht m\xF6glich Bedrock zu unterst\xFCtzen, jedoch ist es f\xFCr die Zukunft geplant das Netzwerk auch f\xFCr Bedrock Spieler zug\xE4nglich zu machen.
        `},{title:"Suchen wir aktuell Teammitglieder?",content:`
Ja du kannst dich jederzeit auf unserem
<a target="_blank" href="https://discord.kuchengames.de" style="color:orange;text-decoration:none;">
    Discord
</a>
um eine Stelle als Teammitglied bewerben. Bei Bedarf und entsprechender Qualifikation werden wir auf deine Bewerbung antworten.
<br />
Bitte habe Verst\xE4ndnis wenn sich niemand bei dir meldet, da es immer viele Bewerbungen gibt und veruche dich ein weiteres mal zu einem sp\xE4teren Zeitpunkt zu
bewerben.
        `},{title:"Wo finde ich eine \xDCbersicht \xFCber Plugins und Funktionen auf dem Server?",content:`
 Wir haben ein
<a target="_blank" href="https://wiki.kuchengames.de" style="color:orange;text-decoration:none;">
    Wiki
</a>
mit allen wichtigen Informationen zu unserem Server ver\xF6ffentlicht. Dort findest du die meissten Antworten auf deine Fragem.
<br /> Desweiteren kannst du jederzeit auch ein Ticket auf unserem
<a target="_blank" href="https://discord.kuchengames.de" style="color:orange;text-decoration:none;">
    Discord
</a>
er\xF6ffnen und das Support Team wird dir weiter helfen.
        `},{title:"Wie erhalte ich ein Grundst\xFCck in der Plotwelt?",content:`
Du kannst ein Grundst\xFCck erhalten, indem du den Befehl "/plot auto" in den Chat eingibst. Dir wird automatisch ein freies Grundst\xFCck zugewiesen.
        `},{title:"Was sind ChestShops?",content:`
ChestShops sind virtuelle L\xE4den, die du auf deinem Plot oder in anderen Welten erstellen kannst. Du kannst Waren in Kisten legen und Preise festlegen, damit andere Spieler bei dir einkaufen k\xF6nnen.
        `},{title:"Was ist der BattlePass?",content:`
Der BattlePass ist ein Fortschrittssystem, das es Spielern erm\xF6glicht, Belohnungen zu verdienen, indem sie Herausforderungen abschlie\xDFen. Je mehr Herausforderungen du abschlie\xDFt, desto h\xF6her steigst du im BattlePass auf und erh\xE4ltst bessere Belohnungen.
        `},{title:"Wie funktioniert das RTP-System in der Farmwelt?",content:`
Das RTP-System (Random Teleport) erm\xF6glicht es dir, zuf\xE4llig in der Farmwelt zu teleportieren, um neue Gebiete zu erkunden. Du kannst den Befehl "/rtp go" verwenden, um dich an einen zuf\xE4lligen Ort zu teleportieren.
        `},{title:"Was sind Pets?",content:`
Pets sind Begleittiere, die du auf dem Server haben kannst. Sie k\xF6nnen dir Gesellschaft leisten und in einigen F\xE4llen besondere F\xE4higkeiten oder Boni bieten.
        `},{title:"Was sind AdminShops?",content:`
AdminShops sind L\xE4den, die von den Serveradministratoren verwaltet werden. Hier kannst du bestimmte Gegenst\xE4nde kaufen oder verkaufen, um deine Ressourcen zu verwalten.
        `},{title:"Was ist der Dungeon und was erwartet mich dort?",content:`
Der Dungeon ist ein spezieller Bereich auf dem Server, der Abenteuer und Herausforderungen bietet. Dort findest du spannende K\xE4mpfe gegen Monster, einzigartige Beute und m\xF6glicherweise sogar eine kleine Hintergrundgeschichte, die das Spielerlebnis vertieft.
        `},{title:"Was ist die Mine und was erwartet mich dort?",content:`
Die Mine ist ein Bereich auf dem Server, in dem du Rohstoffe abbauen kannst. Dort findest du verschiedene Ressourcen wie Erze und Edelsteine. Je tiefer du in die Mine gehst, desto wertvollere Materialien wirst du finden. Sei jedoch vorsichtig, da es auch Gefahren in den Tiefen der Mine geben kann.
        `}];function aS({title:t,children:e,index:n,activeIndex:i,setActiveIndex:r}){const s=o=>r(i!==o?o:0);return me(tr,{children:[me("div",{onClick:()=>s(n),className:"mt-2 flex w-[90vw] cursor-pointer justify-between rounded border-[1px] border-[#ffffff2d] bg-[#0d0f1881] px-5 py-3 backdrop-blur-md transition-all hover:bg-[#2b314e81]",style:{borderRadius:i===n?"5px 5px 0 0":"5px"},children:[R("div",{className:"flex w-full justify-center",children:R("div",{className:"font-bold text-white",children:t})}),R("div",{className:"flex items-center justify-center",children:i===n?R(Kw,{className:"h-6 w-6"}):R(Zw,{className:"h-6 w-6"})})]}),i===n&&R("div",{className:"shadow-3xl mb-6 w-[90vw] cursor-default rounded-b-md border-[1px] border-t-0 border-[#ffffff2d] bg-[#555e8681] p-4 text-center text-white shadow-cyan-500/50 backdrop-blur-md",dangerouslySetInnerHTML:{__html:e}})]})}function lS(){const[t,e]=U.exports.useState(0);return R("div",{className:"flex flex-col items-center justify-center",children:oS.map((n,i)=>R(aS,{title:n.title,index:i+1,activeIndex:t,setActiveIndex:e,children:n.content.replace("<script","").replace("<\/script","")},i+1))})}const uS=""+new URL("about-person.6a3434a6.png",import.meta.url).href,cS=""+new URL("citybuild.f935060d.png",import.meta.url).href,dS=""+new URL("dungeon.446a228a.png",import.meta.url).href,fS=""+new URL("mine.e8a3e7d1.png",import.meta.url).href;function hS(){return me("div",{className:"select-[var(--main-color)] flex min-h-[100vh] select-text flex-col items-center justify-center",children:[R("section",{className:"flex min-h-[60vh] w-screen flex-col items-center justify-center bg-[var(--s1-background)] p-3",children:me("div",{id:"more",className:"flex w-[90vw] flex-col items-center justify-between md:flex-row",children:[me("div",{className:"m-2 flex w-[90vw] flex-col justify-center md:w-[50vw]",children:[R("h2",{className:"text-xl font-bold",children:R("span",{className:"aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]",children:"Wer sind wir?"})}),me("p",{className:"m-2 p-1 text-[var(--description-color)]",children:["KuchenGames.de ist ein deutscher Minecraft Citybuild Server, welcher seit dem Jahr 2020 aktiv in der Entwicklung ist!",R("br",{}),"Wir zeichnen uns besonders durch unsere starke Zusammenarbeit mit unserer Community und der Vielf\xE4ltigkeit unseres Citybuilds aus."]})]}),R("div",{className:"m-2 flex flex-col justify-center",children:R("div",{className:"relative h-[250px] w-[250px] rounded-bl-[3px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[3px] bg-[var(--main-color)] shadow-sm shadow-[var(--main-color)]",children:R("img",{className:"absolute bottom-0 left-0 m-2 h-[200px]",src:uS,alt:"Minecraft person"})})})]})}),me("section",{className:"flex min-h-[60vh] w-screen flex-col items-center justify-center bg-[var(--s2-background)] p-3",children:[me("div",{className:"mt-4 flex flex-col items-center justify-between bg-[var(--s2-background)] p-3 md:flex-row",children:[R("div",{className:"m-2 flex flex-col justify-center",children:R("img",{className:"m-2 h-[200px] rounded-bl-[3px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[3px]",src:cS,alt:"Minecraft person"})}),me("div",{className:"m-2 flex w-[90vw] flex-col justify-center md:w-[50vw]",children:[R("h2",{className:"text-xl font-bold",children:R("span",{className:"aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]",children:"Citybuild"})}),R("p",{className:"m-2 p-1 text-[var(--description-color)]",children:"Unser CityBuild Server ist eine von Spielern erschaffene Umgebung, die sich in einem Pers\xF6nlichen und Begrenztem Quadratischen Plot-System verh\xE4lt. Die Items und Baubl\xF6cke f\xFCr die Plots werden \xFCber die jeweiligen Farmwelten, Overworld / Nether / End freigeschaltet und selbst erworben. Gef\xF6rdert wird das Spielerlebnis von der Community, die eigene Shops, Strukturen, H\xE4user oder Historische Strukturen nachbauen k\xF6nnen. Nat\xFCrlich gibt es auch von dem KuchenGames-Team, sowohl der Community Events die einem Weiterbringende Items, Bl\xF6cke, R\xFCstung oder Ganze Plots verlost werden kann."})]})]}),me("div",{className:"mt-4 flex flex-col items-center justify-between bg-[var(--s2-background)] p-3 md:flex-row",children:[me("div",{className:"m-2 flex w-[90vw] flex-col justify-center md:w-[50vw]",children:[R("h2",{className:"text-xl font-bold",children:R("span",{className:"aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]",children:"Dungeons"})}),R("p",{className:"m-2 p-1 text-[var(--description-color)]",children:"Unsere Dungeon Welt findet auf Einzelnen Inseln statt, die von Custom Monstern und Mobs Infiziert sind. Die Inseln bestehen aus Einzelnen Biomen und funktioniert mit einem selbst erstelltem System statt, wo f\xFCr jedes vernichtete Monster ein Item fallen gelassen wird. Diese Items variieren in Seltenheit und wert, und k\xF6nnen mit der Community f\xFCr andere Items ausgetauscht werden."})]}),R("div",{className:"justify-cente m-2 flex flex-col",children:R("img",{className:"m-2 h-[200px] rounded-bl-[3px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[3px]",src:dS,alt:"Minecraft person"})})]}),me("div",{className:"p-3mt-4 flex flex-col items-center justify-between bg-[var(--s2-background)] md:flex-row",children:[R("div",{className:"justify-cente m-2 flex flex-col",children:R("img",{className:"m-2 h-[200px] rounded-bl-[3px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[3px]",src:fS,alt:"Minecraft person"})}),me("div",{className:"m-2 flex w-[90vw] flex-col justify-center md:w-[50vw]",children:[R("h2",{className:"text-xl font-bold",children:R("span",{className:"aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]",children:"Mine"})}),R("p",{className:"m-2 p-1 text-[var(--description-color)]",children:"Unsere Mine f\xFChrt sich in einer gro\xDFen und selbst erstellte Umgebung ab, die von unserem Builder Team mit viel M\xFChe und Aufwand erstellt wurde. Hier Geht es um das abbauen der Erze, die je nach Variante und Gr\xF6\xDFe eine bestimmte summe von Ingame Geld dem Spieler verteilt. Die Erze f\xFChren sich in einem Ebenem System ab, wo nach bestimmter Zeit und Arbeit ein neuer Bereich mit neuen erzen mit h\xF6herem Wert freigeschaltet wird."})]})]})]}),R("section",{className:"flex min-h-[60vh] w-screen flex-col items-center justify-center p-3",children:me("div",{className:"m-2 flex w-[90vw] flex-col items-center justify-center text-center md:w-[50vw]",children:[R("h2",{className:"text-xl font-bold",children:R("span",{className:"aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]",children:"Probleme?"})}),R("p",{className:"m-2 p-1 text-lg text-[var(--description-color)]",children:"Wenn du irgendwelche Fragen oder Probleme hast kannst du gerne unserem Discordserver beitreten."}),me(Ze,{to:"https://discord.kuchengames.de",target:"_blank",className:"text-l mb-2 mr-2 flex w-[300px] flex-row items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[R(Qv,{className:"mr-3",size:"1.5rem"})," Beitreten"]})]})}),me("section",{className:"flex min-h-[35vh] w-screen flex-col items-center justify-around bg-[var(--s1-background)] p-3 md:flex-row",children:[me("div",{className:"m-2 flex w-[90vw] flex-col justify-center md:w-[30vw]",children:[R("h2",{className:"text-xl font-bold",children:R("span",{className:"aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]",children:"Warum sollte ich voten?"})}),R("p",{className:"m-2 p-1 text-[var(--description-color)]",children:"Wenn du f\xFCr den Server votest, hilft uns das in den Serverlisten weiter oben zu stehen um so mehr neue Spieler anzulocken."})]}),me("div",{className:"items-left flex max-w-sm flex-col justify-center rounded-lg border-zinc-500 bg-zinc-700 p-3 shadow",children:[R("h2",{className:"pb-2 text-xl font-bold",children:"minecraft-server.eu"}),R("hr",{}),me("div",{className:"flex flex-row items-center justify-around pt-2",children:[R("p",{className:"w-[70%]",children:"Voten und Belohnung erhalten.."}),R(Ze,{target:"_blank",to:"https://vote.kuchengames.de",className:"flex flex-col items-center justify-center rounded-lg bg-orange-400 shadow hover:bg-orange-500",children:R("div",{className:"hover:text-grey-900 m-2 flex flex-col items-center justify-center rounded-lg bg-orange-500 text-black shadow hover:bg-orange-600",children:R($w,{className:"m-1",size:"1.5rem"})})})]})]})]}),me("section",{className:"flex min-h-[60vh] w-screen flex-col items-center justify-center p-3",children:[R("div",{className:"m-2 mb-5 flex w-[90vw] flex-col items-center justify-center md:w-[50vw]",children:R("h2",{className:"text-xl font-bold",children:me("span",{className:"aaa relative m-2 p-1 before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]",children:["H\xE4ufig gestellte ",R("span",{className:"font-extrabold text-[var(--main-color)]",children:"Fragen"})]})})}),R(lS,{})]}),R("section",{className:"min-h-[100px] w-screen"})]})}function pS(){return U.exports.useEffect(()=>{document.title="KuchenGames | Home"},[]),me(tr,{children:[R(sS,{}),R(hS,{})]})}function mS(){return R("div",{className:"flex flex-col items-center justify-center pb-10 pt-[70px] text-white",children:me("div",{className:"flex w-[90vw] flex-col items-center justify-center md:w-[70vw]",children:[R("h3",{className:"font-semibold",children:"KUCHENGAMES.DE"}),me("h1",{className:"text-3xl font-extrabold md:text-5xl",children:["UNSER ",R("span",{className:"text-[var(--main-color)]",children:"SERVER-TEAM"})]}),R("p",{className:"text-center text-[var(--description-color)]",children:"Hier findest du eine aktuelle Auflistung all unserer Teammitglieder."})]})})}function gS(t){return wn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(t)}function vS(t){return wn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(t)}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="142",Vr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xS=0,Hp=1,_S=2,Zv=1,yS=2,Mo=3,Pr=0,Nn=1,gi=2,wS=1,qi=0,As=1,Gp=2,Wp=3,jp=4,SS=5,as=100,MS=101,bS=102,$p=103,Xp=104,ES=200,TS=201,CS=202,AS=203,Kv=204,Jv=205,LS=206,PS=207,RS=208,DS=209,NS=210,IS=0,kS=1,FS=2,$d=3,zS=4,OS=5,US=6,BS=7,ex=0,VS=1,HS=2,di=0,GS=1,WS=2,jS=3,$S=4,XS=5,tx=300,Os=301,Us=302,Yl=303,Xd=304,Su=306,qd=1e3,Pn=1001,Yd=1002,rt=1003,qp=1004,Yp=1005,mn=1006,qS=1007,Mu=1008,Rr=1009,YS=1010,QS=1011,nx=1012,ZS=1013,xr=1014,zi=1015,ta=1016,KS=1017,JS=1018,Ls=1020,e2=1021,t2=1022,Xn=1023,n2=1024,i2=1025,Sr=1026,Bs=1027,r2=1028,s2=1029,o2=1030,a2=1031,l2=1033,cc=33776,dc=33777,fc=33778,hc=33779,Qp=35840,Zp=35841,Kp=35842,Jp=35843,u2=36196,em=37492,tm=37496,nm=37808,im=37809,rm=37810,sm=37811,om=37812,am=37813,lm=37814,um=37815,cm=37816,dm=37817,fm=37818,hm=37819,pm=37820,mm=37821,gm=36492,Dr=3e3,nt=3001,c2=3200,d2=3201,ix=0,f2=1,ii="srgb",_r="srgb-linear",pc=7680,h2=519,Qd=35044,vm="300 es",Zd=1035;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=Math.PI/180,xm=180/Math.PI;function Yi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[t&255]+Lt[t>>8&255]+Lt[t>>16&255]+Lt[t>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[n&63|128]+Lt[n>>8&255]+"-"+Lt[n>>16&255]+Lt[n>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function p2(t,e){return(t%e+e)%e}function gc(t,e,n){return(1-n)*t+n*e}function _m(t){return(t&t-1)===0&&t!==0}function Kd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}class ve{constructor(e=0,n=0){ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(){vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],v=i[8],p=r[0],h=r[3],m=r[6],x=r[1],_=r[4],y=r[7],S=r[2],C=r[5],L=r[8];return s[0]=o*p+a*x+l*S,s[3]=o*h+a*_+l*C,s[6]=o*m+a*y+l*L,s[1]=u*p+c*x+d*S,s[4]=u*h+c*_+d*C,s[7]=u*m+c*y+d*L,s[2]=f*p+g*x+v*S,s[5]=f*h+g*_+v*C,s[8]=f*m+g*y+v*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,v=n*d+i*f+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=d*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=f*p,e[4]=(c*n-r*l)*p,e[5]=(r*s-a*n)*p,e[6]=g*p,e[7]=(i*l-u*n)*p,e[8]=(o*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*u,r[6]=n*a+i*c,r[1]=-i*s+n*l,r[4]=-i*o+n*u,r[7]=-i*a+n*c,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function rx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function Ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Mr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const vc={[ii]:{[_r]:Mr},[_r]:{[ii]:xl}},Mn={legacyMode:!0,get workingColorSpace(){return _r},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(vc[e]&&vc[e][n]!==void 0){const i=vc[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},bn={h:0,s:0,l:0},Da={h:0,s:0,l:0};function xc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Na(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=_r){return this.r=e,this.g=n,this.b=i,Mn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=_r){if(e=p2(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xc(o,s,e+1/3),this.g=xc(o,s,e),this.b=xc(o,s,e-1/3)}return Mn.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=ii){const i=sx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=xl(e.r),this.g=xl(e.g),this.b=xl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Mn.fromWorkingColorSpace(Na(this,mt),e),Gt(mt.r*255,0,255)<<16^Gt(mt.g*255,0,255)<<8^Gt(mt.b*255,0,255)<<0}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_r){Mn.fromWorkingColorSpace(Na(this,mt),n);const i=mt.r,r=mt.g,s=mt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=_r){return Mn.fromWorkingColorSpace(Na(this,mt),n),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=ii){return Mn.fromWorkingColorSpace(Na(this,mt),e),e!==ii?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${mt.r*255|0},${mt.g*255|0},${mt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(bn),bn.h+=e,bn.s+=n,bn.l+=i,this.setHSL(bn.h,bn.s,bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bn),e.getHSL(Da);const i=gc(bn.h,Da.h,n),r=gc(bn.s,Da.s,n),s=gc(bn.l,Da.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=sx;let Gr;class ox{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Ql("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Mr(n[i]/255)*255):n[i]=Mr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ax{constructor(e=null){this.isSource=!0,this.uuid=Yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_c(r[o].image)):s.push(_c(r[o]))}else s=_c(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _c(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ox.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m2=0;class Yt extends Fr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=Pn,r=Pn,s=mn,o=Mu,a=Xn,l=Rr,u=1,c=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m2++}),this.uuid=Yi(),this.name="",this.source=new ax(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=tx;class qe{constructor(e=0,n=0,i=0,r=1){qe.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],v=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-p)<.01&&Math.abs(v-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+p)<.1&&Math.abs(v+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(g+1)/2,S=(m+1)/2,C=(c+f)/4,L=(d+p)/4,w=(v+h)/4;return _>y&&_>S?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=L/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=w/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=L/s,r=w/s),this.set(i,r,s,n),this}let x=Math.sqrt((h-v)*(h-v)+(d-p)*(d-p)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(h-v)/x,this.y=(d-p)/x,this.z=(f-c)/x,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vi extends Fr{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new qe(0,0,e,n),this.scissorTest=!1,this.viewport=new qe(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ax(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lx extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rt,this.minFilter=rt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g2 extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rt,this.minFilter=rt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,n,r)}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],v=s[o+2],p=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=v,e[n+3]=p;return}if(d!==p||l!==f||u!==g||c!==v){let h=1-a;const m=l*f+u*g+c*v+d*p,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const S=Math.sqrt(_),C=Math.atan2(S,m*x);h=Math.sin(h*C)/S,a=Math.sin(a*C)/S}const y=a*x;if(l=l*h+f*y,u=u*h+g*y,c=c*h+v*y,d=d*h+p*y,h===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],v=s[o+3];return e[n]=a*v+c*d+l*g-u*f,e[n+1]=l*v+c*f+u*d-a*g,e[n+2]=u*v+c*g+a*f-l*d,e[n+3]=c*v-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*v,this._y=u*g*d-f*c*v,this._z=u*c*v+f*g*d,this._w=u*c*d-f*g*v;break;case"YXZ":this._x=f*c*d+u*g*v,this._y=u*g*d-f*c*v,this._z=u*c*v-f*g*d,this._w=u*c*d+f*g*v;break;case"ZXY":this._x=f*c*d-u*g*v,this._y=u*g*d+f*c*v,this._z=u*c*v+f*g*d,this._w=u*c*d-f*g*v;break;case"ZYX":this._x=f*c*d-u*g*v,this._y=u*g*d+f*c*v,this._z=u*c*v-f*g*d,this._w=u*c*d+f*g*v;break;case"YZX":this._x=f*c*d+u*g*v,this._y=u*g*d+f*c*v,this._z=u*c*v-f*g*d,this._w=u*c*d-f*g*v;break;case"XZY":this._x=f*c*d-u*g*v,this._y=u*g*d-f*c*v,this._z=u*c*v+f*g*d,this._w=u*c*d+f*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ym.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new I,ym=new Nr;class ua{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=sr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)sr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(sr)}else i.boundingBox===null&&i.computeBoundingBox(),wc.copy(i.boundingBox),wc.applyMatrix4(e.matrixWorld),this.union(wc);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Ia.subVectors(this.max,uo),Wr.subVectors(e.a,uo),jr.subVectors(e.b,uo),$r.subVectors(e.c,uo),Si.subVectors(jr,Wr),Mi.subVectors($r,jr),or.subVectors(Wr,$r);let n=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-or.z,or.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,or.z,0,-or.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-or.y,or.x,0];return!Sc(n,Wr,jr,$r,Ia)||(n=[1,0,0,0,1,0,0,0,1],!Sc(n,Wr,jr,$r,Ia))?!1:(ka.crossVectors(Si,Mi),n=[ka.x,ka.y,ka.z],Sc(n,Wr,jr,$r,Ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return sr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new I,new I,new I,new I,new I,new I,new I,new I],sr=new I,wc=new ua,Wr=new I,jr=new I,$r=new I,Si=new I,Mi=new I,or=new I,uo=new I,Ia=new I,ka=new I,ar=new I;function Sc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ar.fromArray(t,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=n.dot(ar),c=i.dot(ar);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const v2=new ua,wm=new I,Fa=new I,Mc=new I;class lh{constructor(e=new I,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):v2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Mc.subVectors(e,this.center);const n=Mc.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(Mc.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Fa.set(0,0,1).multiplyScalar(e.radius):Fa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(wm.copy(e.center).add(Fa)),this.expandByPoint(wm.copy(e.center).sub(Fa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new I,bc=new I,za=new I,bi=new I,Ec=new I,Oa=new I,Tc=new I;class x2{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Kn.copy(this.direction).multiplyScalar(n).add(this.origin),Kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bc.copy(e).add(n).multiplyScalar(.5),za.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(bc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(za),a=bi.dot(this.direction),l=-bi.dot(za),u=bi.lengthSq(),c=Math.abs(1-o*o);let d,f,g,v;if(c>0)if(d=o*l-a,f=o*a-l,v=s*c,d>=0)if(f>=-v)if(f<=v){const p=1/c;d*=p,f*=p,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(za).multiplyScalar(f).add(bc),g}intersectSphere(e,n){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,n,i,r,s){Ec.subVectors(n,e),Oa.subVectors(i,e),Tc.crossVectors(Ec,Oa);let o=this.direction.dot(Tc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(Oa.crossVectors(bi,Oa));if(l<0)return null;const u=a*this.direction.dot(Ec.cross(bi));if(u<0||l+u>o)return null;const c=-a*bi.dot(Tc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,l,u,c,d,f,g,v,p,h){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=v,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,v=a*c,p=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=g+v*u,n[5]=f-p*u,n[9]=-a*l,n[2]=p-f*u,n[6]=v+g*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,v=u*c,p=u*d;n[0]=f+p*a,n[4]=v*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=g*a-v,n[6]=p+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,v=u*c,p=u*d;n[0]=f-p*a,n[4]=-o*d,n[8]=v+g*a,n[1]=g+v*a,n[5]=o*c,n[9]=p-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,v=a*c,p=a*d;n[0]=l*c,n[4]=v*u-g,n[8]=f*u+p,n[1]=l*d,n[5]=p*u+f,n[9]=g*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,v=a*l,p=a*u;n[0]=l*c,n[4]=p-f*d,n[8]=v*d+g,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*d+v,n[10]=f-p*d}else if(e.order==="XZY"){const f=o*l,g=o*u,v=a*l,p=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+p,n[5]=o*c,n[9]=g*d-v,n[2]=v*d-g,n[6]=a*c,n[10]=p*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_2,e,y2)}lookAt(e,n,i){const r=this.elements;return Kt.subVectors(e,n),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Ei.crossVectors(i,Kt),Ei.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Ei.crossVectors(i,Kt)),Ei.normalize(),Ua.crossVectors(Kt,Ei),r[0]=Ei.x,r[4]=Ua.x,r[8]=Kt.x,r[1]=Ei.y,r[5]=Ua.y,r[9]=Kt.y,r[2]=Ei.z,r[6]=Ua.z,r[10]=Kt.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],v=i[2],p=i[6],h=i[10],m=i[14],x=i[3],_=i[7],y=i[11],S=i[15],C=r[0],L=r[4],w=r[8],A=r[12],k=r[1],O=r[5],Z=r[9],J=r[13],F=r[2],j=r[6],V=r[10],X=r[14],D=r[3],N=r[7],z=r[11],Y=r[15];return s[0]=o*C+a*k+l*F+u*D,s[4]=o*L+a*O+l*j+u*N,s[8]=o*w+a*Z+l*V+u*z,s[12]=o*A+a*J+l*X+u*Y,s[1]=c*C+d*k+f*F+g*D,s[5]=c*L+d*O+f*j+g*N,s[9]=c*w+d*Z+f*V+g*z,s[13]=c*A+d*J+f*X+g*Y,s[2]=v*C+p*k+h*F+m*D,s[6]=v*L+p*O+h*j+m*N,s[10]=v*w+p*Z+h*V+m*z,s[14]=v*A+p*J+h*X+m*Y,s[3]=x*C+_*k+y*F+S*D,s[7]=x*L+_*O+y*j+S*N,s[11]=x*w+_*Z+y*V+S*z,s[15]=x*A+_*J+y*X+S*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],v=e[3],p=e[7],h=e[11],m=e[15];return v*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+p*(+n*l*g-n*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+h*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],v=e[12],p=e[13],h=e[14],m=e[15],x=d*h*u-p*f*u+p*l*g-a*h*g-d*l*m+a*f*m,_=v*f*u-c*h*u-v*l*g+o*h*g+c*l*m-o*f*m,y=c*p*u-v*d*u+v*a*g-o*p*g-c*a*m+o*d*m,S=v*d*l-c*p*l-v*a*f+o*p*f+c*a*h-o*d*h,C=n*x+i*_+r*y+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=x*L,e[1]=(p*f*s-d*h*s-p*r*g+i*h*g+d*r*m-i*f*m)*L,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*L,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*L,e[4]=_*L,e[5]=(c*h*s-v*f*s+v*r*g-n*h*g-c*r*m+n*f*m)*L,e[6]=(v*l*s-o*h*s-v*r*u+n*h*u+o*r*m-n*l*m)*L,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*g+n*l*g)*L,e[8]=y*L,e[9]=(v*d*s-c*p*s-v*i*g+n*p*g+c*i*m-n*d*m)*L,e[10]=(o*p*s-v*a*s+v*i*u-n*p*u-o*i*m+n*a*m)*L,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*g-n*a*g)*L,e[12]=S*L,e[13]=(c*p*r-v*d*r+v*i*f-n*p*f-c*i*h+n*d*h)*L,e[14]=(v*a*r-o*p*r-v*i*l+n*p*l+o*i*h-n*a*h)*L,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,v=s*d,p=o*c,h=o*d,m=a*d,x=l*u,_=l*c,y=l*d,S=i.x,C=i.y,L=i.z;return r[0]=(1-(p+m))*S,r[1]=(g+y)*S,r[2]=(v-_)*S,r[3]=0,r[4]=(g-y)*C,r[5]=(1-(f+m))*C,r[6]=(h+x)*C,r[7]=0,r[8]=(v+_)*L,r[9]=(h-x)*L,r[10]=(1-(f+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const u=1/s,c=1/o,d=1/a;return En.elements[0]*=u,En.elements[1]*=u,En.elements[2]*=u,En.elements[4]*=c,En.elements[5]*=c,En.elements[6]*=c,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,n.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new I,En=new lt,_2=new I(0,0,0),y2=new I(1,1,1),Ei=new I,Ua=new I,Kt=new I,Sm=new lt,Mm=new Nr;class ca{constructor(e=0,n=0,i=0,r=ca.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ca.DefaultOrder="XYZ";ca.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w2=0;const bm=new I,qr=new Nr,Jn=new lt,Ba=new I,co=new I,S2=new I,M2=new Nr,Em=new I(1,0,0),Tm=new I(0,1,0),Cm=new I(0,0,1),b2={type:"added"},Am={type:"removed"};class Qt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w2++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DefaultUp.clone();const e=new I,n=new ca,i=new Nr,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new vn}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Qt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Em,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,n){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Em,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ba.copy(e):Ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(co,Ba,this.up):Jn.lookAt(Ba,co,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(Jn),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(b2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Am)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Am)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,S2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,M2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DefaultUp=new I(0,1,0);Qt.DefaultMatrixAutoUpdate=!0;const Tn=new I,ei=new I,Cc=new I,ti=new I,Yr=new I,Qr=new I,Lm=new I,Ac=new I,Lc=new I,Pc=new I;class jn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Tn.subVectors(e,n),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Tn.subVectors(r,n),ei.subVectors(i,n),Cc.subVectors(e,n);const o=Tn.dot(Tn),a=Tn.dot(ei),l=Tn.dot(Cc),u=ei.dot(ei),c=ei.dot(Cc),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,v=(o*c-a*l)*f;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ti),l.set(0,0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l}static isFrontFacing(e,n,i,r){return Tn.subVectors(i,n),ei.subVectors(e,n),Tn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Tn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return jn.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),Qr.subVectors(s,i),Ac.subVectors(e,i);const l=Yr.dot(Ac),u=Qr.dot(Ac);if(l<=0&&u<=0)return n.copy(i);Lc.subVectors(e,r);const c=Yr.dot(Lc),d=Qr.dot(Lc);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Yr,o);Pc.subVectors(e,s);const g=Yr.dot(Pc),v=Qr.dot(Pc);if(v>=0&&g<=v)return n.copy(s);const p=g*u-l*v;if(p<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Qr,a);const h=c*v-g*d;if(h<=0&&d-c>=0&&g-v>=0)return Lm.subVectors(s,r),a=(d-c)/(d-c+(g-v)),n.copy(r).addScaledVector(Lm,a);const m=1/(h+p+f);return o=p*m,a=f*m,n.copy(i).addScaledVector(Yr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let E2=0;class Ys extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E2++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=As,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Kv,this.blendDst=Jv,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$d,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pc,this.stencilZFail=pc,this.stencilZPass=pc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===wS;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cx extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new I,Va=new ve;class In{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=Qd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Fe),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new ve),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new I),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new qe),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Va.fromBufferAttribute(this,n),Va.applyMatrix3(e),this.setXY(n,Va.x,Va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix3(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix4(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyNormalMatrix(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.transformDirection(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class dx extends In{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fx extends In{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kn extends In{constructor(e,n,i){super(new Float32Array(e),n,i)}}let T2=0;const cn=new lt,Rc=new Qt,Zr=new I,Jt=new ua,fo=new ua,_t=new I;class Qn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?fx:dx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,n,i){return cn.makeTranslation(e,n,i),this.applyMatrix4(cn),this}scale(e,n,i){return cn.makeScale(e,n,i),this.applyMatrix4(cn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Jt.min,fo.min),Jt.expandByPoint(_t),_t.addVectors(Jt.max,fo.max),Jt.expandByPoint(_t)):(Jt.expandByPoint(fo.min),Jt.expandByPoint(fo.max))}Jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)_t.fromBufferAttribute(a,u),l&&(Zr.fromBufferAttribute(e,u),_t.add(Zr)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let k=0;k<a;k++)u[k]=new I,c[k]=new I;const d=new I,f=new I,g=new I,v=new ve,p=new ve,h=new ve,m=new I,x=new I;function _(k,O,Z){d.fromArray(r,k*3),f.fromArray(r,O*3),g.fromArray(r,Z*3),v.fromArray(o,k*2),p.fromArray(o,O*2),h.fromArray(o,Z*2),f.sub(d),g.sub(d),p.sub(v),h.sub(v);const J=1/(p.x*h.y-h.x*p.y);!isFinite(J)||(m.copy(f).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(J),x.copy(g).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(J),u[k].add(m),u[O].add(m),u[Z].add(m),c[k].add(x),c[O].add(x),c[Z].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let k=0,O=y.length;k<O;++k){const Z=y[k],J=Z.start,F=Z.count;for(let j=J,V=J+F;j<V;j+=3)_(i[j+0],i[j+1],i[j+2])}const S=new I,C=new I,L=new I,w=new I;function A(k){L.fromArray(s,k*3),w.copy(L);const O=u[k];S.copy(O),S.sub(L.multiplyScalar(L.dot(O))).normalize(),C.crossVectors(w,O);const J=C.dot(c[k])<0?-1:1;l[k*4]=S.x,l[k*4+1]=S.y,l[k*4+2]=S.z,l[k*4+3]=J}for(let k=0,O=y.length;k<O;++k){const Z=y[k],J=Z.start,F=Z.count;for(let j=J,V=J+F;j<V;j+=3)A(i[j+0]),A(i[j+1]),A(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,c=new I,d=new I;if(e)for(let f=0,g=e.count;f<g;f+=3){const v=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,p),o.fromBufferAttribute(n,h),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*n,c=Math.min(l.length,o.length-u);for(let d=0,f=u;d<c;d++,f++)o[f]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_t.fromBufferAttribute(e,n),_t.normalize(),e.setXYZ(n,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,v=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)f[v++]=u[g++]}return new In(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pm=new lt,Kr=new x2,Dc=new lh,Ti=new I,Ci=new I,Ai=new I,Nc=new I,Ic=new I,kc=new I,Ha=new I,Ga=new I,Wa=new I,ja=new ve,$a=new ve,Xa=new ve,Fc=new I,qa=new I;class Ge extends Qt{constructor(e=new Qn,n=new cx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Dc.copy(i.boundingSphere),Dc.applyMatrix4(s),e.ray.intersectsSphere(Dc)===!1)||(Pm.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(Pm),i.boundingBox!==null&&Kr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,g=i.groups,v=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],x=r[m.materialIndex],_=Math.max(m.start,v.start),y=Math.min(a.count,Math.min(m.start+m.count,v.start+v.count));for(let S=_,C=y;S<C;S+=3){const L=a.getX(S),w=a.getX(S+1),A=a.getX(S+2);o=Ya(this,x,e,Kr,l,u,c,d,f,L,w,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,v.start),h=Math.min(a.count,v.start+v.count);for(let m=p,x=h;m<x;m+=3){const _=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);o=Ya(this,r,e,Kr,l,u,c,d,f,_,y,S),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],x=r[m.materialIndex],_=Math.max(m.start,v.start),y=Math.min(l.count,Math.min(m.start+m.count,v.start+v.count));for(let S=_,C=y;S<C;S+=3){const L=S,w=S+1,A=S+2;o=Ya(this,x,e,Kr,l,u,c,d,f,L,w,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,v.start),h=Math.min(l.count,v.start+v.count);for(let m=p,x=h;m<x;m+=3){const _=m,y=m+1,S=m+2;o=Ya(this,r,e,Kr,l,u,c,d,f,_,y,S),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}}}function C2(t,e,n,i,r,s,o,a){let l;if(e.side===Nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==gi,a),l===null)return null;qa.copy(a),qa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(qa);return u<n.near||u>n.far?null:{distance:u,point:qa.clone(),object:t}}function Ya(t,e,n,i,r,s,o,a,l,u,c,d){Ti.fromBufferAttribute(r,u),Ci.fromBufferAttribute(r,c),Ai.fromBufferAttribute(r,d);const f=t.morphTargetInfluences;if(s&&f){Ha.set(0,0,0),Ga.set(0,0,0),Wa.set(0,0,0);for(let v=0,p=s.length;v<p;v++){const h=f[v],m=s[v];h!==0&&(Nc.fromBufferAttribute(m,u),Ic.fromBufferAttribute(m,c),kc.fromBufferAttribute(m,d),o?(Ha.addScaledVector(Nc,h),Ga.addScaledVector(Ic,h),Wa.addScaledVector(kc,h)):(Ha.addScaledVector(Nc.sub(Ti),h),Ga.addScaledVector(Ic.sub(Ci),h),Wa.addScaledVector(kc.sub(Ai),h)))}Ti.add(Ha),Ci.add(Ga),Ai.add(Wa)}t.isSkinnedMesh&&(t.boneTransform(u,Ti),t.boneTransform(c,Ci),t.boneTransform(d,Ai));const g=C2(t,e,n,i,Ti,Ci,Ai,Fc);if(g){a&&(ja.fromBufferAttribute(a,u),$a.fromBufferAttribute(a,c),Xa.fromBufferAttribute(a,d),g.uv=jn.getUV(Fc,Ti,Ci,Ai,ja,$a,Xa,new ve)),l&&(ja.fromBufferAttribute(l,u),$a.fromBufferAttribute(l,c),Xa.fromBufferAttribute(l,d),g.uv2=jn.getUV(Fc,Ti,Ci,Ai,ja,$a,Xa,new ve));const v={a:u,b:c,c:d,normal:new I,materialIndex:0};jn.getNormal(Ti,Ci,Ai,v.normal),g.face=v}return g}class st extends Qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kn(u,3)),this.setAttribute("normal",new kn(c,3)),this.setAttribute("uv",new kn(d,2));function v(p,h,m,x,_,y,S,C,L,w,A){const k=y/L,O=S/w,Z=y/2,J=S/2,F=C/2,j=L+1,V=w+1;let X=0,D=0;const N=new I;for(let z=0;z<V;z++){const Y=z*O-J;for(let q=0;q<j;q++){const ae=q*k-Z;N[p]=ae*x,N[h]=Y*_,N[m]=F,u.push(N.x,N.y,N.z),N[p]=0,N[h]=0,N[m]=C>0?1:-1,c.push(N.x,N.y,N.z),d.push(q/L),d.push(1-z/w),X+=1}}for(let z=0;z<w;z++)for(let Y=0;Y<L;Y++){const q=f+Y+j*z,ae=f+Y+j*(z+1),fe=f+(Y+1)+j*(z+1),ge=f+(Y+1)+j*z;l.push(q,ae,ge),l.push(ae,fe,ge),D+=6}a.addGroup(g,D,A),g+=D,f+=X}}static fromJSON(e){return new st(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Pt(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}const hx={clone:Vs,merge:Pt};var A2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=A2,this.fragmentShader=L2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class px extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends px{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xm*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(mc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Jr=90,es=1;class P2 extends Qt{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new tn(Jr,es,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new tn(Jr,es,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const o=new tn(Jr,es,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new I(0,1,0)),this.add(o);const a=new tn(Jr,es,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new I(0,-1,0)),this.add(a);const l=new tn(Jr,es,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const u=new tn(Jr,es,e,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new I(0,0,-1)),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=di,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class mx extends Yt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R2 extends vi{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new st(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:qi});s.uniforms.tEquirect.value=n;const o=new Ge(r,s),a=n.minFilter;return n.minFilter===Mu&&(n.minFilter=mn),new P2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const zc=new I,D2=new I,N2=new vn;class fr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zc.subVectors(i,n).cross(D2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||N2.getNormalMatrix(e),r=this.coplanarPoint(zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new lh,Qa=new I;class uh{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,o=new fr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],v=i[10],p=i[11],h=i[12],m=i[13],x=i[14],_=i[15];return n[0].setComponents(a-r,d-l,p-f,_-h).normalize(),n[1].setComponents(a+r,d+l,p+f,_+h).normalize(),n[2].setComponents(a+s,d+u,p+g,_+m).normalize(),n[3].setComponents(a-s,d-u,p-g,_-m).normalize(),n[4].setComponents(a-o,d-c,p-v,_-x).normalize(),n[5].setComponents(a+o,d+c,p+v,_+x).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function I2(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,d,f),u.onUploadCallback();let v;if(d instanceof Float32Array)v=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(d instanceof Int16Array)v=5122;else if(d instanceof Uint32Array)v=5125;else if(d instanceof Int32Array)v=5124;else if(d instanceof Int8Array)v=5120;else if(d instanceof Uint8Array)v=5121;else if(d instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;t.bindBuffer(d,u),g.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class ch extends Qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,g=[],v=[],p=[],h=[];for(let m=0;m<c;m++){const x=m*f-o;for(let _=0;_<u;_++){const y=_*d-s;v.push(y,-x,0),p.push(0,0,1),h.push(_/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const _=x+u*m,y=x+u*(m+1),S=x+1+u*(m+1),C=x+1+u*m;g.push(_,y,C),g.push(y,S,C)}this.setIndex(g),this.setAttribute("position",new kn(v,3)),this.setAttribute("normal",new kn(p,3)),this.setAttribute("uv",new kn(h,2))}static fromJSON(e){return new ch(e.width,e.height,e.widthSegments,e.heightSegments)}}var k2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,F2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,O2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,B2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V2="vec3 transformed = vec3( position );",H2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G2=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,W2=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,j2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,X2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,J2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eM=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,nM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,_M=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wM=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,SM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,MM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,AM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,LM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,PM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,NM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,XM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qM=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fb=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,hb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,pb=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,_b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mb=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,bb=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Eb=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Tb=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cb=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ab=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Pb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nb=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ub=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Yb=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Jb=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,t3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,i3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,s3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o3=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,l3=`uniform float rotation;
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
}`,u3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:k2,alphamap_pars_fragment:F2,alphatest_fragment:z2,alphatest_pars_fragment:O2,aomap_fragment:U2,aomap_pars_fragment:B2,begin_vertex:V2,beginnormal_vertex:H2,bsdfs:G2,iridescence_fragment:W2,bumpmap_pars_fragment:j2,clipping_planes_fragment:$2,clipping_planes_pars_fragment:X2,clipping_planes_pars_vertex:q2,clipping_planes_vertex:Y2,color_fragment:Q2,color_pars_fragment:Z2,color_pars_vertex:K2,color_vertex:J2,common:eM,cube_uv_reflection_fragment:tM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:oM,encodings_fragment:aM,encodings_pars_fragment:lM,envmap_fragment:uM,envmap_common_pars_fragment:cM,envmap_pars_fragment:dM,envmap_pars_vertex:fM,envmap_physical_pars_fragment:MM,envmap_vertex:hM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:vM,gradientmap_pars_fragment:xM,lightmap_fragment:_M,lightmap_pars_fragment:yM,lights_lambert_vertex:wM,lights_pars_begin:SM,lights_toon_fragment:bM,lights_toon_pars_fragment:EM,lights_phong_fragment:TM,lights_phong_pars_fragment:CM,lights_physical_fragment:AM,lights_physical_pars_fragment:LM,lights_fragment_begin:PM,lights_fragment_maps:RM,lights_fragment_end:DM,logdepthbuf_fragment:NM,logdepthbuf_pars_fragment:IM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:FM,map_fragment:zM,map_pars_fragment:OM,map_particle_fragment:UM,map_particle_pars_fragment:BM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:HM,morphcolor_vertex:GM,morphnormal_vertex:WM,morphtarget_pars_vertex:jM,morphtarget_vertex:$M,normal_fragment_begin:XM,normal_fragment_maps:qM,normal_pars_fragment:YM,normal_pars_vertex:QM,normal_vertex:ZM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,output_fragment:ib,packing:rb,premultiplied_alpha_fragment:sb,project_vertex:ob,dithering_fragment:ab,dithering_pars_fragment:lb,roughnessmap_fragment:ub,roughnessmap_pars_fragment:cb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:fb,shadowmap_vertex:hb,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:vb,skinnormal_vertex:xb,specularmap_fragment:_b,specularmap_pars_fragment:yb,tonemapping_fragment:wb,tonemapping_pars_fragment:Sb,transmission_fragment:Mb,transmission_pars_fragment:bb,uv_pars_fragment:Eb,uv_pars_vertex:Tb,uv_vertex:Cb,uv2_pars_fragment:Ab,uv2_pars_vertex:Lb,uv2_vertex:Pb,worldpos_vertex:Rb,background_vert:Db,background_frag:Nb,cube_vert:Ib,cube_frag:kb,depth_vert:Fb,depth_frag:zb,distanceRGBA_vert:Ob,distanceRGBA_frag:Ub,equirect_vert:Bb,equirect_frag:Vb,linedashed_vert:Hb,linedashed_frag:Gb,meshbasic_vert:Wb,meshbasic_frag:jb,meshlambert_vert:$b,meshlambert_frag:Xb,meshmatcap_vert:qb,meshmatcap_frag:Yb,meshnormal_vert:Qb,meshnormal_frag:Zb,meshphong_vert:Kb,meshphong_frag:Jb,meshphysical_vert:e3,meshphysical_frag:t3,meshtoon_vert:n3,meshtoon_frag:i3,points_vert:r3,points_frag:s3,shadow_vert:o3,shadow_frag:a3,sprite_vert:l3,sprite_frag:u3},ue={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vn},uv2Transform:{value:new vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}}},Gn={basic:{uniforms:Pt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Pt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Pt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Pt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Pt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Pt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Pt([ue.points,ue.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Pt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Pt([ue.common,ue.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Pt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Pt([ue.sprite,ue.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new vn},t2D:{value:null}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},cube:{uniforms:Pt([ue.envmap,{opacity:{value:1}}]),vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Pt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Pt([ue.lights,ue.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Gn.physical={uniforms:Pt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};function c3(t,e,n,i,r,s){const o=new Fe(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function g(p,h){let m=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=e.get(x));const _=t.xr,y=_.getSession&&_.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?v(o,a):x&&x.isColor&&(v(x,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Su)?(u===void 0&&(u=new Ge(new st(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Vs(Gn.cube.uniforms),vertexShader:Gn.cube.vertexShader,fragmentShader:Gn.cube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(c!==x||d!==x.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=x,d=x.version,f=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ge(new ch(2,2),new xi({name:"BackgroundMaterial",uniforms:Vs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=x,d=x.version,f=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,h){n.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,v(o,a)},render:g}}function d3(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function d(F,j,V,X,D){let N=!1;if(o){const z=p(X,V,j);u!==z&&(u=z,g(u.object)),N=m(F,X,V,D),N&&x(F,X,V,D)}else{const z=j.wireframe===!0;(u.geometry!==X.id||u.program!==V.id||u.wireframe!==z)&&(u.geometry=X.id,u.program=V.id,u.wireframe=z,N=!0)}D!==null&&n.update(D,34963),(N||c)&&(c=!1,w(F,j,V,X),D!==null&&t.bindBuffer(34963,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(F){return i.isWebGL2?t.bindVertexArray(F):s.bindVertexArrayOES(F)}function v(F){return i.isWebGL2?t.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function p(F,j,V){const X=V.wireframe===!0;let D=a[F.id];D===void 0&&(D={},a[F.id]=D);let N=D[j.id];N===void 0&&(N={},D[j.id]=N);let z=N[X];return z===void 0&&(z=h(f()),N[X]=z),z}function h(F){const j=[],V=[],X=[];for(let D=0;D<r;D++)j[D]=0,V[D]=0,X[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:V,attributeDivisors:X,object:F,attributes:{},index:null}}function m(F,j,V,X){const D=u.attributes,N=j.attributes;let z=0;const Y=V.getAttributes();for(const q in Y)if(Y[q].location>=0){const fe=D[q];let ge=N[q];if(ge===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ge=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ge=F.instanceColor)),fe===void 0||fe.attribute!==ge||ge&&fe.data!==ge.data)return!0;z++}return u.attributesNum!==z||u.index!==X}function x(F,j,V,X){const D={},N=j.attributes;let z=0;const Y=V.getAttributes();for(const q in Y)if(Y[q].location>=0){let fe=N[q];fe===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor));const ge={};ge.attribute=fe,fe&&fe.data&&(ge.data=fe.data),D[q]=ge,z++}u.attributes=D,u.attributesNum=z,u.index=X}function _(){const F=u.newAttributes;for(let j=0,V=F.length;j<V;j++)F[j]=0}function y(F){S(F,0)}function S(F,j){const V=u.newAttributes,X=u.enabledAttributes,D=u.attributeDivisors;V[F]=1,X[F]===0&&(t.enableVertexAttribArray(F),X[F]=1),D[F]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,j),D[F]=j)}function C(){const F=u.newAttributes,j=u.enabledAttributes;for(let V=0,X=j.length;V<X;V++)j[V]!==F[V]&&(t.disableVertexAttribArray(V),j[V]=0)}function L(F,j,V,X,D,N){i.isWebGL2===!0&&(V===5124||V===5125)?t.vertexAttribIPointer(F,j,V,D,N):t.vertexAttribPointer(F,j,V,X,D,N)}function w(F,j,V,X){if(i.isWebGL2===!1&&(F.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const D=X.attributes,N=V.getAttributes(),z=j.defaultAttributeValues;for(const Y in N){const q=N[Y];if(q.location>=0){let ae=D[Y];if(ae===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),ae!==void 0){const fe=ae.normalized,ge=ae.itemSize,W=n.get(ae);if(W===void 0)continue;const je=W.buffer,Ce=W.type,be=W.bytesPerElement;if(ae.isInterleavedBufferAttribute){const he=ae.data,ke=he.stride,Le=ae.offset;if(he.isInstancedInterleavedBuffer){for(let ye=0;ye<q.locationSize;ye++)S(q.location+ye,he.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ye=0;ye<q.locationSize;ye++)y(q.location+ye);t.bindBuffer(34962,je);for(let ye=0;ye<q.locationSize;ye++)L(q.location+ye,ge/q.locationSize,Ce,fe,ke*be,(Le+ge/q.locationSize*ye)*be)}else{if(ae.isInstancedBufferAttribute){for(let he=0;he<q.locationSize;he++)S(q.location+he,ae.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<q.locationSize;he++)y(q.location+he);t.bindBuffer(34962,je);for(let he=0;he<q.locationSize;he++)L(q.location+he,ge/q.locationSize,Ce,fe,ge*be,ge/q.locationSize*he*be)}}else if(z!==void 0){const fe=z[Y];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(q.location,fe);break;case 3:t.vertexAttrib3fv(q.location,fe);break;case 4:t.vertexAttrib4fv(q.location,fe);break;default:t.vertexAttrib1fv(q.location,fe)}}}}C()}function A(){Z();for(const F in a){const j=a[F];for(const V in j){const X=j[V];for(const D in X)v(X[D].object),delete X[D];delete j[V]}delete a[F]}}function k(F){if(a[F.id]===void 0)return;const j=a[F.id];for(const V in j){const X=j[V];for(const D in X)v(X[D].object),delete X[D];delete j[V]}delete a[F.id]}function O(F){for(const j in a){const V=a[j];if(V[F.id]===void 0)continue;const X=V[F.id];for(const D in X)v(X[D].object),delete X[D];delete V[F.id]}}function Z(){J(),c=!0,u!==l&&(u=l,g(u.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:J,dispose:A,releaseStatesOfGeometry:k,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:y,disableUnusedAttributes:C}}function f3(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=t,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function h3(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),g=t.getParameter(3379),v=t.getParameter(34076),p=t.getParameter(34921),h=t.getParameter(36347),m=t.getParameter(36348),x=t.getParameter(36349),_=f>0,y=o||e.has("OES_texture_float"),S=_&&y,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:C}}function p3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new fr,a=new vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const v=d.length!==0||f||i!==0||r;return r=f,n=c(d,g,0),i=d.length,v},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,g){const v=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,m=t.get(d);if(!r||v===null||v.length===0||s&&!h)s?c(null):u();else{const x=s?0:i,_=x*4;let y=m.clippingState||null;l.value=y,y=c(v,f,_,g);for(let S=0;S!==_;++S)y[S]=n[S];m.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,v){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,v!==!0||h===null){const m=g+p*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(h===null||h.length<m)&&(h=new Float32Array(m));for(let _=0,y=g;_!==p;++_,y+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(h,y),h[y+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function m3(t){let e=new WeakMap;function n(o,a){return a===Yl?o.mapping=Os:a===Xd&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Yl||a===Xd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new R2(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dh extends px{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ys=4,Rm=[.125,.215,.35,.446,.526,.582],pr=20,Oc=new dh,Dm=new Fe;let Uc=null;const hr=(1+Math.sqrt(5))/2,ns=1/hr,Nm=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,hr,ns),new I(0,hr,-ns),new I(ns,0,hr),new I(-ns,0,hr),new I(hr,ns,0),new I(-hr,ns,0)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ta,format:Xn,encoding:Dr,depthBuffer:!1},r=km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g3(s)),this._blurMaterial=v3(s,e,n)}return r}_compileMaterial(e){const n=new Ge(this._lodPlanes[0],e);this._renderer.compile(n,Oc)}_sceneToCubeUV(e,n,i,r){const a=new tn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Dm),c.toneMapping=di,c.autoClear=!1;const g=new cx({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),v=new Ge(new st,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(Dm),p=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;Za(r,x*_,m>2?_:0,_,_),c.setRenderTarget(r),p&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Os||e.mapping===Us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Za(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Oc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nm[(r-1)%Nm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ge(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*pr-1),p=s/v,h=isFinite(s)?1+Math.floor(c*p):pr;h>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${pr}`);const m=[];let x=0;for(let L=0;L<pr;++L){const w=L/p,A=Math.exp(-w*w/2);m.push(A),L===0?x+=A:L<h&&(x+=2*A)}for(let L=0;L<m.length;L++)m[L]=m[L]/x;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const y=this._sizeLods[r],S=3*y*(r>_-ys?r-_+ys:0),C=4*(this._cubeSize-y);Za(n,S,C,3*y,2*y),l.setRenderTarget(n),l.render(d,Oc)}}function g3(t){const e=[],n=[],i=[];let r=t;const s=t-ys+1+Rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ys?l=Rm[o-t+ys-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,v=6,p=3,h=2,m=1,x=new Float32Array(p*v*g),_=new Float32Array(h*v*g),y=new Float32Array(m*v*g);for(let C=0;C<g;C++){const L=C%3*2/3-1,w=C>2?0:-1,A=[L,w,0,L+2/3,w,0,L+2/3,w+1,0,L,w,0,L+2/3,w+1,0,L,w+1,0];x.set(A,p*v*C),_.set(f,h*v*C);const k=[C,C,C,C,C,C];y.set(k,m*v*C)}const S=new Qn;S.setAttribute("position",new In(x,p)),S.setAttribute("uv",new In(_,h)),S.setAttribute("faceIndex",new In(y,m)),e.push(S),r>ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function km(t,e,n){const i=new vi(t,e,n);return i.texture.mapping=Su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Za(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function v3(t,e,n){const i=new Float32Array(pr),r=new I(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Fm(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function zm(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function x3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Yl||l===Xd,c=l===Os||l===Us;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Im(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Im(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function _3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y3(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],34962);const g=d.morphAttributes;for(const v in g){const p=g[v];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(d){const f=[],g=d.index,v=d.attributes.position;let p=0;if(g!==null){const x=g.array;p=g.version;for(let _=0,y=x.length;_<y;_+=3){const S=x[_+0],C=x[_+1],L=x[_+2];f.push(S,C,C,L,L,S)}}else{const x=v.array;p=v.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const S=_+0,C=_+1,L=_+2;f.push(S,C,C,L,L,S)}}const h=new(rx(f)?fx:dx)(f,1);h.version=p;const m=s.get(d);m&&e.remove(m),s.set(d,h)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function w3(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){t.drawElements(s,g,a,f*l),n.update(g,s,1)}function d(f,g,v){if(v===0)return;let p,h;if(r)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,f*l,v),n.update(g,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function S3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function M3(t,e){return t[0]-e[0]}function b3(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Bc(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function E3(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new qe,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=v!==void 0?v.length:0;let h=s.get(c);if(h===void 0||h.count!==p){let j=function(){J.dispose(),s.delete(c),c.removeEventListener("dispose",j)};h!==void 0&&h.texture.dispose();const _=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,C=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let A=0;_===!0&&(A=1),y===!0&&(A=2),S===!0&&(A=3);let k=c.attributes.position.count*A,O=1;k>e.maxTextureSize&&(O=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const Z=new Float32Array(k*O*4*p),J=new lx(Z,k,O,p);J.type=zi,J.needsUpdate=!0;const F=A*4;for(let V=0;V<p;V++){const X=C[V],D=L[V],N=w[V],z=k*O*4*V;for(let Y=0;Y<X.count;Y++){const q=Y*F;_===!0&&(o.fromBufferAttribute(X,Y),X.normalized===!0&&Bc(o,X),Z[z+q+0]=o.x,Z[z+q+1]=o.y,Z[z+q+2]=o.z,Z[z+q+3]=0),y===!0&&(o.fromBufferAttribute(D,Y),D.normalized===!0&&Bc(o,D),Z[z+q+4]=o.x,Z[z+q+5]=o.y,Z[z+q+6]=o.z,Z[z+q+7]=0),S===!0&&(o.fromBufferAttribute(N,Y),N.normalized===!0&&Bc(o,N),Z[z+q+8]=o.x,Z[z+q+9]=o.y,Z[z+q+10]=o.z,Z[z+q+11]=N.itemSize===4?o.w:1)}}h={count:p,texture:J,size:new ve(k,O)},s.set(c,h),c.addEventListener("dispose",j)}let m=0;for(let _=0;_<g.length;_++)m+=g[_];const x=c.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",g),f.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}else{const v=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==v){p=[];for(let y=0;y<v;y++)p[y]=[y,0];i[c.id]=p}for(let y=0;y<v;y++){const S=p[y];S[0]=y,S[1]=g[y]}p.sort(b3);for(let y=0;y<8;y++)y<v&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(M3);const h=c.morphAttributes.position,m=c.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const S=a[y],C=S[0],L=S[1];C!==Number.MAX_SAFE_INTEGER&&L?(h&&c.getAttribute("morphTarget"+y)!==h[C]&&c.setAttribute("morphTarget"+y,h[C]),m&&c.getAttribute("morphNormal"+y)!==m[C]&&c.setAttribute("morphNormal"+y,m[C]),r[y]=L,x+=L):(h&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),m&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const _=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function T3(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const vx=new Yt,xx=new lx,_x=new g2,yx=new mx,Om=[],Um=[],Bm=new Float32Array(16),Vm=new Float32Array(9),Hm=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Om[r];if(s===void 0&&(s=new Float32Array(r),Om[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bu(t,e){let n=Um[e];n===void 0&&(n=new Int32Array(e),Um[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function C3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function L3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function P3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function R3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Ot(n,i))return;Hm.set(i),t.uniformMatrix2fv(this.addr,!1,Hm),Ut(n,i)}}function D3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Ot(n,i))return;Vm.set(i),t.uniformMatrix3fv(this.addr,!1,Vm),Ut(n,i)}}function N3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Ot(n,i))return;Bm.set(i),t.uniformMatrix4fv(this.addr,!1,Bm),Ut(n,i)}}function I3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function k3(t,e){const n=this.cache;Ot(n,e)||(t.uniform2iv(this.addr,e),Ut(n,e))}function F3(t,e){const n=this.cache;Ot(n,e)||(t.uniform3iv(this.addr,e),Ut(n,e))}function z3(t,e){const n=this.cache;Ot(n,e)||(t.uniform4iv(this.addr,e),Ut(n,e))}function O3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function U3(t,e){const n=this.cache;Ot(n,e)||(t.uniform2uiv(this.addr,e),Ut(n,e))}function B3(t,e){const n=this.cache;Ot(n,e)||(t.uniform3uiv(this.addr,e),Ut(n,e))}function V3(t,e){const n=this.cache;Ot(n,e)||(t.uniform4uiv(this.addr,e),Ut(n,e))}function H3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||vx,r)}function G3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||_x,r)}function W3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||yx,r)}function j3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xx,r)}function $3(t){switch(t){case 5126:return C3;case 35664:return A3;case 35665:return L3;case 35666:return P3;case 35674:return R3;case 35675:return D3;case 35676:return N3;case 5124:case 35670:return I3;case 35667:case 35671:return k3;case 35668:case 35672:return F3;case 35669:case 35673:return z3;case 5125:return O3;case 36294:return U3;case 36295:return B3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return H3;case 35679:case 36299:case 36307:return G3;case 35680:case 36300:case 36308:case 36293:return W3;case 36289:case 36303:case 36311:case 36292:return j3}}function X3(t,e){t.uniform1fv(this.addr,e)}function q3(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function Y3(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function Q3(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function Z3(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function K3(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function J3(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eE(t,e){t.uniform1iv(this.addr,e)}function tE(t,e){t.uniform2iv(this.addr,e)}function nE(t,e){t.uniform3iv(this.addr,e)}function iE(t,e){t.uniform4iv(this.addr,e)}function rE(t,e){t.uniform1uiv(this.addr,e)}function sE(t,e){t.uniform2uiv(this.addr,e)}function oE(t,e){t.uniform3uiv(this.addr,e)}function aE(t,e){t.uniform4uiv(this.addr,e)}function lE(t,e,n){const i=e.length,r=bu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||vx,r[s])}function uE(t,e,n){const i=e.length,r=bu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||_x,r[s])}function cE(t,e,n){const i=e.length,r=bu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||yx,r[s])}function dE(t,e,n){const i=e.length,r=bu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||xx,r[s])}function fE(t){switch(t){case 5126:return X3;case 35664:return q3;case 35665:return Y3;case 35666:return Q3;case 35674:return Z3;case 35675:return K3;case 35676:return J3;case 5124:case 35670:return eE;case 35667:case 35671:return tE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return rE;case 36294:return sE;case 36295:return oE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return dE}}class hE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=$3(n.type)}}class pE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=fE(n.type)}}class mE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function Gm(t,e){t.seq.push(e),t.map[e.id]=e}function gE(t,e,n){const i=t.name,r=i.length;for(Vc.lastIndex=0;;){const s=Vc.exec(i),o=Vc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Gm(n,u===void 0?new hE(a,t,e):new pE(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new mE(a),Gm(n,d)),n=d}}}class _l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);gE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let vE=0;function xE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function _E(t){switch(t){case Dr:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function jm(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xE(t.getShaderSource(e),o)}else return r}function yE(t,e){const n=_E(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function wE(t,e){let n;switch(e){case GS:n="Linear";break;case WS:n="Reinhard";break;case jS:n="OptimizedCineon";break;case $S:n="ACESFilmic";break;case XS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function SE(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bo).join(`
`)}function ME(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bE(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function bo(t){return t!==""}function $m(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(t){return t.replace(EE,TE)}function TE(t,e){const n=Pe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Jd(n)}const CE=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,AE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(t){return t.replace(AE,wx).replace(CE,LE)}function LE(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),wx(t,e,n,i)}function wx(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ym(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mo&&(e="SHADOWMAP_TYPE_VSM"),e}function RE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Os:case Us:e="ENVMAP_TYPE_CUBE";break;case Su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function NE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ex:e="ENVMAP_BLENDING_MULTIPLY";break;case VS:e="ENVMAP_BLENDING_MIX";break;case HS:e="ENVMAP_BLENDING_ADD";break}return e}function IE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=PE(n),u=RE(n),c=DE(n),d=NE(n),f=IE(n),g=n.isWebGL2?"":SE(n),v=ME(s),p=r.createProgram();let h,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[v].filter(bo).join(`
`),h.length>0&&(h+=`
`),m=[g,v].filter(bo).join(`
`),m.length>0&&(m+=`
`)):(h=[Ym(n),"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),m=[g,Ym(n),"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==di?"#define TONE_MAPPING":"",n.toneMapping!==di?Pe.tonemapping_pars_fragment:"",n.toneMapping!==di?wE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,yE("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bo).join(`
`)),o=Jd(o),o=$m(o,n),o=Xm(o,n),a=Jd(a),a=$m(a,n),a=Xm(a,n),o=qm(o),a=qm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",n.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=x+h+o,y=x+m+a,S=Wm(r,35633,_),C=Wm(r,35632,y);if(r.attachShader(p,S),r.attachShader(p,C),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),k=r.getShaderInfoLog(S).trim(),O=r.getShaderInfoLog(C).trim();let Z=!0,J=!0;if(r.getProgramParameter(p,35714)===!1){Z=!1;const F=jm(r,S,"vertex"),j=jm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+F+`
`+j)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(k===""||O==="")&&(J=!1);J&&(this.diagnostics={runnable:Z,programLog:A,vertexShader:{log:k,prefix:h},fragmentShader:{log:O,prefix:m}})}r.deleteShader(S),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new _l(r,p)),L};let w;return this.getAttributes=function(){return w===void 0&&(w=bE(r,p)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=vE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let FE=0;class zE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new OE(e);n.set(e,i)}return n.get(e)}}class OE{constructor(e){this.id=FE++,this.code=e,this.usedTimes=0}}function UE(t,e,n,i,r,s,o){const a=new ux,l=new zE,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,A,k,O,Z){const J=O.fog,F=Z.geometry,j=w.isMeshStandardMaterial?O.environment:null,V=(w.isMeshStandardMaterial?n:e).get(w.envMap||j),X=!!V&&V.mapping===Su?V.image.height:null,D=v[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const N=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,z=N!==void 0?N.length:0;let Y=0;F.morphAttributes.position!==void 0&&(Y=1),F.morphAttributes.normal!==void 0&&(Y=2),F.morphAttributes.color!==void 0&&(Y=3);let q,ae,fe,ge;if(D){const ke=Gn[D];q=ke.vertexShader,ae=ke.fragmentShader}else q=w.vertexShader,ae=w.fragmentShader,l.update(w),fe=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);const W=t.getRenderTarget(),je=w.alphaTest>0,Ce=w.clearcoat>0,be=w.iridescence>0;return{isWebGL2:c,shaderID:D,shaderName:w.type,vertexShader:q,fragmentShader:ae,defines:w.defines,customVertexShaderID:fe,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?t.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Dr,map:!!w.map,matcap:!!w.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:X,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===f2,tangentSpaceNormalMap:w.normalMapType===ix,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===nt,clearcoat:Ce,clearcoatMap:Ce&&!!w.clearcoatMap,clearcoatRoughnessMap:Ce&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:Ce&&!!w.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!w.iridescenceMap,iridescenceThicknessMap:be&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===As,alphaMap:!!w.alphaMap,alphaTest:je,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!F.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!J,useFog:w.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Y,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:w.toneMapped?t.toneMapping:di,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gi,flipSided:w.side===Nn,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function h(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)A.push(k),A.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(m(A,w),x(A,w),A.push(t.outputEncoding)),A.push(w.customProgramCacheKey),A.join()}function m(w,A){w.push(A.precision),w.push(A.outputEncoding),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.combine),w.push(A.vertexUvs),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function x(w,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),A.fog&&a.enable(33),w.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),w.push(a.mask)}function _(w){const A=v[w.type];let k;if(A){const O=Gn[A];k=hx.clone(O.uniforms)}else k=w.uniforms;return k}function y(w,A){let k;for(let O=0,Z=u.length;O<Z;O++){const J=u[O];if(J.cacheKey===A){k=J,++k.usedTimes;break}}return k===void 0&&(k=new kE(t,A,w,s),u.push(k)),k}function S(w){if(--w.usedTimes===0){const A=u.indexOf(w);u[A]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:y,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:L}}function BE(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function VE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Zm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,v,p,h){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:v,renderOrder:d.renderOrder,z:p,group:h},t[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=p,m.group=h),e++,m}function a(d,f,g,v,p,h){const m=o(d,f,g,v,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(d,f,g,v,p,h){const m=o(d,f,g,v,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,f){n.length>1&&n.sort(d||VE),i.length>1&&i.sort(f||Qm),r.length>1&&r.sort(f||Qm)}function c(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function HE(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new Zm,t.set(i,[s])):r>=t.get(i).length?(s=new Zm,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function GE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Fe};break;case"SpotLight":n={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function WE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jE=0;function $E(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function XE(t,e){const n=new GE,i=WE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new I);const s=new I,o=new lt,a=new lt;function l(c,d){let f=0,g=0,v=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,h=0,m=0,x=0,_=0,y=0,S=0,C=0;c.sort($E);const L=d!==!0?Math.PI:1;for(let A=0,k=c.length;A<k;A++){const O=c[A],Z=O.color,J=O.intensity,F=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=Z.r*J*L,g+=Z.g*J*L,v+=Z.b*J*L;else if(O.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(O.sh.coefficients[V],J);else if(O.isDirectionalLight){const V=n.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*L),O.castShadow){const X=O.shadow,D=i.get(O);D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,r.directionalShadow[p]=D,r.directionalShadowMap[p]=j,r.directionalShadowMatrix[p]=O.shadow.matrix,y++}r.directional[p]=V,p++}else if(O.isSpotLight){const V=n.get(O);if(V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(Z).multiplyScalar(J*L),V.distance=F,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,O.castShadow){const X=O.shadow,D=i.get(O);D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,r.spotShadow[m]=D,r.spotShadowMap[m]=j,r.spotShadowMatrix[m]=O.shadow.matrix,C++}r.spot[m]=V,m++}else if(O.isRectAreaLight){const V=n.get(O);V.color.copy(Z).multiplyScalar(J),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),r.rectArea[x]=V,x++}else if(O.isPointLight){const V=n.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*L),V.distance=O.distance,V.decay=O.decay,O.castShadow){const X=O.shadow,D=i.get(O);D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,D.shadowCameraNear=X.camera.near,D.shadowCameraFar=X.camera.far,r.pointShadow[h]=D,r.pointShadowMap[h]=j,r.pointShadowMatrix[h]=O.shadow.matrix,S++}r.point[h]=V,h++}else if(O.isHemisphereLight){const V=n.get(O);V.skyColor.copy(O.color).multiplyScalar(J*L),V.groundColor.copy(O.groundColor).multiplyScalar(J*L),r.hemi[_]=V,_++}}x>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=v;const w=r.hash;(w.directionalLength!==p||w.pointLength!==h||w.spotLength!==m||w.rectAreaLength!==x||w.hemiLength!==_||w.numDirectionalShadows!==y||w.numPointShadows!==S||w.numSpotShadows!==C)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=x,r.point.length=h,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=C,w.directionalLength=p,w.pointLength=h,w.spotLength=m,w.rectAreaLength=x,w.hemiLength=_,w.numDirectionalShadows=y,w.numPointShadows=S,w.numSpotShadows=C,r.version=jE++)}function u(c,d){let f=0,g=0,v=0,p=0,h=0;const m=d.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){const y=c[x];if(y.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),v++}else if(y.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const S=r.point[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),g++}else if(y.isHemisphereLight){const S=r.hemi[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Km(t,e){const n=new XE(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function qE(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Km(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new Km(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class YE extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QE extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KE=`uniform sampler2D shadow_pass;
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
}`;function JE(t,e,n){let i=new uh;const r=new ve,s=new ve,o=new qe,a=new YE({depthPacking:d2}),l=new QE,u={},c=n.maxTextureSize,d={0:Nn,1:Pr,2:gi},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:ZE,fragmentShader:KE}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const v=new Qn;v.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ge(v,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv,this.render=function(y,S,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||y.length===0)return;const L=t.getRenderTarget(),w=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),k=t.state;k.setBlending(qi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let O=0,Z=y.length;O<Z;O++){const J=y[O],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();if(r.multiply(j),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,F.mapSize.y=s.y)),F.map===null){const X=this.type!==Mo?{minFilter:rt,magFilter:rt}:{};F.map=new vi(r.x,r.y,X),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const V=F.getViewportCount();for(let X=0;X<V;X++){const D=F.getViewport(X);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),k.viewport(o),F.updateMatrices(J,X),i=F.getFrustum(),_(S,C,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===Mo&&m(F,C),F.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(L,w,A)};function m(y,S){const C=e.update(p);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new vi(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(S,null,C,f,p,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(S,null,C,g,p,null)}function x(y,S,C,L,w,A){let k=null;const O=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(O!==void 0?k=O:k=C.isPointLight===!0?l:a,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const Z=k.uuid,J=S.uuid;let F=u[Z];F===void 0&&(F={},u[Z]=F);let j=F[J];j===void 0&&(j=k.clone(),F[J]=j),k=j}return k.visible=S.visible,k.wireframe=S.wireframe,A===Mo?k.side=S.shadowSide!==null?S.shadowSide:S.side:k.side=S.shadowSide!==null?S.shadowSide:d[S.side],k.alphaMap=S.alphaMap,k.alphaTest=S.alphaTest,k.clipShadows=S.clipShadows,k.clippingPlanes=S.clippingPlanes,k.clipIntersection=S.clipIntersection,k.displacementMap=S.displacementMap,k.displacementScale=S.displacementScale,k.displacementBias=S.displacementBias,k.wireframeLinewidth=S.wireframeLinewidth,k.linewidth=S.linewidth,C.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(C.matrixWorld),k.nearDistance=L,k.farDistance=w),k}function _(y,S,C,L,w){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&w===Mo)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const O=e.update(y),Z=y.material;if(Array.isArray(Z)){const J=O.groups;for(let F=0,j=J.length;F<j;F++){const V=J[F],X=Z[V.materialIndex];if(X&&X.visible){const D=x(y,X,L,C.near,C.far,w);t.renderBufferDirect(C,null,O,D,y,V)}}}else if(Z.visible){const J=x(y,Z,L,C.near,C.far,w);t.renderBufferDirect(C,null,O,J,y,null)}}const k=y.children;for(let O=0,Z=k.length;O<Z;O++)_(k[O],S,C,L,w)}}function eT(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const re=new qe;let ne=null;const _e=new qe(0,0,0,0);return{setMask:function(ce){ne!==ce&&!P&&(t.colorMask(ce,ce,ce,ce),ne=ce)},setLocked:function(ce){P=ce},setClear:function(ce,xe,se,Me,Ue){Ue===!0&&(ce*=Me,xe*=Me,se*=Me),re.set(ce,xe,se,Me),_e.equals(re)===!1&&(t.clearColor(ce,xe,se,Me),_e.copy(re))},reset:function(){P=!1,ne=null,_e.set(-1,0,0,0)}}}function s(){let P=!1,re=null,ne=null,_e=null;return{setTest:function(ce){ce?ge(2929):W(2929)},setMask:function(ce){re!==ce&&!P&&(t.depthMask(ce),re=ce)},setFunc:function(ce){if(ne!==ce){if(ce)switch(ce){case IS:t.depthFunc(512);break;case kS:t.depthFunc(519);break;case FS:t.depthFunc(513);break;case $d:t.depthFunc(515);break;case zS:t.depthFunc(514);break;case OS:t.depthFunc(518);break;case US:t.depthFunc(516);break;case BS:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);ne=ce}},setLocked:function(ce){P=ce},setClear:function(ce){_e!==ce&&(t.clearDepth(ce),_e=ce)},reset:function(){P=!1,re=null,ne=null,_e=null}}}function o(){let P=!1,re=null,ne=null,_e=null,ce=null,xe=null,se=null,Me=null,Ue=null;return{setTest:function(Be){P||(Be?ge(2960):W(2960))},setMask:function(Be){re!==Be&&!P&&(t.stencilMask(Be),re=Be)},setFunc:function(Be,Nt,zn){(ne!==Be||_e!==Nt||ce!==zn)&&(t.stencilFunc(Be,Nt,zn),ne=Be,_e=Nt,ce=zn)},setOp:function(Be,Nt,zn){(xe!==Be||se!==Nt||Me!==zn)&&(t.stencilOp(Be,Nt,zn),xe=Be,se=Nt,Me=zn)},setLocked:function(Be){P=Be},setClear:function(Be){Ue!==Be&&(t.clearStencil(Be),Ue=Be)},reset:function(){P=!1,re=null,ne=null,_e=null,ce=null,xe=null,se=null,Me=null,Ue=null}}}const a=new r,l=new s,u=new o;let c={},d={},f=new WeakMap,g=[],v=null,p=!1,h=null,m=null,x=null,_=null,y=null,S=null,C=null,L=!1,w=null,A=null,k=null,O=null,Z=null;const J=t.getParameter(35661);let F=!1,j=0;const V=t.getParameter(7938);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=j>=2);let X=null,D={};const N=t.getParameter(3088),z=t.getParameter(2978),Y=new qe().fromArray(N),q=new qe().fromArray(z);function ae(P,re,ne){const _e=new Uint8Array(4),ce=t.createTexture();t.bindTexture(P,ce),t.texParameteri(P,10241,9728),t.texParameteri(P,10240,9728);for(let xe=0;xe<ne;xe++)t.texImage2D(re+xe,0,6408,1,1,0,6408,5121,_e);return ce}const fe={};fe[3553]=ae(3553,3553,1),fe[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ge(2929),l.setFunc($d),ht(!1),xt(Hp),ge(2884),Le(qi);function ge(P){c[P]!==!0&&(t.enable(P),c[P]=!0)}function W(P){c[P]!==!1&&(t.disable(P),c[P]=!1)}function je(P,re){return d[P]!==re?(t.bindFramebuffer(P,re),d[P]=re,i&&(P===36009&&(d[36160]=re),P===36160&&(d[36009]=re)),!0):!1}function Ce(P,re){let ne=g,_e=!1;if(P)if(ne=f.get(re),ne===void 0&&(ne=[],f.set(re,ne)),P.isWebGLMultipleRenderTargets){const ce=P.texture;if(ne.length!==ce.length||ne[0]!==36064){for(let xe=0,se=ce.length;xe<se;xe++)ne[xe]=36064+xe;ne.length=ce.length,_e=!0}}else ne[0]!==36064&&(ne[0]=36064,_e=!0);else ne[0]!==1029&&(ne[0]=1029,_e=!0);_e&&(n.isWebGL2?t.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function be(P){return v!==P?(t.useProgram(P),v=P,!0):!1}const he={[as]:32774,[MS]:32778,[bS]:32779};if(i)he[$p]=32775,he[Xp]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(he[$p]=P.MIN_EXT,he[Xp]=P.MAX_EXT)}const ke={[ES]:0,[TS]:1,[CS]:768,[Kv]:770,[NS]:776,[RS]:774,[LS]:772,[AS]:769,[Jv]:771,[DS]:775,[PS]:773};function Le(P,re,ne,_e,ce,xe,se,Me){if(P===qi){p===!0&&(W(3042),p=!1);return}if(p===!1&&(ge(3042),p=!0),P!==SS){if(P!==h||Me!==L){if((m!==as||y!==as)&&(t.blendEquation(32774),m=as,y=as),Me)switch(P){case As:t.blendFuncSeparate(1,771,1,771);break;case Gp:t.blendFunc(1,1);break;case Wp:t.blendFuncSeparate(0,769,0,1);break;case jp:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case As:t.blendFuncSeparate(770,771,1,771);break;case Gp:t.blendFunc(770,1);break;case Wp:t.blendFuncSeparate(0,769,0,1);break;case jp:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,_=null,S=null,C=null,h=P,L=Me}return}ce=ce||re,xe=xe||ne,se=se||_e,(re!==m||ce!==y)&&(t.blendEquationSeparate(he[re],he[ce]),m=re,y=ce),(ne!==x||_e!==_||xe!==S||se!==C)&&(t.blendFuncSeparate(ke[ne],ke[_e],ke[xe],ke[se]),x=ne,_=_e,S=xe,C=se),h=P,L=null}function ye(P,re){P.side===gi?W(2884):ge(2884);let ne=P.side===Nn;re&&(ne=!ne),ht(ne),P.blending===As&&P.transparent===!1?Le(qi):Le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const _e=P.stencilWrite;u.setTest(_e),_e&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Zt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ge(32926):W(32926)}function ht(P){w!==P&&(P?t.frontFace(2304):t.frontFace(2305),w=P)}function xt(P){P!==xS?(ge(2884),P!==A&&(P===Hp?t.cullFace(1029):P===_S?t.cullFace(1028):t.cullFace(1032))):W(2884),A=P}function St(P){P!==k&&(F&&t.lineWidth(P),k=P)}function Zt(P,re,ne){P?(ge(32823),(O!==re||Z!==ne)&&(t.polygonOffset(re,ne),O=re,Z=ne)):W(32823)}function pt(P){P?ge(3089):W(3089)}function Oe(P){P===void 0&&(P=33984+J-1),X!==P&&(t.activeTexture(P),X=P)}function ln(P,re){X===null&&Oe();let ne=D[X];ne===void 0&&(ne={type:void 0,texture:void 0},D[X]=ne),(ne.type!==P||ne.texture!==re)&&(t.bindTexture(P,re||fe[P]),ne.type=P,ne.texture=re)}function un(){const P=D[X];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function T(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function b(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(P){Y.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Y.copy(P))}function le(P){q.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function ie(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},X=null,D={},d={},f=new WeakMap,g=[],v=null,p=!1,h=null,m=null,x=null,_=null,y=null,S=null,C=null,L=!1,w=null,A=null,k=null,O=null,Z=null,Y.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ge,disable:W,bindFramebuffer:je,drawBuffers:Ce,useProgram:be,setBlending:Le,setMaterial:ye,setFlipSided:ht,setCullFace:xt,setLineWidth:St,setPolygonOffset:Zt,setScissorTest:pt,activeTexture:Oe,bindTexture:ln,unbindTexture:un,compressedTexImage2D:T,texImage2D:we,texImage3D:b,texStorage2D:oe,texStorage3D:de,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:te,scissor:K,viewport:le,reset:ie}}function tT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,M){return m?new OffscreenCanvas(T,M):Ql("canvas")}function _(T,M,$,te){let oe=1;if((T.width>te||T.height>te)&&(oe=te/Math.max(T.width,T.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const de=M?Kd:Math.floor,we=de(oe*T.width),b=de(oe*T.height);p===void 0&&(p=x(we,b));const K=$?x(we,b):p;return K.width=we,K.height=b,K.getContext("2d").drawImage(T,0,0,we,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+we+"x"+b+")."),K}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return _m(T.width)&&_m(T.height)}function S(T){return a?!1:T.wrapS!==Pn||T.wrapT!==Pn||T.minFilter!==rt&&T.minFilter!==mn}function C(T,M){return T.generateMipmaps&&M&&T.minFilter!==rt&&T.minFilter!==mn}function L(T){t.generateMipmap(T)}function w(T,M,$,te,oe=!1){if(a===!1)return M;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de=M;return M===6403&&($===5126&&(de=33326),$===5131&&(de=33325),$===5121&&(de=33321)),M===33319&&($===5126&&(de=33328),$===5131&&(de=33327),$===5121&&(de=33323)),M===6408&&($===5126&&(de=34836),$===5131&&(de=34842),$===5121&&(de=te===nt&&oe===!1?35907:32856),$===32819&&(de=32854),$===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function A(T,M,$){return C(T,$)===!0||T.isFramebufferTexture&&T.minFilter!==rt&&T.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function k(T){return T===rt||T===qp||T===Yp?9728:9729}function O(T){const M=T.target;M.removeEventListener("dispose",O),J(M),M.isVideoTexture&&v.delete(M)}function Z(T){const M=T.target;M.removeEventListener("dispose",Z),j(M)}function J(T){const M=i.get(T);if(M.__webglInit===void 0)return;const $=T.source,te=h.get($);if(te){const oe=te[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&F(T),Object.keys(te).length===0&&h.delete($)}i.remove(T)}function F(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const $=T.source,te=h.get($);delete te[M.__cacheKey],o.memory.textures--}function j(T){const M=T.texture,$=i.get(T),te=i.get(M);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)t.deleteFramebuffer($.__webglFramebuffer[oe]),$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer[oe]);else{if(t.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&t.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let oe=0;oe<$.__webglColorRenderbuffer.length;oe++)$.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer($.__webglColorRenderbuffer[oe]);$.__webglDepthRenderbuffer&&t.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let oe=0,de=M.length;oe<de;oe++){const we=i.get(M[oe]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(T)}let V=0;function X(){V=0}function D(){const T=V;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),V+=1,T}function N(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function z(T,M){const $=i.get(T);if(T.isVideoTexture&&ln(T),T.isRenderTargetTexture===!1&&T.version>0&&$.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce($,T,M);return}}n.activeTexture(33984+M),n.bindTexture(3553,$.__webglTexture)}function Y(T,M){const $=i.get(T);if(T.version>0&&$.__version!==T.version){Ce($,T,M);return}n.activeTexture(33984+M),n.bindTexture(35866,$.__webglTexture)}function q(T,M){const $=i.get(T);if(T.version>0&&$.__version!==T.version){Ce($,T,M);return}n.activeTexture(33984+M),n.bindTexture(32879,$.__webglTexture)}function ae(T,M){const $=i.get(T);if(T.version>0&&$.__version!==T.version){be($,T,M);return}n.activeTexture(33984+M),n.bindTexture(34067,$.__webglTexture)}const fe={[qd]:10497,[Pn]:33071,[Yd]:33648},ge={[rt]:9728,[qp]:9984,[Yp]:9986,[mn]:9729,[qS]:9985,[Mu]:9987};function W(T,M,$){if($?(t.texParameteri(T,10242,fe[M.wrapS]),t.texParameteri(T,10243,fe[M.wrapT]),(T===32879||T===35866)&&t.texParameteri(T,32882,fe[M.wrapR]),t.texParameteri(T,10240,ge[M.magFilter]),t.texParameteri(T,10241,ge[M.minFilter])):(t.texParameteri(T,10242,33071),t.texParameteri(T,10243,33071),(T===32879||T===35866)&&t.texParameteri(T,32882,33071),(M.wrapS!==Pn||M.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,10240,k(M.magFilter)),t.texParameteri(T,10241,k(M.minFilter)),M.minFilter!==rt&&M.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.type===zi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ta&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function je(T,M){let $=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",O));const te=M.source;let oe=h.get(te);oe===void 0&&(oe={},h.set(te,oe));const de=N(M);if(de!==T.__cacheKey){oe[de]===void 0&&(oe[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),oe[de].usedTimes++;const we=oe[T.__cacheKey];we!==void 0&&(oe[T.__cacheKey].usedTimes--,we.usedTimes===0&&F(M)),T.__cacheKey=de,T.__webglTexture=oe[de].texture}return $}function Ce(T,M,$){let te=3553;M.isDataArrayTexture&&(te=35866),M.isData3DTexture&&(te=32879);const oe=je(T,M),de=M.source;if(n.activeTexture(33984+$),n.bindTexture(te,T.__webglTexture),de.version!==de.__currentVersion||oe===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const we=S(M)&&y(M.image)===!1;let b=_(M.image,we,!1,c);b=un(M,b);const K=y(b)||a,le=s.convert(M.format,M.encoding);let ie=s.convert(M.type),P=w(M.internalFormat,le,ie,M.encoding,M.isVideoTexture);W(te,M,K);let re;const ne=M.mipmaps,_e=a&&M.isVideoTexture!==!0,ce=de.__currentVersion===void 0||oe===!0,xe=A(M,b,K);if(M.isDepthTexture)P=6402,a?M.type===zi?P=36012:M.type===xr?P=33190:M.type===Ls?P=35056:P=33189:M.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Sr&&P===6402&&M.type!==nx&&M.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=xr,ie=s.convert(M.type)),M.format===Bs&&P===6402&&(P=34041,M.type!==Ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ls,ie=s.convert(M.type))),ce&&(_e?n.texStorage2D(3553,1,P,b.width,b.height):n.texImage2D(3553,0,P,b.width,b.height,0,le,ie,null));else if(M.isDataTexture)if(ne.length>0&&K){_e&&ce&&n.texStorage2D(3553,xe,P,ne[0].width,ne[0].height);for(let se=0,Me=ne.length;se<Me;se++)re=ne[se],_e?n.texSubImage2D(3553,se,0,0,re.width,re.height,le,ie,re.data):n.texImage2D(3553,se,P,re.width,re.height,0,le,ie,re.data);M.generateMipmaps=!1}else _e?(ce&&n.texStorage2D(3553,xe,P,b.width,b.height),n.texSubImage2D(3553,0,0,0,b.width,b.height,le,ie,b.data)):n.texImage2D(3553,0,P,b.width,b.height,0,le,ie,b.data);else if(M.isCompressedTexture){_e&&ce&&n.texStorage2D(3553,xe,P,ne[0].width,ne[0].height);for(let se=0,Me=ne.length;se<Me;se++)re=ne[se],M.format!==Xn?le!==null?_e?n.compressedTexSubImage2D(3553,se,0,0,re.width,re.height,le,re.data):n.compressedTexImage2D(3553,se,P,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?n.texSubImage2D(3553,se,0,0,re.width,re.height,le,ie,re.data):n.texImage2D(3553,se,P,re.width,re.height,0,le,ie,re.data)}else if(M.isDataArrayTexture)_e?(ce&&n.texStorage3D(35866,xe,P,b.width,b.height,b.depth),n.texSubImage3D(35866,0,0,0,0,b.width,b.height,b.depth,le,ie,b.data)):n.texImage3D(35866,0,P,b.width,b.height,b.depth,0,le,ie,b.data);else if(M.isData3DTexture)_e?(ce&&n.texStorage3D(32879,xe,P,b.width,b.height,b.depth),n.texSubImage3D(32879,0,0,0,0,b.width,b.height,b.depth,le,ie,b.data)):n.texImage3D(32879,0,P,b.width,b.height,b.depth,0,le,ie,b.data);else if(M.isFramebufferTexture){if(ce)if(_e)n.texStorage2D(3553,xe,P,b.width,b.height);else{let se=b.width,Me=b.height;for(let Ue=0;Ue<xe;Ue++)n.texImage2D(3553,Ue,P,se,Me,0,le,ie,null),se>>=1,Me>>=1}}else if(ne.length>0&&K){_e&&ce&&n.texStorage2D(3553,xe,P,ne[0].width,ne[0].height);for(let se=0,Me=ne.length;se<Me;se++)re=ne[se],_e?n.texSubImage2D(3553,se,0,0,le,ie,re):n.texImage2D(3553,se,P,le,ie,re);M.generateMipmaps=!1}else _e?(ce&&n.texStorage2D(3553,xe,P,b.width,b.height),n.texSubImage2D(3553,0,0,0,le,ie,b)):n.texImage2D(3553,0,P,le,ie,b);C(M,K)&&L(te),de.__currentVersion=de.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function be(T,M,$){if(M.image.length!==6)return;const te=je(T,M),oe=M.source;if(n.activeTexture(33984+$),n.bindTexture(34067,T.__webglTexture),oe.version!==oe.__currentVersion||te===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,we=M.image[0]&&M.image[0].isDataTexture,b=[];for(let se=0;se<6;se++)!de&&!we?b[se]=_(M.image[se],!1,!0,u):b[se]=we?M.image[se].image:M.image[se],b[se]=un(M,b[se]);const K=b[0],le=y(K)||a,ie=s.convert(M.format,M.encoding),P=s.convert(M.type),re=w(M.internalFormat,ie,P,M.encoding),ne=a&&M.isVideoTexture!==!0,_e=oe.__currentVersion===void 0||te===!0;let ce=A(M,K,le);W(34067,M,le);let xe;if(de){ne&&_e&&n.texStorage2D(34067,ce,re,K.width,K.height);for(let se=0;se<6;se++){xe=b[se].mipmaps;for(let Me=0;Me<xe.length;Me++){const Ue=xe[Me];M.format!==Xn?ie!==null?ne?n.compressedTexSubImage2D(34069+se,Me,0,0,Ue.width,Ue.height,ie,Ue.data):n.compressedTexImage2D(34069+se,Me,re,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?n.texSubImage2D(34069+se,Me,0,0,Ue.width,Ue.height,ie,P,Ue.data):n.texImage2D(34069+se,Me,re,Ue.width,Ue.height,0,ie,P,Ue.data)}}}else{xe=M.mipmaps,ne&&_e&&(xe.length>0&&ce++,n.texStorage2D(34067,ce,re,b[0].width,b[0].height));for(let se=0;se<6;se++)if(we){ne?n.texSubImage2D(34069+se,0,0,0,b[se].width,b[se].height,ie,P,b[se].data):n.texImage2D(34069+se,0,re,b[se].width,b[se].height,0,ie,P,b[se].data);for(let Me=0;Me<xe.length;Me++){const Be=xe[Me].image[se].image;ne?n.texSubImage2D(34069+se,Me+1,0,0,Be.width,Be.height,ie,P,Be.data):n.texImage2D(34069+se,Me+1,re,Be.width,Be.height,0,ie,P,Be.data)}}else{ne?n.texSubImage2D(34069+se,0,0,0,ie,P,b[se]):n.texImage2D(34069+se,0,re,ie,P,b[se]);for(let Me=0;Me<xe.length;Me++){const Ue=xe[Me];ne?n.texSubImage2D(34069+se,Me+1,0,0,ie,P,Ue.image[se]):n.texImage2D(34069+se,Me+1,re,ie,P,Ue.image[se])}}}C(M,le)&&L(34067),oe.__currentVersion=oe.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function he(T,M,$,te,oe){const de=s.convert($.format,$.encoding),we=s.convert($.type),b=w($.internalFormat,de,we,$.encoding);i.get(M).__hasExternalTextures||(oe===32879||oe===35866?n.texImage3D(oe,0,b,M.width,M.height,M.depth,0,de,we,null):n.texImage2D(oe,0,b,M.width,M.height,0,de,we,null)),n.bindFramebuffer(36160,T),Oe(M)?f.framebufferTexture2DMultisampleEXT(36160,te,oe,i.get($).__webglTexture,0,pt(M)):t.framebufferTexture2D(36160,te,oe,i.get($).__webglTexture,0),n.bindFramebuffer(36160,null)}function ke(T,M,$){if(t.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let te=33189;if($||Oe(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===zi?te=36012:oe.type===xr&&(te=33190));const de=pt(M);Oe(M)?f.renderbufferStorageMultisampleEXT(36161,de,te,M.width,M.height):t.renderbufferStorageMultisample(36161,de,te,M.width,M.height)}else t.renderbufferStorage(36161,te,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const te=pt(M);$&&Oe(M)===!1?t.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):Oe(M)?f.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,T)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<te.length;oe++){const de=te[oe],we=s.convert(de.format,de.encoding),b=s.convert(de.type),K=w(de.internalFormat,we,b,de.encoding),le=pt(M);$&&Oe(M)===!1?t.renderbufferStorageMultisample(36161,le,K,M.width,M.height):Oe(M)?f.renderbufferStorageMultisampleEXT(36161,le,K,M.width,M.height):t.renderbufferStorage(36161,K,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function Le(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,oe=pt(M);if(M.depthTexture.format===Sr)Oe(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,oe):t.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===Bs)Oe(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,oe):t.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ye(T){const M=i.get(T),$=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Le(M.__webglFramebuffer,T)}else if($){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),ke(M.__webglDepthbuffer[te],T,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ke(M.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function ht(T,M,$){const te=i.get(T);M!==void 0&&he(te.__webglFramebuffer,T,T.texture,36064,3553),$!==void 0&&ye(T)}function xt(T){const M=T.texture,$=i.get(T),te=i.get(M);T.addEventListener("dispose",Z),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++);const oe=T.isWebGLCubeRenderTarget===!0,de=T.isWebGLMultipleRenderTargets===!0,we=y(T)||a;if(oe){$.__webglFramebuffer=[];for(let b=0;b<6;b++)$.__webglFramebuffer[b]=t.createFramebuffer()}else{if($.__webglFramebuffer=t.createFramebuffer(),de)if(r.drawBuffers){const b=T.texture;for(let K=0,le=b.length;K<le;K++){const ie=i.get(b[K]);ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Oe(T)===!1){const b=de?M:[M];$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let K=0;K<b.length;K++){const le=b[K];$.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(36161,$.__webglColorRenderbuffer[K]);const ie=s.convert(le.format,le.encoding),P=s.convert(le.type),re=w(le.internalFormat,ie,P,le.encoding),ne=pt(T);t.renderbufferStorageMultisample(36161,ne,re,T.width,T.height),t.framebufferRenderbuffer(36160,36064+K,36161,$.__webglColorRenderbuffer[K])}t.bindRenderbuffer(36161,null),T.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),ke($.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}}if(oe){n.bindTexture(34067,te.__webglTexture),W(34067,M,we);for(let b=0;b<6;b++)he($.__webglFramebuffer[b],T,M,36064,34069+b);C(M,we)&&L(34067),n.unbindTexture()}else if(de){const b=T.texture;for(let K=0,le=b.length;K<le;K++){const ie=b[K],P=i.get(ie);n.bindTexture(3553,P.__webglTexture),W(3553,ie,we),he($.__webglFramebuffer,T,ie,36064+K,3553),C(ie,we)&&L(3553)}n.unbindTexture()}else{let b=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?b=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(b,te.__webglTexture),W(b,M,we),he($.__webglFramebuffer,T,M,36064,b),C(M,we)&&L(b),n.unbindTexture()}T.depthBuffer&&ye(T)}function St(T){const M=y(T)||a,$=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,oe=$.length;te<oe;te++){const de=$[te];if(C(de,M)){const we=T.isWebGLCubeRenderTarget?34067:3553,b=i.get(de).__webglTexture;n.bindTexture(we,b),L(we),n.unbindTexture()}}}function Zt(T){if(a&&T.samples>0&&Oe(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],$=T.width,te=T.height;let oe=16384;const de=[],we=T.stencilBuffer?33306:36096,b=i.get(T),K=T.isWebGLMultipleRenderTargets===!0;if(K)for(let le=0;le<M.length;le++)n.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+le,36161,null),n.bindFramebuffer(36160,b.__webglFramebuffer),t.framebufferTexture2D(36009,36064+le,3553,null,0);n.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,b.__webglFramebuffer);for(let le=0;le<M.length;le++){de.push(36064+le),T.depthBuffer&&de.push(we);const ie=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(ie===!1&&(T.depthBuffer&&(oe|=256),T.stencilBuffer&&(oe|=1024)),K&&t.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[le]),ie===!0&&(t.invalidateFramebuffer(36008,[we]),t.invalidateFramebuffer(36009,[we])),K){const P=i.get(M[le]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,P,0)}t.blitFramebuffer(0,0,$,te,0,0,$,te,oe,9728),g&&t.invalidateFramebuffer(36008,de)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),K)for(let le=0;le<M.length;le++){n.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+le,36161,b.__webglColorRenderbuffer[le]);const ie=i.get(M[le]).__webglTexture;n.bindFramebuffer(36160,b.__webglFramebuffer),t.framebufferTexture2D(36009,36064+le,3553,ie,0)}n.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function pt(T){return Math.min(d,T.samples)}function Oe(T){const M=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ln(T){const M=o.render.frame;v.get(T)!==M&&(v.set(T,M),T.update())}function un(T,M){const $=T.encoding,te=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Zd||$!==Dr&&($===nt?a===!1?e.has("EXT_sRGB")===!0&&te===Xn?(T.format=Zd,T.minFilter=mn,T.generateMipmaps=!1):M=ox.sRGBToLinear(M):(te!==Xn||oe!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),M}this.allocateTextureUnit=D,this.resetTextureUnits=X,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=ae,this.rebindTextures=ht,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe}function nT(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Rr)return 5121;if(s===KS)return 32819;if(s===JS)return 32820;if(s===YS)return 5120;if(s===QS)return 5122;if(s===nx)return 5123;if(s===ZS)return 5124;if(s===xr)return 5125;if(s===zi)return 5126;if(s===ta)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===e2)return 6406;if(s===Xn)return 6408;if(s===n2)return 6409;if(s===i2)return 6410;if(s===Sr)return 6402;if(s===Bs)return 34041;if(s===r2)return 6403;if(s===t2)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Zd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===s2)return 36244;if(s===o2)return 33319;if(s===a2)return 33320;if(s===l2)return 36249;if(s===cc||s===dc||s===fc||s===hc)if(o===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===cc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===cc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qp||s===Zp||s===Kp||s===Jp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===u2)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===em||s===tm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===em)return o===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===tm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nm||s===im||s===rm||s===sm||s===om||s===am||s===lm||s===um||s===cm||s===dm||s===fm||s===hm||s===pm||s===mm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===nm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===im)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===om)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===am)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===um)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mm)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gm)return o===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ls?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class iT extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rT={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=n.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const x=new bt;x.matrixAutoUpdate=!1,x.visible=!1,u.joints[p.jointName]=x,u.add(x)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,v=.005;u.inputState.pinching&&f>g+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class Sx extends Yt{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Sr,c!==Sr&&c!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Sr&&(i=xr),i===void 0&&c===Bs&&(i=Ls),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:rt,this.minFilter=l!==void 0?l:rt,this.flipY=!1,this.generateMipmaps=!1}}class sT extends Fr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,d=null,f=null,g=null;const v=n.getContextAttributes();let p=null,h=null;const m=[],x=[],_=new tn;_.layers.enable(1),_.viewport=new qe;const y=new tn;y.layers.enable(2),y.viewport=new qe;const S=[_,y],C=new iT;C.layers.enable(1),C.layers.enable(2);let L=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=m[N];return z===void 0&&(z=new Hc,m[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=m[N];return z===void 0&&(z=new Hc,m[N]=z),z.getGripSpace()},this.getHand=function(N){let z=m[N];return z===void 0&&(z=new Hc,m[N]=z),z.getHandSpace()};function A(N){const z=x.indexOf(N.inputSource);if(z===-1)return;const Y=m[z];Y!==void 0&&Y.dispatchEvent({type:N.type,data:N.inputSource})}function k(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",O);for(let N=0;N<m.length;N++){const z=x[N];z!==null&&(x[N]=null,m[N].disconnect(z))}L=null,w=null,e.setRenderTarget(p),f=null,d=null,c=null,r=null,h=null,D.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",k),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,z),r.updateRenderState({baseLayer:f}),h=new vi(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Rr,encoding:e.outputEncoding})}else{let z=null,Y=null,q=null;v.depth&&(q=v.stencil?35056:33190,z=v.stencil?Bs:Sr,Y=v.stencil?Ls:xr);const ae={colorFormat:32856,depthFormat:q,scaleFactor:s};c=new XRWebGLBinding(r,n),d=c.createProjectionLayer(ae),r.updateRenderState({layers:[d]}),h=new vi(d.textureWidth,d.textureHeight,{format:Xn,type:Rr,depthTexture:new Sx(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const fe=e.properties.get(h);fe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),D.setContext(r),D.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(N){for(let z=0;z<N.removed.length;z++){const Y=N.removed[z],q=x.indexOf(Y);q>=0&&(x[q]=null,m[q].dispatchEvent({type:"disconnected",data:Y}))}for(let z=0;z<N.added.length;z++){const Y=N.added[z];let q=x.indexOf(Y);if(q===-1){for(let fe=0;fe<m.length;fe++)if(fe>=x.length){x.push(Y),q=fe;break}else if(x[fe]===null){x[fe]=Y,q=fe;break}if(q===-1)break}const ae=m[q];ae&&ae.dispatchEvent({type:"connected",data:Y})}}const Z=new I,J=new I;function F(N,z,Y){Z.setFromMatrixPosition(z.matrixWorld),J.setFromMatrixPosition(Y.matrixWorld);const q=Z.distanceTo(J),ae=z.projectionMatrix.elements,fe=Y.projectionMatrix.elements,ge=ae[14]/(ae[10]-1),W=ae[14]/(ae[10]+1),je=(ae[9]+1)/ae[5],Ce=(ae[9]-1)/ae[5],be=(ae[8]-1)/ae[0],he=(fe[8]+1)/fe[0],ke=ge*be,Le=ge*he,ye=q/(-be+he),ht=ye*-be;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(ht),N.translateZ(ye),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const xt=ge+ye,St=W+ye,Zt=ke-ht,pt=Le+(q-ht),Oe=je*W/St*xt,ln=Ce*W/St*xt;N.projectionMatrix.makePerspective(Zt,pt,Oe,ln,xt,St)}function j(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;C.near=y.near=_.near=N.near,C.far=y.far=_.far=N.far,(L!==C.near||w!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,w=C.far);const z=N.parent,Y=C.cameras;j(C,z);for(let ae=0;ae<Y.length;ae++)j(Y[ae],z);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),N.position.copy(C.position),N.quaternion.copy(C.quaternion),N.scale.copy(C.scale),N.matrix.copy(C.matrix),N.matrixWorld.copy(C.matrixWorld);const q=N.children;for(let ae=0,fe=q.length;ae<fe;ae++)q[ae].updateMatrixWorld(!0);Y.length===2?F(C,_,y):C.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let V=null;function X(N,z){if(u=z.getViewerPose(l||o),g=z,u!==null){const Y=u.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let q=!1;Y.length!==C.cameras.length&&(C.cameras.length=0,q=!0);for(let ae=0;ae<Y.length;ae++){const fe=Y[ae];let ge=null;if(f!==null)ge=f.getViewport(fe);else{const je=c.getViewSubImage(d,fe);ge=je.viewport,ae===0&&(e.setRenderTargetTextures(h,je.colorTexture,d.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(h))}let W=S[ae];W===void 0&&(W=new tn,W.layers.enable(ae),W.viewport=new qe,S[ae]=W),W.matrix.fromArray(fe.transform.matrix),W.projectionMatrix.fromArray(fe.projectionMatrix),W.viewport.set(ge.x,ge.y,ge.width,ge.height),ae===0&&C.matrix.copy(W.matrix),q===!0&&C.cameras.push(W)}}for(let Y=0;Y<m.length;Y++){const q=x[Y],ae=m[Y];q!==null&&ae!==void 0&&ae.update(q,z,l||o)}V&&V(N,z),g=null}const D=new gx;D.setAnimationLoop(X),this.setAnimationLoop=function(N){V=N},this.dispose=function(){}}}function oT(t,e){function n(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,x,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),v(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,x):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Nn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Nn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=t.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let x;h.map?x=h.map:h.specularMap?x=h.specularMap:h.displacementMap?x=h.displacementMap:h.normalMap?x=h.normalMap:h.bumpMap?x=h.bumpMap:h.roughnessMap?x=h.roughnessMap:h.metalnessMap?x=h.metalnessMap:h.alphaMap?x=h.alphaMap:h.emissiveMap?x=h.emissiveMap:h.clearcoatMap?x=h.clearcoatMap:h.clearcoatNormalMap?x=h.clearcoatNormalMap:h.clearcoatRoughnessMap?x=h.clearcoatRoughnessMap:h.iridescenceMap?x=h.iridescenceMap:h.iridescenceThicknessMap?x=h.iridescenceThicknessMap:h.specularIntensityMap?x=h.specularIntensityMap:h.specularColorMap?x=h.specularColorMap:h.transmissionMap?x=h.transmissionMap:h.thicknessMap?x=h.thicknessMap:h.sheenColorMap?x=h.sheenColorMap:h.sheenRoughnessMap&&(x=h.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let _;h.aoMap?_=h.aoMap:h.lightMap&&(_=h.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=x*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Nn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aT(){const t=Ql("canvas");return t.style.display="block",t}function Mx(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:aT(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const g=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Dr,this.physicallyCorrectLights=!1,this.toneMapping=di,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,x=0,_=null,y=-1,S=null;const C=new qe,L=new qe;let w=null,A=e.width,k=e.height,O=1,Z=null,J=null;const F=new qe(0,0,A,k),j=new qe(0,0,A,k);let V=!1;const X=new uh;let D=!1,N=!1,z=null;const Y=new lt,q=new ve,ae=new I,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return _===null?O:1}let W=n;function je(E,B){for(let G=0;G<E.length;G++){const H=E[G],Q=e.getContext(H,B);if(Q!==null)return Q}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",ne,!1),W===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),W=je(B,E),W===null)throw je(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ce,be,he,ke,Le,ye,ht,xt,St,Zt,pt,Oe,ln,un,T,M,$,te,oe,de,we,b,K;function le(){Ce=new _3(W),be=new h3(W,Ce,t),Ce.init(be),b=new nT(W,Ce,be),he=new eT(W,Ce,be),ke=new S3,Le=new BE,ye=new tT(W,Ce,he,Le,be,b,ke),ht=new m3(p),xt=new x3(p),St=new I2(W,be),K=new d3(W,Ce,St,be),Zt=new y3(W,St,ke,K),pt=new T3(W,Zt,St,ke),oe=new E3(W,be,ye),M=new p3(Le),Oe=new UE(p,ht,xt,Ce,be,K,M),ln=new oT(p,Le),un=new HE,T=new qE(Ce,be),te=new c3(p,ht,he,pt,c,o),$=new JE(p,pt,be),de=new f3(W,Ce,ke,be),we=new w3(W,Ce,ke,be),ke.programs=Oe.programs,p.capabilities=be,p.extensions=Ce,p.properties=Le,p.renderLists=un,p.shadowMap=$,p.state=he,p.info=ke}le();const ie=new sT(p,W);this.xr=ie,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const E=Ce.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ce.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(A,k,!1))},this.getSize=function(E){return E.set(A,k)},this.setSize=function(E,B,G){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=E,k=B,e.width=Math.floor(E*O),e.height=Math.floor(B*O),G!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(A*O,k*O).floor()},this.setDrawingBufferSize=function(E,B,G){A=E,k=B,O=G,e.width=Math.floor(E*G),e.height=Math.floor(B*G),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,B,G,H){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,B,G,H),he.viewport(C.copy(F).multiplyScalar(O).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,B,G,H){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,B,G,H),he.scissor(L.copy(j).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){he.setScissorTest(V=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(E=!0,B=!0,G=!0){let H=0;E&&(H|=16384),B&&(H|=256),G&&(H|=1024),W.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),un.dispose(),T.dispose(),Le.dispose(),ht.dispose(),xt.dispose(),pt.dispose(),K.dispose(),Oe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ue),ie.removeEventListener("sessionend",Be),z&&(z.dispose(),z=null),Nt.stop()};function P(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=ke.autoReset,B=$.enabled,G=$.autoUpdate,H=$.needsUpdate,Q=$.type;le(),ke.autoReset=E,$.enabled=B,$.autoUpdate=G,$.needsUpdate=H,$.type=Q}function ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _e(E){const B=E.target;B.removeEventListener("dispose",_e),ce(B)}function ce(E){xe(E),Le.remove(E)}function xe(E){const B=Le.get(E).programs;B!==void 0&&(B.forEach(function(G){Oe.releaseProgram(G)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,G,H,Q,Se){B===null&&(B=fe);const Ee=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=Nx(E,B,G,H,Q);he.setMaterial(H,Ee);let Te=G.index;const Ve=G.attributes.position;if(Te===null){if(Ve===void 0||Ve.count===0)return}else if(Te.count===0)return;let De=1;H.wireframe===!0&&(Te=Zt.getWireframeAttribute(G),De=2),K.setup(Q,H,Ae,G,Te);let Ie,tt=de;Te!==null&&(Ie=St.get(Te),tt=we,tt.setIndex(Ie));const ir=Te!==null?Te.count:Ve.count,zr=G.drawRange.start*De,Or=G.drawRange.count*De,On=Se!==null?Se.start*De:0,ze=Se!==null?Se.count*De:1/0,Ur=Math.max(zr,On),ut=Math.min(ir,zr+Or,On+ze)-1,Un=Math.max(0,ut-Ur+1);if(Un!==0){if(Q.isMesh)H.wireframe===!0?(he.setLineWidth(H.wireframeLinewidth*ge()),tt.setMode(1)):tt.setMode(4);else if(Q.isLine){let yi=H.linewidth;yi===void 0&&(yi=1),he.setLineWidth(yi*ge()),Q.isLineSegments?tt.setMode(1):Q.isLineLoop?tt.setMode(2):tt.setMode(3)}else Q.isPoints?tt.setMode(0):Q.isSprite&&tt.setMode(4);if(Q.isInstancedMesh)tt.renderInstances(Ur,Un,Q.count);else if(G.isInstancedBufferGeometry){const yi=Math.min(G.instanceCount,G._maxInstanceCount);tt.renderInstances(Ur,Un,yi)}else tt.render(Ur,Un)}},this.compile=function(E,B){f=T.get(E),f.init(),v.push(f),E.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(G){const H=G.material;if(H)if(Array.isArray(H))for(let Q=0;Q<H.length;Q++){const Se=H[Q];Cu(Se,E,G)}else Cu(H,E,G)}),v.pop(),f=null};let se=null;function Me(E){se&&se(E)}function Ue(){Nt.stop()}function Be(){Nt.start()}const Nt=new gx;Nt.setAnimationLoop(Me),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(E){se=E,ie.setAnimationLoop(E),E===null?Nt.stop():Nt.start()},ie.addEventListener("sessionstart",Ue),ie.addEventListener("sessionend",Be),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(B),B=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,B,_),f=T.get(E,v.length),f.init(),v.push(f),Y.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(Y),N=this.localClippingEnabled,D=M.init(this.clippingPlanes,N,B),d=un.get(E,g.length),d.init(),g.push(d),zn(E,B,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(Z,J),D===!0&&M.beginShadows();const G=f.state.shadowsArray;if($.render(G,E,B),D===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,E),f.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const H=B.cameras;for(let Q=0,Se=H.length;Q<Se;Q++){const Ee=H[Q];mh(d,E,Ee,Ee.viewport)}}else mh(d,E,B);_!==null&&(ye.updateMultisampleRenderTarget(_),ye.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(p,E,B),K.resetDefaultState(),y=-1,S=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function zn(E,B,G,H){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){H&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);const Ee=pt.update(E),Ae=E.material;Ae.visible&&d.push(E,Ee,Ae,G,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ke.render.frame&&(E.skeleton.update(),E.skeleton.frame=ke.render.frame),!E.frustumCulled||X.intersectsObject(E))){H&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);const Ee=pt.update(E),Ae=E.material;if(Array.isArray(Ae)){const Te=Ee.groups;for(let Ve=0,De=Te.length;Ve<De;Ve++){const Ie=Te[Ve],tt=Ae[Ie.materialIndex];tt&&tt.visible&&d.push(E,Ee,tt,G,ae.z,Ie)}}else Ae.visible&&d.push(E,Ee,Ae,G,ae.z,null)}}const Se=E.children;for(let Ee=0,Ae=Se.length;Ee<Ae;Ee++)zn(Se[Ee],B,G,H)}function mh(E,B,G,H){const Q=E.opaque,Se=E.transmissive,Ee=E.transparent;f.setupLightsView(G),Se.length>0&&Rx(Q,B,G),H&&he.viewport(C.copy(H)),Q.length>0&&da(Q,B,G),Se.length>0&&da(Se,B,G),Ee.length>0&&da(Ee,B,G),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Rx(E,B,G){const H=be.isWebGL2;z===null&&(z=new vi(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?ta:Rr,minFilter:Mu,samples:H&&s===!0?4:0})),p.getDrawingBufferSize(q),H?z.setSize(q.x,q.y):z.setSize(Kd(q.x),Kd(q.y));const Q=p.getRenderTarget();p.setRenderTarget(z),p.clear();const Se=p.toneMapping;p.toneMapping=di,da(E,B,G),p.toneMapping=Se,ye.updateMultisampleRenderTarget(z),ye.updateRenderTargetMipmap(z),p.setRenderTarget(Q)}function da(E,B,G){const H=B.isScene===!0?B.overrideMaterial:null;for(let Q=0,Se=E.length;Q<Se;Q++){const Ee=E[Q],Ae=Ee.object,Te=Ee.geometry,Ve=H===null?Ee.material:H,De=Ee.group;Ae.layers.test(G.layers)&&Dx(Ae,B,G,Te,Ve,De)}}function Dx(E,B,G,H,Q,Se){E.onBeforeRender(p,B,G,H,Q,Se),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(p,B,G,H,E,Se),Q.transparent===!0&&Q.side===gi?(Q.side=Nn,Q.needsUpdate=!0,p.renderBufferDirect(G,B,H,Q,E,Se),Q.side=Pr,Q.needsUpdate=!0,p.renderBufferDirect(G,B,H,Q,E,Se),Q.side=gi):p.renderBufferDirect(G,B,H,Q,E,Se),E.onAfterRender(p,B,G,H,Q,Se)}function Cu(E,B,G){B.isScene!==!0&&(B=fe);const H=Le.get(E),Q=f.state.lights,Se=f.state.shadowsArray,Ee=Q.state.version,Ae=Oe.getParameters(E,Q.state,Se,B,G),Te=Oe.getProgramCacheKey(Ae);let Ve=H.programs;H.environment=E.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.envMap=(E.isMeshStandardMaterial?xt:ht).get(E.envMap||H.environment),Ve===void 0&&(E.addEventListener("dispose",_e),Ve=new Map,H.programs=Ve);let De=Ve.get(Te);if(De!==void 0){if(H.currentProgram===De&&H.lightsStateVersion===Ee)return gh(E,Ae),De}else Ae.uniforms=Oe.getUniforms(E),E.onBuild(G,Ae,p),E.onBeforeCompile(Ae,p),De=Oe.acquireProgram(Ae,Te),Ve.set(Te,De),H.uniforms=Ae.uniforms;const Ie=H.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=M.uniform),gh(E,Ae),H.needsLights=kx(E),H.lightsStateVersion=Ee,H.needsLights&&(Ie.ambientLightColor.value=Q.state.ambient,Ie.lightProbe.value=Q.state.probe,Ie.directionalLights.value=Q.state.directional,Ie.directionalLightShadows.value=Q.state.directionalShadow,Ie.spotLights.value=Q.state.spot,Ie.spotLightShadows.value=Q.state.spotShadow,Ie.rectAreaLights.value=Q.state.rectArea,Ie.ltc_1.value=Q.state.rectAreaLTC1,Ie.ltc_2.value=Q.state.rectAreaLTC2,Ie.pointLights.value=Q.state.point,Ie.pointLightShadows.value=Q.state.pointShadow,Ie.hemisphereLights.value=Q.state.hemi,Ie.directionalShadowMap.value=Q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ie.spotShadowMap.value=Q.state.spotShadowMap,Ie.spotShadowMatrix.value=Q.state.spotShadowMatrix,Ie.pointShadowMap.value=Q.state.pointShadowMap,Ie.pointShadowMatrix.value=Q.state.pointShadowMatrix);const tt=De.getUniforms(),ir=_l.seqWithValue(tt.seq,Ie);return H.currentProgram=De,H.uniformsList=ir,De}function gh(E,B){const G=Le.get(E);G.outputEncoding=B.outputEncoding,G.instancing=B.instancing,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Nx(E,B,G,H,Q){B.isScene!==!0&&(B=fe),ye.resetTextureUnits();const Se=B.fog,Ee=H.isMeshStandardMaterial?B.environment:null,Ae=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Dr,Te=(H.isMeshStandardMaterial?xt:ht).get(H.envMap||Ee),Ve=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!H.normalMap&&!!G.attributes.tangent,Ie=!!G.morphAttributes.position,tt=!!G.morphAttributes.normal,ir=!!G.morphAttributes.color,zr=H.toneMapped?p.toneMapping:di,Or=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,On=Or!==void 0?Or.length:0,ze=Le.get(H),Ur=f.state.lights;if(D===!0&&(N===!0||E!==S)){const Bn=E===S&&H.id===y;M.setState(H,E,Bn)}let ut=!1;H.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Ur.state.version||ze.outputEncoding!==Ae||Q.isInstancedMesh&&ze.instancing===!1||!Q.isInstancedMesh&&ze.instancing===!0||Q.isSkinnedMesh&&ze.skinning===!1||!Q.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Te||H.fog===!0&&ze.fog!==Se||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==M.numPlanes||ze.numIntersection!==M.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==De||ze.morphTargets!==Ie||ze.morphNormals!==tt||ze.morphColors!==ir||ze.toneMapping!==zr||be.isWebGL2===!0&&ze.morphTargetsCount!==On)&&(ut=!0):(ut=!0,ze.__version=H.version);let Un=ze.currentProgram;ut===!0&&(Un=Cu(H,B,Q));let yi=!1,Zs=!1,Au=!1;const It=Un.getUniforms(),Ks=ze.uniforms;if(he.useProgram(Un.program)&&(yi=!0,Zs=!0,Au=!0),H.id!==y&&(y=H.id,Zs=!0),yi||S!==E){if(It.setValue(W,"projectionMatrix",E.projectionMatrix),be.logarithmicDepthBuffer&&It.setValue(W,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,Zs=!0,Au=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Bn=It.map.cameraPosition;Bn!==void 0&&Bn.setValue(W,ae.setFromMatrixPosition(E.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&It.setValue(W,"isOrthographic",E.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||Q.isSkinnedMesh)&&It.setValue(W,"viewMatrix",E.matrixWorldInverse)}if(Q.isSkinnedMesh){It.setOptional(W,Q,"bindMatrix"),It.setOptional(W,Q,"bindMatrixInverse");const Bn=Q.skeleton;Bn&&(be.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),It.setValue(W,"boneTexture",Bn.boneTexture,ye),It.setValue(W,"boneTextureSize",Bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Lu=G.morphAttributes;return(Lu.position!==void 0||Lu.normal!==void 0||Lu.color!==void 0&&be.isWebGL2===!0)&&oe.update(Q,G,H,Un),(Zs||ze.receiveShadow!==Q.receiveShadow)&&(ze.receiveShadow=Q.receiveShadow,It.setValue(W,"receiveShadow",Q.receiveShadow)),Zs&&(It.setValue(W,"toneMappingExposure",p.toneMappingExposure),ze.needsLights&&Ix(Ks,Au),Se&&H.fog===!0&&ln.refreshFogUniforms(Ks,Se),ln.refreshMaterialUniforms(Ks,H,O,k,z),_l.upload(W,ze.uniformsList,Ks,ye)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_l.upload(W,ze.uniformsList,Ks,ye),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&It.setValue(W,"center",Q.center),It.setValue(W,"modelViewMatrix",Q.modelViewMatrix),It.setValue(W,"normalMatrix",Q.normalMatrix),It.setValue(W,"modelMatrix",Q.matrixWorld),Un}function Ix(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function kx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,B,G){Le.get(E.texture).__webglTexture=B,Le.get(E.depthTexture).__webglTexture=G;const H=Le.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const G=Le.get(E);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,G=0){_=E,m=B,x=G;let H=!0;if(E){const Te=Le.get(E);Te.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),H=!1):Te.__webglFramebuffer===void 0?ye.setupRenderTarget(E):Te.__hasExternalTextures&&ye.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture)}let Q=null,Se=!1,Ee=!1;if(E){const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture)&&(Ee=!0);const Ve=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Q=Ve[B],Se=!0):be.isWebGL2&&E.samples>0&&ye.useMultisampledRTT(E)===!1?Q=Le.get(E).__webglMultisampledFramebuffer:Q=Ve,C.copy(E.viewport),L.copy(E.scissor),w=E.scissorTest}else C.copy(F).multiplyScalar(O).floor(),L.copy(j).multiplyScalar(O).floor(),w=V;if(he.bindFramebuffer(36160,Q)&&be.drawBuffers&&H&&he.drawBuffers(E,Q),he.viewport(C),he.scissor(L),he.setScissorTest(w),Se){const Te=Le.get(E.texture);W.framebufferTexture2D(36160,36064,34069+B,Te.__webglTexture,G)}else if(Ee){const Te=Le.get(E.texture),Ve=B||0;W.framebufferTextureLayer(36160,36064,Te.__webglTexture,G||0,Ve)}y=-1},this.readRenderTargetPixels=function(E,B,G,H,Q,Se,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){he.bindFramebuffer(36160,Ae);try{const Te=E.texture,Ve=Te.format,De=Te.type;if(Ve!==Xn&&b.convert(Ve)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===ta&&(Ce.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(De!==Rr&&b.convert(De)!==W.getParameter(35738)&&!(De===zi&&(be.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-H&&G>=0&&G<=E.height-Q&&W.readPixels(B,G,H,Q,b.convert(Ve),b.convert(De),Se)}finally{const Te=_!==null?Le.get(_).__webglFramebuffer:null;he.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(E,B,G=0){const H=Math.pow(2,-G),Q=Math.floor(B.image.width*H),Se=Math.floor(B.image.height*H);ye.setTexture2D(B,0),W.copyTexSubImage2D(3553,G,0,0,E.x,E.y,Q,Se),he.unbindTexture()},this.copyTextureToTexture=function(E,B,G,H=0){const Q=B.image.width,Se=B.image.height,Ee=b.convert(G.format),Ae=b.convert(G.type);ye.setTexture2D(G,0),W.pixelStorei(37440,G.flipY),W.pixelStorei(37441,G.premultiplyAlpha),W.pixelStorei(3317,G.unpackAlignment),B.isDataTexture?W.texSubImage2D(3553,H,E.x,E.y,Q,Se,Ee,Ae,B.image.data):B.isCompressedTexture?W.compressedTexSubImage2D(3553,H,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Ee,B.mipmaps[0].data):W.texSubImage2D(3553,H,E.x,E.y,Ee,Ae,B.image),H===0&&G.generateMipmaps&&W.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(E,B,G,H,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=E.max.x-E.min.x+1,Ee=E.max.y-E.min.y+1,Ae=E.max.z-E.min.z+1,Te=b.convert(H.format),Ve=b.convert(H.type);let De;if(H.isData3DTexture)ye.setTexture3D(H,0),De=32879;else if(H.isDataArrayTexture)ye.setTexture2DArray(H,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,H.flipY),W.pixelStorei(37441,H.premultiplyAlpha),W.pixelStorei(3317,H.unpackAlignment);const Ie=W.getParameter(3314),tt=W.getParameter(32878),ir=W.getParameter(3316),zr=W.getParameter(3315),Or=W.getParameter(32877),On=G.isCompressedTexture?G.mipmaps[0]:G.image;W.pixelStorei(3314,On.width),W.pixelStorei(32878,On.height),W.pixelStorei(3316,E.min.x),W.pixelStorei(3315,E.min.y),W.pixelStorei(32877,E.min.z),G.isDataTexture||G.isData3DTexture?W.texSubImage3D(De,Q,B.x,B.y,B.z,Se,Ee,Ae,Te,Ve,On.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(De,Q,B.x,B.y,B.z,Se,Ee,Ae,Te,On.data)):W.texSubImage3D(De,Q,B.x,B.y,B.z,Se,Ee,Ae,Te,Ve,On),W.pixelStorei(3314,Ie),W.pixelStorei(32878,tt),W.pixelStorei(3316,ir),W.pixelStorei(3315,zr),W.pixelStorei(32877,Or),Q===0&&H.generateMipmaps&&W.generateMipmap(De),he.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ye.setTextureCube(E,0):E.isData3DTexture?ye.setTexture3D(E,0):E.isDataArrayTexture?ye.setTexture2DArray(E,0):ye.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){m=0,x=0,_=null,he.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class lT extends Mx{}lT.prototype.isWebGL1Renderer=!0;class uT extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class cT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Qd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new I;class Zl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}setX(e,n){return this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new In(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bx extends Ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let is;const ho=new I,rs=new I,ss=new I,os=new ve,po=new ve,Ex=new lt,Ka=new I,mo=new I,Ja=new I,Jm=new ve,Gc=new ve,eg=new ve;class dT extends Qt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Qn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cT(n,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new Zl(i,3,0,!1)),is.setAttribute("uv",new Zl(i,2,3,!1))}this.geometry=is,this.material=e!==void 0?e:new bx,this.center=new ve(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Ex.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-ss.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;el(Ka.set(-.5,-.5,0),ss,o,rs,r,s),el(mo.set(.5,-.5,0),ss,o,rs,r,s),el(Ja.set(.5,.5,0),ss,o,rs,r,s),Jm.set(0,0),Gc.set(1,0),eg.set(1,1);let a=e.ray.intersectTriangle(Ka,mo,Ja,!1,ho);if(a===null&&(el(mo.set(-.5,.5,0),ss,o,rs,r,s),Gc.set(0,1),a=e.ray.intersectTriangle(Ka,Ja,mo,!1,ho),a===null))return;const l=e.ray.origin.distanceTo(ho);l<e.near||l>e.far||n.push({distance:l,point:ho.clone(),uv:jn.getUV(ho,Ka,mo,Ja,Jm,Gc,eg,new ve),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function el(t,e,n,i,r,s){os.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(po.x=s*os.x-r*os.y,po.y=r*os.x+s*os.y):po.copy(os),t.copy(e),t.x+=po.x,t.y+=po.y,t.applyMatrix4(Ex)}class yl extends Yt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class na extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ix,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tx extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const tg=new lt,ng=new I,ig=new I;class fT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ng.setFromMatrixPosition(e.matrixWorld),n.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ig),n.updateMatrixWorld(),tg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tg),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n.projectionMatrix),i.multiply(n.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rg=new lt,go=new I,Wc=new I;class hT extends fT{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),go.setFromMatrixPosition(e.matrixWorld),i.position.copy(go),Wc.copy(i.position),Wc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Wc),i.updateMatrixWorld(),r.makeTranslation(-go.x,-go.y,-go.z),rg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rg)}}class pT extends Tx{constructor(e,n,i=0,r=1){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mT extends Tx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=sg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function sg(){return(typeof performance>"u"?Date:performance).now()}class og{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);function hh(t,e,n,i,r,s,o,a){const l=(h,m,x,_)=>[new ve(h/o,1-_/a),new ve(x/o,1-_/a),new ve(x/o,1-m/a),new ve(h/o,1-m/a)],u=l(e+s,n,e+i+s,n+s),c=l(e+i+s,n,e+i*2+s,n+s),d=l(e,n+s,e+s,n+s+r),f=l(e+s,n+s,e+i+s,n+s+r),g=l(e+i+s,n+s,e+i+s*2,n+r+s),v=l(e+i+s*2,n+s,e+i*2+s*2,n+r+s),p=t.attributes.uv;p.copyVector2sArray([g[3],g[2],g[0],g[1],d[3],d[2],d[0],d[1],u[3],u[2],u[0],u[1],c[0],c[1],c[3],c[2],f[3],f[2],f[0],f[1],v[3],v[2],v[0],v[1]]),p.needsUpdate=!0}function dn(t,e,n,i,r,s){hh(t,e,n,i,r,s,64,64)}function ef(t,e,n,i,r,s){hh(t,e,n,i,r,s,64,32)}class lr extends bt{constructor(e,n){super(),this.innerLayer=e,this.outerLayer=n,e.name="inner",n.name="outer"}}class gT extends bt{constructor(){super(),this.modelListeners=[],this.slim=!1,this._map=null,this.layer1Material=new na({side:Pr}),this.layer2Material=new na({side:gi,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new st(8,8,8);dn(e,0,0,8,8,8);const n=new Ge(e,this.layer1Material),i=new st(9,9,9);dn(i,32,0,8,8,8);const r=new Ge(i,this.layer2Material);this.head=new lr(n,r),this.head.name="head",this.head.add(n,r),n.position.y=4,r.position.y=4,this.add(this.head);const s=new st(8,12,4);dn(s,16,16,8,12,4);const o=new Ge(s,this.layer1Material),a=new st(8.5,12.5,4.5);dn(a,16,32,8,12,4);const l=new Ge(a,this.layer2Material);this.body=new lr(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const u=new st,c=new Ge(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{c.scale.x=this.slim?3:4,c.scale.y=12,c.scale.z=4,dn(u,40,16,this.slim?3:4,12,4)});const d=new st,f=new Ge(d,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,dn(d,40,32,this.slim?3:4,12,4)});const g=new bt;g.add(c,f),this.modelListeners.push(()=>{g.position.x=this.slim?-.5:-1}),g.position.y=-4,this.rightArm=new lr(c,f),this.rightArm.name="rightArm",this.rightArm.add(g),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const v=new st,p=new Ge(v,this.layer1MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3:4,p.scale.y=12,p.scale.z=4,dn(v,32,48,this.slim?3:4,12,4)});const h=new st,m=new Ge(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{m.scale.x=this.slim?3.5:4.5,m.scale.y=12.5,m.scale.z=4.5,dn(h,48,48,this.slim?3:4,12,4)});const x=new bt;x.add(p,m),this.modelListeners.push(()=>{x.position.x=this.slim?.5:1}),x.position.y=-4,this.leftArm=new lr(p,m),this.leftArm.name="leftArm",this.leftArm.add(x),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const _=new st(4,12,4);dn(_,0,16,4,12,4);const y=new Ge(_,this.layer1MaterialBiased),S=new st(4.5,12.5,4.5);dn(S,0,32,4,12,4);const C=new Ge(S,this.layer2MaterialBiased),L=new bt;L.add(y,C),L.position.y=-6,this.rightLeg=new lr(y,C),this.rightLeg.name="rightLeg",this.rightLeg.add(L),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const w=new st(4,12,4);dn(w,16,48,4,12,4);const A=new Ge(w,this.layer1MaterialBiased),k=new st(4.5,12.5,4.5);dn(k,0,48,4,12,4);const O=new Ge(k,this.layer2MaterialBiased),Z=new bt;Z.add(A,O),Z.position.y=-6,this.leftLeg=new lr(A,O),this.leftLeg.name="leftLeg",this.leftLeg.add(Z),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(n=>n())}getBodyParts(){return this.children.filter(e=>e instanceof lr)}setInnerLayerVisible(e){this.getBodyParts().forEach(n=>n.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(n=>n.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0)}}class vT extends bt{constructor(){super(),this.material=new na({side:gi,transparent:!0,alphaTest:1e-5});const e=new st(10,16,1);ef(e,0,0,10,16,1),this.cape=new Ge(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class xT extends bt{constructor(){super(),this.material=new na({side:gi,transparent:!0,alphaTest:1e-5});const e=new st(12,22,4);ef(e,22,0,10,20,2);const n=new Ge(e,this.material);n.position.x=-5,n.position.y=-10,n.position.z=-1,this.leftWing=new bt,this.leftWing.add(n),this.add(this.leftWing);const i=new st(12,22,4);ef(i,22,0,10,20,2);const r=new Ge(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new bt,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class _T extends bt{constructor(){super(),this.material=new na({side:Pr});const e=new st(8,8,4/3);hh(e,0,0,6,6,1,14,7),this.rightEar=new Ge(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Ge(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const ag=10.8*Math.PI/180;class yT extends bt{constructor(){super(),this.skin=new gT,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new vT,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=ag,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new xT,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new _T,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=ag,this.elytra.resetJoints()}}function tl(t){return t instanceof HTMLImageElement||t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas}function wT(t,e,n,i,r,s,o,a){const l=t.getImageData(e,n,i,r);if(a)for(let u=0;u<r;u++)for(let c=0;c<i/2;c++){const d=(c+u*i)*4,f=(i-c-1+u*i)*4,g=l.data[d],v=l.data[d+1],p=l.data[d+2],h=l.data[d+3],m=l.data[f],x=l.data[f+1],_=l.data[f+2],y=l.data[f+3];l.data[d]=m,l.data[d+1]=x,l.data[d+2]=_,l.data[d+3]=y,l.data[f]=g,l.data[f+1]=v,l.data[f+2]=p,l.data[f+3]=h}t.putImageData(l,s,o)}function tf(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=(o+a*i)*4;if(s.data[l+3]!==255)return!0}return!1}function Eu(t){return t/64}function lg(t,e,n){if(n){if(tf(t,0,0,e,e))return}else if(tf(t,0,0,e,e/2))return;const i=Eu(e),r=(s,o,a,l)=>t.clearRect(s*i,o*i,a*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),n&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function ST(t,e){const n=Eu(e),i=(r,s,o,a,l,u,c)=>wT(t,r*n,s*n,o*n,a*n,l*n,u*n,c);i(4,16,4,4,20,48,!0),i(8,16,4,4,24,48,!0),i(0,20,4,12,24,52,!0),i(4,20,4,12,20,52,!0),i(8,20,4,12,16,52,!0),i(12,20,4,12,28,52,!0),i(44,16,4,4,36,48,!0),i(48,16,4,4,40,48,!0),i(40,20,4,12,40,52,!0),i(44,20,4,12,36,52,!0),i(48,20,4,12,32,52,!0),i(52,20,4,12,44,52,!0)}function MT(t,e){let n=!1;if(e.width!==e.height)if(e.width===2*e.height)n=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=t.getContext("2d");if(n){const r=e.width;t.width=r,t.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),ST(i,r),lg(i,t.width,!1)}else t.width=e.width,t.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,t.width,t.height),lg(i,t.width,!0)}function bT(t){if(t.width===2*t.height)return t.width/64;if(t.width*17===t.height*22)return t.width/22;if(t.width*11===t.height*23)return t.width/46;throw new Error(`Bad cape size: ${t.width}x${t.height}`)}function ET(t,e){const n=bT(e);t.width=64*n,t.height=32*n;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function TT(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=(o+a*i)*4;if(!(s.data[l+0]===0&&s.data[l+1]===0&&s.data[l+2]===0&&s.data[l+3]===255))return!1}return!0}function CT(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=(o+a*i)*4;if(!(s.data[l+0]===255&&s.data[l+1]===255&&s.data[l+2]===255&&s.data[l+3]===255))return!1}return!0}function AT(t){const e=Eu(t.width),n=t.getContext("2d"),i=(a,l,u,c)=>tf(n,a*e,l*e,u*e,c*e),r=(a,l,u,c)=>TT(n,a*e,l*e,u*e,c*e),s=(a,l,u,c)=>CT(n,a*e,l*e,u*e,c*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||s(50,16,2,4)&&s(54,20,2,12)&&s(42,48,2,4)&&s(46,52,2,12)?"slim":"default"}function LT(t){if(t.width===t.height*2&&t.height%7===0)return t.height/7;throw new Error(`Bad ears size: ${t.width}x${t.height}`)}function PT(t,e){const n=LT(e);t.width=14*n,t.height=7*n;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function ug(t,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=Eu(e.width),i=14*n,r=7*n;t.width=i,t.height=r;const s=t.getContext("2d");s.clearRect(0,0,i,r),s.drawImage(e,24*n,0,i,r,0,0,i,r)}async function nl(t){const e=document.createElement("img");return new Promise((n,i)=>{e.onload=()=>n(e),e.onerror=i,e.crossOrigin="anonymous",typeof t=="string"?e.src=t:(t.crossOrigin!==void 0&&(e.crossOrigin=t.crossOrigin),t.referrerPolicy!==void 0&&(e.referrerPolicy=t.referrerPolicy),e.src=t.src)})}const cg={type:"change"},jc={type:"start"},dg={type:"end"};class RT extends Fr{constructor(e,n){super(),n===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),n===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",un),this._domElementKeyEvents=b},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cg),i.update(),s=r.NONE},this.update=function(){const b=new I,K=new Nr().setFromUnitVectors(e.up,new I(0,1,0)),le=K.clone().invert(),ie=new I,P=new Nr,re=2*Math.PI;return function(){const _e=i.object.position;b.copy(_e).sub(i.target),b.applyQuaternion(K),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&A(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ce=i.minAzimuthAngle,xe=i.maxAzimuthAngle;return isFinite(ce)&&isFinite(xe)&&(ce<-Math.PI?ce+=re:ce>Math.PI&&(ce-=re),xe<-Math.PI?xe+=re:xe>Math.PI&&(xe-=re),ce<=xe?a.theta=Math.max(ce,Math.min(xe,a.theta)):a.theta=a.theta>(ce+xe)/2?Math.max(ce,a.theta):Math.min(xe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),b.setFromSpherical(a),b.applyQuaternion(le),_e.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||ie.distanceToSquared(i.object.position)>o||8*(1-P.dot(i.object.quaternion))>o?(i.dispatchEvent(cg),ie.copy(i.object.position),P.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",$),i.domElement.removeEventListener("pointerdown",ht),i.domElement.removeEventListener("pointercancel",Zt),i.domElement.removeEventListener("wheel",ln),i.domElement.removeEventListener("pointermove",xt),i.domElement.removeEventListener("pointerup",St),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",un)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new og,l=new og;let u=1;const c=new I;let d=!1;const f=new ve,g=new ve,v=new ve,p=new ve,h=new ve,m=new ve,x=new ve,_=new ve,y=new ve,S=[],C={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function A(b){l.theta-=b}function k(b){l.phi-=b}const O=function(){const b=new I;return function(le,ie){b.setFromMatrixColumn(ie,0),b.multiplyScalar(-le),c.add(b)}}(),Z=function(){const b=new I;return function(le,ie){i.screenSpacePanning===!0?b.setFromMatrixColumn(ie,1):(b.setFromMatrixColumn(ie,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(le),c.add(b)}}(),J=function(){const b=new I;return function(le,ie){const P=i.domElement;if(i.object.isPerspectiveCamera){const re=i.object.position;b.copy(re).sub(i.target);let ne=b.length();ne*=Math.tan(i.object.fov/2*Math.PI/180),O(2*le*ne/P.clientHeight,i.object.matrix),Z(2*ie*ne/P.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(le*(i.object.right-i.object.left)/i.object.zoom/P.clientWidth,i.object.matrix),Z(ie*(i.object.top-i.object.bottom)/i.object.zoom/P.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(b){i.object.isPerspectiveCamera?u/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(b){i.object.isPerspectiveCamera?u*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(b){f.set(b.clientX,b.clientY)}function X(b){x.set(b.clientX,b.clientY)}function D(b){p.set(b.clientX,b.clientY)}function N(b){g.set(b.clientX,b.clientY),v.subVectors(g,f).multiplyScalar(i.rotateSpeed);const K=i.domElement;A(2*Math.PI*v.x/K.clientHeight),k(2*Math.PI*v.y/K.clientHeight),f.copy(g),i.update()}function z(b){_.set(b.clientX,b.clientY),y.subVectors(_,x),y.y>0?F(w()):y.y<0&&j(w()),x.copy(_),i.update()}function Y(b){h.set(b.clientX,b.clientY),m.subVectors(h,p).multiplyScalar(i.panSpeed),J(m.x,m.y),p.copy(h),i.update()}function q(b){b.deltaY<0?j(w()):b.deltaY>0&&F(w()),i.update()}function ae(b){let K=!1;switch(b.code){case i.keys.UP:J(0,i.keyPanSpeed),K=!0;break;case i.keys.BOTTOM:J(0,-i.keyPanSpeed),K=!0;break;case i.keys.LEFT:J(i.keyPanSpeed,0),K=!0;break;case i.keys.RIGHT:J(-i.keyPanSpeed,0),K=!0;break}K&&(b.preventDefault(),i.update())}function fe(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),K=.5*(S[0].pageY+S[1].pageY);f.set(b,K)}}function ge(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),K=.5*(S[0].pageY+S[1].pageY);p.set(b,K)}}function W(){const b=S[0].pageX-S[1].pageX,K=S[0].pageY-S[1].pageY,le=Math.sqrt(b*b+K*K);x.set(0,le)}function je(){i.enableZoom&&W(),i.enablePan&&ge()}function Ce(){i.enableZoom&&W(),i.enableRotate&&fe()}function be(b){if(S.length==1)g.set(b.pageX,b.pageY);else{const le=we(b),ie=.5*(b.pageX+le.x),P=.5*(b.pageY+le.y);g.set(ie,P)}v.subVectors(g,f).multiplyScalar(i.rotateSpeed);const K=i.domElement;A(2*Math.PI*v.x/K.clientHeight),k(2*Math.PI*v.y/K.clientHeight),f.copy(g)}function he(b){if(S.length===1)h.set(b.pageX,b.pageY);else{const K=we(b),le=.5*(b.pageX+K.x),ie=.5*(b.pageY+K.y);h.set(le,ie)}m.subVectors(h,p).multiplyScalar(i.panSpeed),J(m.x,m.y),p.copy(h)}function ke(b){const K=we(b),le=b.pageX-K.x,ie=b.pageY-K.y,P=Math.sqrt(le*le+ie*ie);_.set(0,P),y.set(0,Math.pow(_.y/x.y,i.zoomSpeed)),F(y.y),x.copy(_)}function Le(b){i.enableZoom&&ke(b),i.enablePan&&he(b)}function ye(b){i.enableZoom&&ke(b),i.enableRotate&&be(b)}function ht(b){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",xt),i.domElement.addEventListener("pointerup",St)),te(b),b.pointerType==="touch"?T(b):pt(b))}function xt(b){i.enabled!==!1&&(b.pointerType==="touch"?M(b):Oe(b))}function St(b){oe(b),S.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",xt),i.domElement.removeEventListener("pointerup",St)),i.dispatchEvent(dg),s=r.NONE}function Zt(b){oe(b)}function pt(b){let K;switch(b.button){case 0:K=i.mouseButtons.LEFT;break;case 1:K=i.mouseButtons.MIDDLE;break;case 2:K=i.mouseButtons.RIGHT;break;default:K=-1}switch(K){case Vr.DOLLY:if(i.enableZoom===!1)return;X(b),s=r.DOLLY;break;case Vr.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;D(b),s=r.PAN}else{if(i.enableRotate===!1)return;V(b),s=r.ROTATE}break;case Vr.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;V(b),s=r.ROTATE}else{if(i.enablePan===!1)return;D(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(jc)}function Oe(b){if(i.enabled!==!1)switch(s){case r.ROTATE:if(i.enableRotate===!1)return;N(b);break;case r.DOLLY:if(i.enableZoom===!1)return;z(b);break;case r.PAN:if(i.enablePan===!1)return;Y(b);break}}function ln(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(jc),q(b),i.dispatchEvent(dg))}function un(b){i.enabled===!1||i.enablePan===!1||ae(b)}function T(b){switch(de(b),S.length){case 1:switch(i.touches.ONE){case Hr.ROTATE:if(i.enableRotate===!1)return;fe(),s=r.TOUCH_ROTATE;break;case Hr.PAN:if(i.enablePan===!1)return;ge(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Hr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;je(),s=r.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(jc)}function M(b){switch(de(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;he(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(b),i.update();break;default:s=r.NONE}}function $(b){i.enabled!==!1&&b.preventDefault()}function te(b){S.push(b)}function oe(b){delete C[b.pointerId];for(let K=0;K<S.length;K++)if(S[K].pointerId==b.pointerId){S.splice(K,1);return}}function de(b){let K=C[b.pointerId];K===void 0&&(K=new ve,C[b.pointerId]=K),K.set(b.pageX,b.pageY)}function we(b){const K=b.pointerId===S[0].pointerId?S[1]:S[0];return C[K.pointerId]}i.domElement.addEventListener("contextmenu",$),i.domElement.addEventListener("pointerdown",ht),i.domElement.addEventListener("pointercancel",Zt),i.domElement.addEventListener("wheel",ln,{passive:!1}),this.update()}}const fg={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Tu{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const DT=new dh(-1,1,1,-1,0,1),ph=new Qn;ph.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3));ph.setAttribute("uv",new kn([0,2,0,0,2,0],2));class NT{constructor(e){this._mesh=new Ge(ph,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,DT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nf extends Tu{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof xi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hx.clone(e.uniforms),this.material=new xi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new NT(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class hg extends Tu{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class IT extends Tu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kT{constructor(e,n){if(this.renderer=e,n===void 0){const i=e.getSize(new ve);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,n=new vi(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],fg===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),nf===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new nf(fg),this.clock=new Cx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}hg!==void 0&&(o instanceof hg?i=!0:o instanceof IT&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new dh(-1,1,1,-1,0,1);const Ax=new Qn;Ax.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3));Ax.setAttribute("uv",new kn([0,2,0,0,2,0],2));class FT extends Tu{constructor(e,n,i,r,s){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const zT={uniforms:{tDiffuse:{value:null},resolution:{value:new ve(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class OT extends dT{constructor(e="",n={}){const i=new bx({transparent:!0,alphaTest:1e-5});super(i),this.textMaterial=i,this.text=e,this.font=n.font===void 0?"48px Minecraft":n.font,this.margin=n.margin===void 0?[5,10,5,10]:n.margin,this.textStyle=n.textStyle===void 0?"white":n.textStyle,this.backgroundStyle=n.backgroundStyle===void 0?"rgba(0,0,0,.25)":n.backgroundStyle,this.height=n.height===void 0?4:n.height,(n.repaintAfterLoaded===void 0?!0:n.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let n=e.getContext("2d");n.font=this.font;const i=n.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],n=e.getContext("2d"),n.font=this.font,n.fillStyle=this.backgroundStyle,n.fillRect(0,0,e.width,e.height),n.fillStyle=this.textStyle,n.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new yl(e);r.magFilter=rt,r.minFilter=rt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class UT{constructor(e={}){this.globalLight=new mT(16777215,.4),this.cameraLight=new pT(16777215,.6),this.skinTexture=null,this.capeTexture=null,this.earsTexture=null,this.backgroundTexture=null,this._disposed=!1,this._renderPaused=!1,this.autoRotate=!1,this.autoRotateSpeed=1,this._nameTag=null,this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new uT,this.camera=new tn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),this.renderer=new Mx({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let n;this.renderer.capabilities.isWebGL2&&(n=new vi(0,0,{depthTexture:new Sx(0,0,zi)})),this.composer=new kT(this.renderer,n),this.renderPass=new FT(this.scene,this.camera),this.fxaaPass=new nf(zT),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new yT,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new bt,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new RT(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Cx,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new yl(this.skinCanvas),this.skinTexture.magFilter=rt,this.skinTexture.minFilter=rt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new yl(this.capeCanvas),this.capeTexture.magFilter=rt,this.capeTexture.minFilter=rt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new yl(this.earsCanvas),this.earsTexture.magFilter=rt,this.earsTexture.minFilter=rt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,n={}){if(e===null)this.resetSkin();else if(tl(e))MT(this.skinCanvas,e),this.recreateSkinTexture(),n.model===void 0||n.model==="auto-detect"?this.playerObject.skin.modelType=AT(this.skinCanvas):this.playerObject.skin.modelType=n.model,n.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(n.ears===!0||n.ears=="load-only")&&(ug(this.earsCanvas,e),this.recreateEarsTexture(),n.ears===!0&&(this.playerObject.ears.visible=!0));else return nl(e).then(i=>this.loadSkin(i,n))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,n={}){if(e===null)this.resetCape();else if(tl(e))ET(this.capeCanvas,e),this.recreateCapeTexture(),n.makeVisible!==!1&&(this.playerObject.backEquipment=n.backEquipment===void 0?"cape":n.backEquipment);else return nl(e).then(i=>this.loadCape(i,n))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,n={}){if(e===null)this.resetEars();else if(tl(e))n.textureType==="skin"?ug(this.earsCanvas,e):PT(this.earsCanvas,e),this.recreateEarsTexture(),n.makeVisible!==!1&&(this.playerObject.ears.visible=!0);else return nl(e).then(i=>this.loadEars(i,n))}resetEars(){this.playerObject.ears.visible=!1,this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,Yl)}loadBackground(e,n){if(tl(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Yt,this.backgroundTexture.image=e,n!==void 0&&(this.backgroundTexture.mapping=n),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return nl(e).then(i=>this.loadBackground(i,n))}draw(){const e=this.clock.getDelta();this._animation!==null&&this._animation.update(this.playerObject,e),this.autoRotate&&(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new ve).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new ve).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Fe||e instanceof Yt?this.scene.background=e:this.scene.background=new Fe(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Qt||(e=new OT(e)),this.playerWrapper.add(e),e.position.y=20),this._nameTag=e}}class Lx{constructor(){this.speed=1,this.paused=!1,this.progress=0}update(e,n){if(this.paused)return;const i=n*this.speed;this.animate(e,i),this.progress+=i}}class BT extends Lx{constructor(e){super(),this.fn=e}animate(e,n){this.fn(e,this.progress,n)}}class VT extends Lx{animate(e){const n=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(n)*.03+i,e.skin.rightArm.rotation.z=Math.cos(n+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(n)*.01+r}}var pg,Px={exports:{}},vo={};/**
* @license React
* react-jsx-runtime.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/Px.exports=function(){if(pg)return vo;pg=1;var t=ft,e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(a,l,u){var c,d={},f=null,g=null;for(c in u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(g=l.ref),l)i.call(l,c)&&!s.hasOwnProperty(c)&&(d[c]=l[c]);if(a&&a.defaultProps)for(c in l=a.defaultProps)d[c]===void 0&&(d[c]=l[c]);return{$$typeof:e,type:a,key:f,ref:g,props:d,_owner:r.current}}return vo.Fragment=n,vo.jsx=o,vo.jsxs=o,vo}();var HT=Px.exports;const GT=({className:t,width:e,height:n,skinUrl:i,capeUrl:r,onReady:s,options:o})=>{const a=U.exports.useRef(),l=U.exports.useRef();return U.exports.useEffect(()=>{const u=new UT(Object.assign({canvas:a.current,width:Number(e),height:Number(n)},o));i&&u.loadSkin(i),r&&u.loadCape(r),l.current=u,s&&s({viewer:l.current,canvasRef:a.current})},[]),U.exports.useEffect(()=>{i&&l.current.loadSkin(i)},[i]),U.exports.useEffect(()=>{r&&l.current.loadCape(r)},[r]),U.exports.useEffect(()=>{l.current.setSize(Number(e),Number(n))},[e,n]),HT.jsx("canvas",{className:t,ref:a})};var Ps=void 0;const mg=4e3;new BT((t,e)=>{const i=performance.now()%mg/mg,r=Math.PI/3,s=Math.PI/8,o=Math.PI/6;if(i<.25)t.skin.rightArm.rotation.x=-i*r*4;else if(i<.5){const a=(i-.25)*4;t.skin.rightArm.rotation.x=-r,t.skin.head.rotation.yaw=s*Math.sin(Math.PI*a)}else if(i<.75)t.skin.rightArm.rotation.x=-r+(i-.5)*r*4,t.skin.head.rotation.yaw=0;else{const a=(i-.75)*4;t.skin.rightArm.rotation.x=0,t.skin.head.rotation.pitch=o*Math.sin(Math.PI*a)}});const WT=(t,e)=>{const n="https://crafatar.com/skins/",i=t.name,r=t.role,s=t.info,o=t.uuid,a=e[r],l=a?a.name:"Undefined",u=a?a.color:"#f07b0781";window.closeListenerAdded||(window.addEventListener("keydown",f=>{f.key==="Escape"&&wl()}),window.closeListenerAdded=!0);let c=()=>{const f=U.exports.useRef(null),g=v=>{f.current&&!f.current.contains(v.target)&&wl()};return U.exports.useEffect(()=>(document.addEventListener("click",g,!0),()=>{document.removeEventListener("click",g,!0)}),[]),R("div",{className:"fixed z-10 flex h-full w-full min-w-[300px] justify-center bg-[#00000027] backdrop-blur-sm",children:me("div",{ref:f,className:"relative m-auto flex max-h-[95vh] flex-col overflow-y-scroll rounded-md bg-[#46484c] p-5 pt-10 lg:flex-row",children:[R(vS,{size:35,className:"hover:text-gray absolute right-1 top-1 cursor-pointer  text-white",onClick:wl}),me("div",{className:"flex flex-col justify-center",children:[me("div",{className:"my-auto ml-5 flex flex-col",children:[R("div",{className:"flex font-bold",children:i}),R("div",{className:"text-[13px]/[12px]",style:{color:u},children:l})]}),R("hr",{className:"my-2 h-1 bg-[var(--white-color)]"}),R("div",{className:"ww-[50px] my-auto w-full",children:R(GT,{skinUrl:`${n}${o}`,capeUrl:"",height:"400",width:"250",className:"rounded-md bg-gray-400 bg-opacity-10 bg-clip-padding backdrop-blur-lg backdrop-filter",onReady:({viewer:v})=>{v.fov=70,v.zoom=.7,v.animation=new VT}})})]}),R("div",{className:"ml-0 mt-5 flex max-w-[250px] whitespace-pre-wrap rounded-md bg-[#5d5e61] p-5 lg:ml-5 lg:mt-0",children:R("div",{className:"my-auto text-center",children:s})})]})})},d=document.getElementById("info-root");Ps||(Ps=Tv(d)),Ps.render(R(c,{}))},wl=()=>{!Ps||(Ps.unmount(),Ps=void 0)},jT={open:WT,close:wl};function $T({members:t,roles:e}){const n="https://crafatar.com/renders/head/",r=((s,o)=>{const a=[];for(let l=0;l<s.length;l+=o)a.push(s.slice(l,l+o));return a})(t,5);return R("div",{className:"flex flex-wrap items-center justify-center",children:r.map((s,o)=>R("div",{className:"flex flex-wrap items-center justify-center",children:s.map(a=>{const[l,u]=U.exports.useState(!1),c=a.name,d=a.role,f=a.uuid,g=e[d],v=g?g.name:"Undefined",p=g?g.color:"#f07b0781";return me("div",{className:"relative m-2 flex w-[120px] cursor-pointer flex-col items-center rounded-md border-2 border-[#46484c] bg-[#5d5e61] transition-all duration-500 hover:text-[white]",onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)},onClick:()=>{jT.open(a,e)},style:{background:l?p:"#5d5e618d",height:l?"120px":"140px",marginBottom:l?"20px":"0"},children:[R("div",{className:"px-5 pt-3 transition-all duration-500",style:{width:l?"100px":"120px",opacity:l?"0.7":"1"},children:R("img",{src:`${n}${f}?overlay`,alt:"skin"})}),R("div",{className:"pb-2 pt-3 text-sm font-bold transition-all duration-500",style:{fontSize:l?"11px":"14px"},children:c}),R("div",{className:"absolute flex h-full w-full justify-center",children:R("div",{className:"mt-auto rounded-b-md px-2 text-sm font-bold transition-all duration-500",style:{translate:l?"0 20px":"0 0",color:l?"white":"transparent"},children:v})}),R("div",{className:"absolute flex h-full w-full justify-center",children:R("div",{className:"m-auto transition-all duration-500",style:{opacity:l?".8":"0"},children:R(gS,{size:40,color:"white"})})})]},c)})},"row-"+o))})}const $c={categories:[{category:"owner",weight:100,name:"Inhaber"},{category:"admin",weight:90,name:"Admin Team"},{category:"developer",weight:80,name:"Entwickler Team"},{category:"builder",weight:70,name:"Builder Team"},{category:"content",weight:60,name:"Content Team"},{category:"moderator",weight:50,name:"Moderations Team"},{category:"supporter",weight:40,name:"Support Team"}],roles:{owner:{name:"Inhaber",color:"#9c1515"},admin:{name:"Administrator",color:"#c21834"},developer:{name:"Entwickler",color:"#127d9e"},builder:{name:"Builder",color:"#129e41"},content:{name:"Content",color:"#b83983"},moderator:{name:"Moderator",color:"#4147d1"},supporter:{name:"Supporter",color:"#d4d10d"}},members:[{name:"Attic9",category:"owner",role:"owner",uuid:"1f241fd5-126f-446b-b77e-f80f30a74c4e",info:"Servus, Fabi spricht. Ich bin einer der Inhaber von KuchenGames.de und k\xFCmmere mich um den Developingbereich."},{name:"RedPanda",category:"owner",role:"owner",uuid:"5dc43e20-ba22-4110-89f1-e3fe00a70c3f",info:`Moinsen! Mein Name ist RedPanda. Ich bin einer der Inhaber von KuchenGames.de und leite sowohl das Builder- als auch das Designer-Team. 
Solltest du mich mit Bambus f\xFCttern, werde ich dein aller bester Freund! :D`},{name:"Thomas U.",category:"admin",role:"admin",uuid:"94d640d8-87c1-4bc1-971a-2b526906da36",info:"Beruflicher Entwickler & Hoppy Sys. Administrator. F\xFCr das was ich mache bekomme ich viel zu wenig Moneten :("},{name:"TheApexClaw",category:"admin",role:"admin",uuid:"9ed501a2-46ff-414d-820e-0e1347d52447",info:` Hai, ich bin Sabrina. Ich bin Administratorin auf dem KuchenGames Netzwerk.
Ich leite das Content- und Designerteam.`},{name:"r3dspace",category:"admin",role:"admin",uuid:"c08290a6-5187-49ec-a734-9726ca01cb30",info:`Hi \u{1F44B}\u{1F3FD}. I'm r3dspace, a system administrator based out of Germany working as an second and third level network engineer.

I create, maintain and update networks all day long.
I'm passionate about side projects and helping others improve their craft and networks.`},{name:"SMIBII",category:"developer",role:"developer",uuid:"6201b768-961e-499b-9306-ce4750d00118",info:`Hallo ich bin SMIBII,
Ich bin der coolste aus diesem Team!

Du glaubst mir nicht?
Dein pech!`},{name:"Lucifer",category:"developer",role:"developer",uuid:"a6a85419-f0d1-45f0-afa0-cb1396cfaa8f",info:`Lucifer: einst Weltherrschaftspl\xE4ne, jetzt Code-Zauberer.

Aus dem H\xF6llenschlund in Deutschland stammend, jongliert er mit Aufgaben, zaubert Plugins und Websites f\xFCr unser Minecraft-Netzwerk.
Teuflisch gut im Leiten des Entwicklerteams und im Erkennen von Entwicklertalenten.

H\xF6lle ja, er ist unser Game-Changer auf KuchenGames.de!`},{name:"GreenTiger",category:"developer",role:"developer",uuid:"bc019c8d-5c35-4e9d-a8cc-a4df565eb5ea",info:"[nothing to see here :)]"},{name:"Jessica_Melody",category:"builder",role:"builder",uuid:"c6b69659-493e-4610-96d4-2b74b06a0f74",info:`Jessica_Melody, Bautamleitung.

Baut gerne "kleine" verr\xFCckte Bauwerke. Ein Kathedr\xE4lchen ist erst der Anfang. Musik, Kunst/Architektur, wie Geschichte ist ihr Leben.`},{name:"mmp12345",category:"builder",role:"builder",uuid:"dd8ecedc-e17d-4d01-82e8-0adb12b482e1",info:"Name: Onur, Geschichte :Er ist T\xF6rke."},{name:"9xeuzin",category:"builder",role:"builder",uuid:"fa49afd3-337c-4de7-ac98-be9c68d32572",info:`Hello, I'm Will.

I'm passionate about building in Minecraft.
I've been developing this skill for almost 1 year and 6 months, and I'm studying to reach the level of a level designer.
I've had the honor of being part of studios like Null Forge and LegacyMC.
My passion for creating in Minecraft motivates me to keep learning and improving in this exciting world of virtual construction`},{name:"TheOkekw",category:"builder",role:"builder",uuid:"d74c7772-ba2c-4e7c-a647-41a786907d5f",info:`TheOkekw.
Minecraft Builder seit ca. 3 Jahren. Kann in jedem Themen Bereich bauen.`},{name:"LeEnte",category:"content",role:"content",uuid:"a44e1be9-bf47-44cf-88c4-adf0f8103409",info:"Quack!"},{name:"SchnoepelOG",category:"content",role:"content",uuid:"05cd2c18-3374-4f5e-858e-d8845ffd8b34",info:"Ich bin SchnoepelOG, Mitglied im Content- und Supporter-Team. Meine gr\xF6\xDFte Begeisterung liegt im Videoschneiden, wo ich meine kreative Ader auslebete."},{name:"Funki8988",category:"moderator",role:"moderator",uuid:"e3f8e6c3-5b35-4e30-8aa3-d5a5160c9cfd",info:`Dieses R\xE4tselhafte Wesen wurde eines Tages einfach in der Stadt entdeckt.
Niemand hat ihn seit dem mehr einen "schr\xE4gen Vogel" genannt. Daf\xFCr hat er gesorgt. Heute zaubert er einzigartige Musik f\xFCr die Maps wie zum Beispiel den Dungeon oder die Mine.
Au\xDFerdem sorgt er auf dem Server f\xFCr Recht und Ordnung - sowohl Ingame, als auch auf Discord.`},{name:"Blacky",category:"supporter",role:"supporter",uuid:"0420c3d2-c6e9-4c34-b587-47749c24e99e",info:"Blacky, die bezaubernde Supporterin auf KuchenGames.de, haucht dem Server mit ihrer tollen Stimme Leben ein und zaubert Probleme einfach weg."},{name:"Itsredzyt",category:"supporter",role:"supporter",uuid:"1d6cb936-3141-4518-b011-6e443efdb32d",info:"Keine info gegeben!"},{name:"Maurice",category:"supporter",role:"supporter",uuid:"03420c94-9130-4a8a-89be-a09a5a262f93",info:"Maurice, widmet sich dem Beruf des Fleischers!"},{name:"Maxymix",category:"supporter",role:"supporter",uuid:"3e2c38f0-0ad3-4ec6-8f94-53ca03d97805",info:"Keine info gegeben!"},{name:".Luca",category:"supporter",role:"supporter",uuid:"9b37db61-717e-41e9-82e8-f0b193f3dc53",info:"Ich bin ein Supporter von KuchenGames.de und helfe spielern, wenn sie ein Problem haben :)"},{name:"BlackUnityGamer",category:"supporter",role:"supporter",uuid:"ceb0a468-5e71-4f32-97df-e0e5c434527a",info:"Keine info gegeben!"}]};function XT(){return R(tr,{children:$c.categories.sort((t,e)=>e.weight-t.weight).map(t=>{const e=t.name,n=t.category,i=[],r=$c.roles;for(let s of $c.members)s.category===n&&i.push(s);return me("div",{className:"flex w-[100%] flex-col transition-all md:w-[80%] xl:w-[50%]",children:[R("div",{className:"flex w-full",children:R("span",{className:"relative m-2 mx-auto p-1 px-5 text-2xl font-bold before:absolute before:bottom-[-1px] before:left-[0] before:h-[1px] before:w-full before:bg-[var(--white-color)] after:absolute after:bottom-[-1px] after:left-[0] after:h-[3px] after:w-[70%] after:bg-[var(--main-color)]",children:e})}),R("div",{className:"mx-1 mb-7 mt-3 flex items-center justify-center rounded-md bg-[#ffffff1e] p-5",children:R($T,{members:i,roles:r})})]},e)})})}function qT(){return me("div",{className:"select-[var(--main-color)] flex min-h-[100vh] select-text flex-col items-center justify-center",children:[R("section",{className:"flex min-h-[60vh] w-screen flex-col items-center justify-center bg-[var(--s2-background)] p-3",children:R("div",{className:"m-2 flex w-[100%] flex-col items-center",children:R(XT,{})})}),R("section",{className:"min-h-[100px] w-screen"})]})}function YT(){return U.exports.useEffect(()=>{document.title="KuchenGames | Team"},[]),me(tr,{children:[R(mS,{}),R(qT,{})]})}function QT(){return me(tr,{children:[me(nw,{className:"min-h-[100vh]",children:[R(Yw,{}),R(Ow,{}),me(Qy,{children:[R(ml,{path:"/",element:R(pS,{})}),R(ml,{path:"/team",element:R(YT,{})}),R(ml,{path:"*",element:R(qy,{to:"/"})})," "]}),R(Xw,{}),R(eS,{})]}),R(Gd,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,theme:"dark"})]})}Xc.createRoot(document.getElementById("root")).render(R(ft.StrictMode,{children:R(QT,{})}));
