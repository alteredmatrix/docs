"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[71126],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,y=p["".concat(o,".").concat(u)]||p[u]||f[u]||s;return a?n.createElement(y,c(c({ref:t},d),{},{components:a})):n.createElement(y,c({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<s;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5989:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=a(83117),r=a(67294),s=a(3905);const c={id:"physical-card-status-info",title:"PhysicalCardStatusInfo",hide_table_of_contents:!1},i=void 0,o={unversionedId:"api-reference/interfaces/physical-card-status-info",id:"api-reference/interfaces/physical-card-status-info",title:"PhysicalCardStatusInfo",description:"Physical Card Status Information",source:"@site/docs/api-reference/interfaces/physical-card-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/physical-card-status-info",permalink:"/docs/api-reference/interfaces/physical-card-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/physical-card-status-info.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-status-info",title:"PhysicalCardStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PendingDigitalCardStatusInfo",permalink:"/docs/api-reference/interfaces/pending-digital-card-status-info"},next:{title:"Reason",permalink:"/docs/api-reference/interfaces/reason"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardStatusInfo.<b>status</b></code><Bullet /><code>PhysicalCardStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-physicalcardstatusinfobstatusbcodephysicalcardstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:f,Badge:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Physical Card Status Information"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"interface PhysicalCardStatusInfo {\n  status: PhysicalCardStatus!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusinfobstatusbcodephysicalcardstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/enums/physical-card-status"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatus!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Status of the physical card.")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCard")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-activated-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardActivatedStatusInfo")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-canceled-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardCanceledStatusInfo")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-canceling-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardCancelingStatusInfo")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-consent-pending-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardConsentPendingStatusInfo")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-processing-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardProcessingStatusInfo")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-renewed-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardRenewedStatusInfo")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-suspended-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardSuspendedStatusInfo")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-to-activate-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardToActivateStatusInfo")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);