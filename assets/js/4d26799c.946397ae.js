"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[95539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73133:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(83117),o=a(67294),r=a(3905);const i={id:"authorization-type",title:"AuthorizationType",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api/enums/authorization-type",id:"api/enums/authorization-type",title:"AuthorizationType",description:"Type of the card authorization transaction",source:"@site/docs/api/enums/authorization-type.mdx",sourceDirName:"api/enums",slug:"/api/enums/authorization-type",permalink:"/docs/api/enums/authorization-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/authorization-type.mdx",tags:[],version:"current",frontMatter:{id:"authorization-type",title:"AuthorizationType",hide_table_of_contents:!1}},u={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AuthorizationType.<b>Classic</b></code>",id:"code-style-fontweight-normal-authorizationtypebclassicbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AuthorizationType.<b>PreAuthorization</b></code>",id:"code-style-fontweight-normal-authorizationtypebpreauthorizationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AuthorizationType.<b>DataRequest</b></code>",id:"code-style-fontweight-normal-authorizationtypebdatarequestbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:d,Badge:h},y="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Type of the card authorization transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AuthorizationType {\n  Classic\n  PreAuthorization\n  DataRequest\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-authorizationtypebclassicbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AuthorizationType.",(0,r.kt)("b",null,"Classic")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Classic authorization, nominal use-case, in order to hold the amount in the available balance that will be debited in the following days")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-authorizationtypebpreauthorizationbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AuthorizationType.",(0,r.kt)("b",null,"PreAuthorization")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pre-authorization.\nUsually an authorization in order to hold the amount in the available balance that will be updated in a second time with the final amount (gaz station, car rent, etc)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-authorizationtypebdatarequestbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AuthorizationType.",(0,r.kt)("b",null,"DataRequest")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Usually an authorization used by a merchant to verify if the card exists and can successfully receive a future authorization")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/card-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);