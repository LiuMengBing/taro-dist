/*! For license information please see 5578.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5578],{"95578":function(e,n,t){t.r(n),t.d(n,{"default":function(){return y}});var o=t(82163),c=t(6676),s=t(65599),u=t(97150),f=t(77483),l=t(26380),r=t(21065),i=t(27442),a=t(34465),p=t(38036),d=t(66658),y=function(e){(0,u.Z)(Index,e);var n=(0,f.Z)(Index);function Index(){var e;(0,o.Z)(this,Index);for(var t=arguments.length,c=new Array(t),u=0;u<t;u++)c[u]=arguments[u];return e=n.call.apply(n,[this].concat(c)),(0,l.Z)((0,s.Z)(e),"state",{"list":[{"id":"openSystemBluetoothSetting","func":null},{"id":"openAppAuthorizeSetting","func":function func(){(0,i.nJ)({"success":function success(e){console.log("success-----",e)}})}},{"id":"getWindowInfo","func":null},{"id":"getSystemSetting","func":function func(){var e=(0,i.FE)();(0,a.CF)({"title":"success"}),console.log("success",e)}},{"id":"getSystemInfoSync","func":function func(){try{var e=(0,i.xI)();console.log("getSystemInfoSync success ",e)}catch(e){console.log("getSystemInfoSync exception")}}},{"id":"getSystemInfoAsync","func":null},{"id":"getSystemInfo","func":function func(){(0,i.So)({"success":function success(e){console.log("getSystemInfo success ",e)},"fail":function fail(e){console.log("getSystemInfo fail ",e)},"complete":function complete(e){console.log("getSystemInfo complete ",e)}})}},{"id":"getDeviceInfo","func":null},{"id":"getAppBaseInfo","func":null},{"id":"getAppAuthorizeSetting","func":null}]}),e}return(0,c.Z)(Index,[{"key":"render","value":function render(){return(0,d.jsx)(p.View,{"className":"api-page","children":this.state.list.map((function(e){return(0,d.jsxs)(p.Button,{"className":"api-page-btn","type":"primary","onClick":null==e.func?function(){}:e.func,"children":[e.id,null==e.func&&(0,d.jsx)(p.Text,{"className":"navigator-state tag","children":"未创建Demo"})]})}))})}}]),Index}(r.Component)},"1834":function(e,n,t){var o=t(21065),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,t){var o,s={},r=null,i=null;for(o in void 0!==t&&(r=""+t),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(i=n.ref),n)u.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{"$$typeof":c,"type":e,"key":r,"ref":i,"props":s,"_owner":f.current}}n.jsx=q,n.jsxs=q},"66658":function(e,n,t){e.exports=t(1834)}}]);