"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[83543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||c;return n?a.createElement(m,r(r({ref:t},i),{},{components:n})):a.createElement(m,r({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<c;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25848:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>r,metadata:()=>u,toc:()=>i});var a=n(83117),o=n(67294),c=n(3905);const r={id:"account-opened-status",title:"AccountOpenedStatus",hide_table_of_contents:!1},s=void 0,u={unversionedId:"api/objects/account-opened-status",id:"api/objects/account-opened-status",title:"AccountOpenedStatus",description:"Account Opened status information",source:"@site/docs/api/objects/account-opened-status.mdx",sourceDirName:"api/objects",slug:"/api/objects/account-opened-status",permalink:"/docs/api/objects/account-opened-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/account-opened-status.mdx",tags:[],version:"current",frontMatter:{id:"account-opened-status",title:"AccountOpenedStatus",hide_table_of_contents:!1}},l={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountOpenedStatus.<b>status</b></code><Bullet /><code>AccountStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountopenedstatusbstatusbcodeaccountstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"accountstatusinfo-",level:4}],d=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:d,SpecifiedBy:p,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Account Opened status information"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountOpenedStatus implements AccountStatusInfo {\n  status: AccountStatus!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountopenedstatusbstatusbcodeaccountstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountOpenedStatus.",(0,c.kt)("b",null,"status"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/account-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountStatus!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Account status (always Opened for type AccountOpenedStatus)")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"accountstatusinfo-"},(0,c.kt)("a",{parentName:"h4",href:"/api/interfaces/account-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountStatusInfo"))," ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}b.isMDXComponent=!0}}]);