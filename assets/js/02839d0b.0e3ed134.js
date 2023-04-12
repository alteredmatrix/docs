"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[27903],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)o=c[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)o=c[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(o),y=n,m=p["".concat(d,".").concat(y)]||p[y]||i[y]||c;return o?a.createElement(m,r(r({ref:t},u),{},{components:o})):a.createElement(m,r({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,r=new Array(c);r[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var s=2;s<c;s++)r[s]=o[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}y.displayName="MDXCreateElement"},25698:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>i,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=o(83117),n=o(67294),c=o(3905);const r={id:"update-account-holder-success-payload",title:"UpdateAccountHolderSuccessPayload",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api/objects/update-account-holder-success-payload",id:"api/objects/update-account-holder-success-payload",title:"UpdateAccountHolderSuccessPayload",description:"No description",source:"@site/docs/api/objects/update-account-holder-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/update-account-holder-success-payload",permalink:"/docs/api/objects/update-account-holder-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/update-account-holder-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-account-holder-success-payload",title:"UpdateAccountHolderSuccessPayload",hide_table_of_contents:!1}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateAccountHolderSuccessPayload.<b>accountHolder</b></code><Bullet /><code>AccountHolder!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updateaccountholdersuccesspayloadbaccountholderbcodeaccountholder--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,c.kt)(n.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:p,SpecifiedBy:i,Badge:y},f="wrapper";function b(e){let{components:t,...o}=e;return(0,c.kt)(f,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateAccountHolderSuccessPayload {\n  accountHolder: AccountHolder!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-updateaccountholdersuccesspayloadbaccountholderbcodeaccountholder--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"UpdateAccountHolderSuccessPayload.",(0,c.kt)("b",null,"accountHolder"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/account-holder"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountHolder!"))," ",(0,c.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/unions/update-account-holder-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"UpdateAccountHolderPayload")),"  ",(0,c.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);