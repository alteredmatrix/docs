"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[27363],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var c=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,c,a=function(e,n){if(null==e)return{};var t,c,a={},o=Object.keys(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=c.createContext({}),i=function(e){var n=c.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=i(e.components);return c.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.createElement(c.Fragment,{},n)}},y=c.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(t),y=a,f=p["".concat(l,".").concat(y)]||p[y]||u[y]||o;return t?c.createElement(f,r(r({ref:n},d),{},{components:t})):c.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var i=2;i<o;i++)r[i]=t[i];return c.createElement.apply(null,r)}return c.createElement.apply(null,t)}y.displayName="MDXCreateElement"},76991:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var c=t(83117),a=t(67294),o=t(3905);const r={id:"cancel-consent-success-payload",title:"CancelConsentSuccessPayload",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/cancel-consent-success-payload",id:"api-reference/objects/cancel-consent-success-payload",title:"CancelConsentSuccessPayload",description:"Success payload of the cancelConsent mutation",source:"@site/docs/api-reference/objects/cancel-consent-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/cancel-consent-success-payload",permalink:"/docs/api-reference/objects/cancel-consent-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/cancel-consent-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-consent-success-payload",title:"CancelConsentSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelCardSuccessPayload",permalink:"/docs/api-reference/objects/cancel-card-success-payload"},next:{title:"CancelDigitalCardSuccessPayload",permalink:"/docs/api-reference/objects/cancel-digital-card-success-payload"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelConsentSuccessPayload.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cancelconsentsuccesspayloadbconsentbcodeconsent--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:u,Badge:y},m="wrapper";function b(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,c.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Success payload of the ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelConsent")," mutation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelConsentSuccessPayload {\n  consent: Consent!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cancelconsentsuccesspayloadbconsentbcodeconsent--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CancelConsentSuccessPayload.",(0,o.kt)("b",null,"consent"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent"},(0,o.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/cancel-consent-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CancelConsentPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);