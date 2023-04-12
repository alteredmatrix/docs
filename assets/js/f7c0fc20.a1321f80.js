"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,c(c({ref:t},u),{},{components:n})):a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90224:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=n(83117),r=n(67294),o=n(3905);const c={id:"account-filter-input",title:"AccountFilterInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api/inputs/account-filter-input",id:"api/inputs/account-filter-input",title:"AccountFilterInput",description:"No description",source:"@site/docs/api/inputs/account-filter-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/account-filter-input",permalink:"/docs/api/inputs/account-filter-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/account-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"account-filter-input",title:"AccountFilterInput",hide_table_of_contents:!1}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountFilterInput.<b>status</b></code><Bullet /><code>[AccountStatus!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountfilterinputbstatusbcodeaccountstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountFilterInput.<b>paymentLevels</b></code><Bullet /><code>[PaymentLevel!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountfilterinputbpaymentlevelsbcodepaymentlevel--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountFilterInput.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountfilterinputbsearchbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:p,SpecifiedBy:d,Badge:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input AccountFilterInput {\n  status: [AccountStatus!]\n  paymentLevels: [PaymentLevel!]\n  search: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountfilterinputbstatusbcodeaccountstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountFilterInput.",(0,o.kt)("b",null,"status"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/account-status"},(0,o.kt)("inlineCode",{parentName:"a"},"[AccountStatus!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account Status we want to filter on")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountfilterinputbpaymentlevelsbcodepaymentlevel--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountFilterInput.",(0,o.kt)("b",null,"paymentLevels"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/payment-level"},(0,o.kt)("inlineCode",{parentName:"a"},"[PaymentLevel!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account Payment Levels we want to filter on")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountfilterinputbsearchbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountFilterInput.",(0,o.kt)("b",null,"search"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Searches name, account number, and IBAN")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/queries/accounts"},(0,o.kt)("inlineCode",{parentName:"a"},"accounts")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);