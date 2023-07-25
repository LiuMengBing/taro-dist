/*! For license information please see 6554.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6554],{"45177":function(e,t,n){n.d(t,{"Z":function(){return u}});var r=n(82163),s=n(6676),a=n(97150),i=n(77483),o=n(26380),l=n(21065),c=n(38036),p=n(66658),u=function(e){(0,a.Z)(ComponentState,e);var t=(0,i.Z)(ComponentState);function ComponentState(){return(0,r.Z)(this,ComponentState),t.apply(this,arguments)}return(0,s.Z)(ComponentState,[{"key":"render","value":function render(){return(0,p.jsxs)(c.View,{"className":"page-state","children":[(0,p.jsxs)(c.View,{"className":"page-state-platform","children":["组件类型：",this.props.platform]}),(0,p.jsxs)(c.View,{"className":"page-state-rate","children":["适配进度：",this.props.rate,"%"]})]})}}]),ComponentState}(l.Component);(0,o.Z)(u,"options",{"addGlobalClass":!0})},"74565":function(e,t,n){n.d(t,{"Z":function(){return u}});var r=n(82163),s=n(6676),a=n(97150),i=n(77483),o=n(26380),l=n(21065),c=n(38036),p=n(66658),u=function(e){(0,a.Z)(Header,e);var t=(0,i.Z)(Header);function Header(){return(0,r.Z)(this,Header),t.apply(this,arguments)}return(0,s.Z)(Header,[{"key":"render","value":function render(){return(0,p.jsxs)(c.View,{"className":"page-head","children":[(0,p.jsx)(c.View,{"className":"page-head-title","children":this.props.title}),(0,p.jsx)(c.View,{"className":"page-head-line"}),this.props.desc?(0,p.jsx)(c.View,{"className":"page-head-desc","children":this.props.desc}):null]})}}]),Header}(l.Component);(0,o.Z)(u,"options",{"addGlobalClass":!0})},"96554":function(e,t,n){n.r(t),n.d(t,{"default":function(){return f}});var r=n(82163),s=n(6676),a=n(65599),i=n(97150),o=n(77483),l=n(26380),c=n(21065),p=n(38036),u=n(74565),h=n(45177),d=n(66658),f=function(e){(0,i.Z)(Picks,e);var t=(0,o.Z)(Picks);function Picks(){var e;(0,r.Z)(this,Picks),e=t.apply(this,arguments),(0,l.Z)((0,a.Z)(e),"onChange",(function(t){var n=t.detail.value;e.setState({"year":e.state.years[n[0]],"month":e.state.months[n[1]],"day":e.state.days[n[2]],"value":n})}));for(var n=new Date,s=[],i=[],o=[],c=1990;c<=n.getFullYear();c++)s.push(c);for(var p=1;p<=12;p++)i.push(p);for(var u=1;u<=31;u++)o.push(u);return e.state={"years":s,"year":n.getFullYear(),"months":i,"month":2,"days":o,"day":2,"value":[9999,1,1]},e}return(0,s.Z)(Picks,[{"key":"render","value":function render(){return(0,d.jsxs)(p.View,{"className":"components-page","children":[(0,d.jsxs)(p.View,{"className":"components-page__header","children":[(0,d.jsx)(u.Z,{"title":"PickerView"}),(0,d.jsx)(h.Z,{"platform":"H5","rate":"100","children":" "})]}),(0,d.jsxs)(p.View,{"children":[this.state.year,"年",this.state.month,"月",this.state.day,"日"]}),(0,d.jsxs)(p.PickerView,{"indicatorStyle":"height: 50px;","style":"width: 100%; height: 300px;","value":this.state.value,"onChange":this.onChange,"children":[(0,d.jsx)(p.PickerViewColumn,{"children":this.state.years.map((function(e){return(0,d.jsxs)(p.View,{"children":[e,"年"]})}))}),(0,d.jsx)(p.PickerViewColumn,{"children":this.state.months.map((function(e){return(0,d.jsxs)(p.View,{"children":[e,"月"]})}))}),(0,d.jsx)(p.PickerViewColumn,{"children":this.state.days.map((function(e){return(0,d.jsxs)(p.View,{"children":[e,"日"]})}))})]})]})}}]),Picks}(c.Component)},"1834":function(e,t,n){var r=n(21065),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var r,a={},c=null,p=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{"$$typeof":s,"type":e,"key":c,"ref":p,"props":a,"_owner":o.current}}t.jsx=q,t.jsxs=q},"66658":function(e,t,n){e.exports=n(1834)}}]);