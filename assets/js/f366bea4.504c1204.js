"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31365:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(83117),a=r(67294),c=r(3905);const o={id:"currency",title:"Currency",hide_table_of_contents:!1},l=void 0,p={unversionedId:"api/scalars/currency",id:"api/scalars/currency",title:"Currency",description:"currency code alpha 3 (ISO 4217)",source:"@site/docs/api/scalars/currency.mdx",sourceDirName:"api/scalars",slug:"/api/scalars/currency",permalink:"/docs/api/scalars/currency",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/scalars/currency.mdx",tags:[],version:"current",frontMatter:{id:"currency",title:"Currency",hide_table_of_contents:!1}},i={},s=[{value:"Member of",id:"member-of",level:3}],u=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:d,Badge:m},f="wrapper";function k(e){let{components:t,...r}=e;return(0,c.kt)(f,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"currency code alpha 3 (ISO 4217)"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Currency\n")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/inputs/add-external-account-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AddExternalAccountInput")),"  ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/amount"},(0,c.kt)("inlineCode",{parentName:"a"},"Amount")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/inputs/amount-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AmountInput")),"  ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/card"},(0,c.kt)("inlineCode",{parentName:"a"},"Card")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/external-account"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccount")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/report-exchange-rate"},(0,c.kt)("inlineCode",{parentName:"a"},"ReportExchangeRate")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);