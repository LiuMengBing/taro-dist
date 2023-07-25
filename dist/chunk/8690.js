/*! For license information please see 8690.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[8690],{"45177":function(e,t,n){n.d(t,{"Z":function(){return d}});var r=n(82163),o=n(6676),a=n(97150),s=n(77483),l=n(26380),i=n(21065),p=n(38036),c=n(66658),d=function(e){(0,a.Z)(ComponentState,e);var t=(0,s.Z)(ComponentState);function ComponentState(){return(0,r.Z)(this,ComponentState),t.apply(this,arguments)}return(0,o.Z)(ComponentState,[{"key":"render","value":function render(){return(0,c.jsxs)(p.View,{"className":"page-state","children":[(0,c.jsxs)(p.View,{"className":"page-state-platform","children":["组件类型：",this.props.platform]}),(0,c.jsxs)(p.View,{"className":"page-state-rate","children":["适配进度：",this.props.rate,"%"]})]})}}]),ComponentState}(i.Component);(0,l.Z)(d,"options",{"addGlobalClass":!0})},"74565":function(e,t,n){n.d(t,{"Z":function(){return d}});var r=n(82163),o=n(6676),a=n(97150),s=n(77483),l=n(26380),i=n(21065),p=n(38036),c=n(66658),d=function(e){(0,a.Z)(Header,e);var t=(0,s.Z)(Header);function Header(){return(0,r.Z)(this,Header),t.apply(this,arguments)}return(0,o.Z)(Header,[{"key":"render","value":function render(){return(0,c.jsxs)(p.View,{"className":"page-head","children":[(0,c.jsx)(p.View,{"className":"page-head-title","children":this.props.title}),(0,c.jsx)(p.View,{"className":"page-head-line"}),this.props.desc?(0,c.jsx)(p.View,{"className":"page-head-desc","children":this.props.desc}):null]})}}]),Header}(i.Component);(0,l.Z)(d,"options",{"addGlobalClass":!0})},"98690":function(e,t,n){n.r(t),n.d(t,{"default":function(){return PageView}});var r=n(38036),o=n(44133),a=(n(21065),n(74565)),s=n(45177),l=n(66658);function PageView(){return o.ZP.useLoad((function(){console.log("Page loaded.")})),(0,l.jsxs)(r.View,{"className":"components-page","children":[(0,l.jsxs)(r.View,{"className":"components-page__header","children":[(0,l.jsx)(a.Z,{"title":"RootPortal"}),(0,l.jsx)(s.Z,{"platform":"H5","rate":"100","children":" "})]}),(0,l.jsxs)(r.RootPortal,{"enable":!1,"style":{"position":"absolute","background":"#212121","width":"80%","left":"10%","top":"50%","borderRadius":"20px","display":"flex","flexDirection":"column"},"children":[(0,l.jsx)(r.Text,{"children":"Hello RootPortal!"}),(0,l.jsx)(r.Text,{"children":"Hello RootPortal!"})]})]})}},"1834":function(e,t,n){var r=n(21065),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var r,a={},p=null,c=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{"$$typeof":o,"type":e,"key":p,"ref":c,"props":a,"_owner":l.current}}t.jsx=q,t.jsxs=q},"66658":function(e,t,n){e.exports=n(1834)}}]);