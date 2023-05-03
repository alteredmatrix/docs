"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[5647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18797:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(83117),o=n(67294),a=n(3905);const s={id:"update-user-consent-settings-token-rejection",title:"UpdateUserConsentSettingsTokenRejection",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/update-user-consent-settings-token-rejection",id:"api-reference/objects/update-user-consent-settings-token-rejection",title:"UpdateUserConsentSettingsTokenRejection",description:"No description",source:"@site/docs/api-reference/objects/update-user-consent-settings-token-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/update-user-consent-settings-token-rejection",permalink:"/docs/api-reference/objects/update-user-consent-settings-token-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/update-user-consent-settings-token-rejection.mdx",tags:[],version:"current",frontMatter:{id:"update-user-consent-settings-token-rejection",title:"UpdateUserConsentSettingsTokenRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateUserConsentSettingsSuccessPayload",permalink:"/docs/api-reference/objects/update-user-consent-settings-success-payload"},next:{title:"UserConnection",permalink:"/docs/api-reference/objects/user-connection"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUserConsentSettingsTokenRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserconsentsettingstokenrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateUserConsentSettingsTokenRejection implements Rejection {\n  message: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updateuserconsentsettingstokenrejectionbmessagebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UpdateUserConsentSettingsTokenRejection.",(0,a.kt)("b",null,"message"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"rejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,a.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/unions/update-user-consent-settings-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateUserConsentSettingsPayload")),"  ",(0,a.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);