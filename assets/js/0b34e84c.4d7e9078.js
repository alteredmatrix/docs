"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41772],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=o(a),y=n,g=p["".concat(l,".").concat(y)]||p[y]||u[y]||d;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,i=new Array(d);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var o=2;o<d;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},73841:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(83117),n=a(67294),d=a(3905);const i={id:"add-digital-card-success-payload",title:"AddDigitalCardSuccessPayload",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/objects/add-digital-card-success-payload",id:"api-reference/objects/add-digital-card-success-payload",title:"AddDigitalCardSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/add-digital-card-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/add-digital-card-success-payload",permalink:"/docs/api-reference/objects/add-digital-card-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/add-digital-card-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-digital-card-success-payload",title:"AddDigitalCardSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddCardsWithGroupDeliverySuccessPayload",permalink:"/docs/api-reference/objects/add-cards-with-group-delivery-success-payload"},next:{title:"AddDirectDebitFundingSourceSuccessPayload",permalink:"/docs/api-reference/objects/add-direct-debit-funding-source-success-payload"}},o={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddDigitalCardSuccessPayload.<b>digitalCard</b></code><Bullet /><code>PendingDigitalCard!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-adddigitalcardsuccesspayloadbdigitalcardbcodependingdigitalcard--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:p,SpecifiedBy:u,Badge:y},f="wrapper";function m(e){let{components:t,...a}=e;return(0,d.kt)(f,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddDigitalCardSuccessPayload {\n  digitalCard: PendingDigitalCard!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-adddigitalcardsuccesspayloadbdigitalcardbcodependingdigitalcard--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddDigitalCardSuccessPayload.",(0,d.kt)("b",null,"digitalCard"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/objects/pending-digital-card"},(0,d.kt)("inlineCode",{parentName:"a"},"PendingDigitalCard!"))," ",(0,d.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Digital Card used for ApplePay or GooglePay")),(0,d.kt)("p",null,"The consent can be found in the digital card status information."),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-digital-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddDigitalCardPayload")),"  ",(0,d.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);