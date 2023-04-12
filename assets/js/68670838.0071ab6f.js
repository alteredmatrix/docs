"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[55847],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>y});var c=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,c,a=function(e,n){if(null==e)return{};var t,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=c.createContext({}),u=function(e){var n=c.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=u(e.components);return c.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.createElement(c.Fragment,{},n)}},f=c.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return t?c.createElement(y,o(o({ref:n},i),{},{components:t})):c.createElement(y,o({ref:n},i))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return c.createElement.apply(null,o)}return c.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26785:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var c=t(83117),a=t(67294),r=t(3905);const o={id:"cancel-funding-source-success-payload",title:"CancelFundingSourceSuccessPayload",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api/objects/cancel-funding-source-success-payload",id:"api/objects/cancel-funding-source-success-payload",title:"CancelFundingSourceSuccessPayload",description:"Cancel Funding Source Success Payload",source:"@site/docs/api/objects/cancel-funding-source-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/cancel-funding-source-success-payload",permalink:"/docs/api/objects/cancel-funding-source-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/cancel-funding-source-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-funding-source-success-payload",title:"CancelFundingSourceSuccessPayload",hide_table_of_contents:!1}},u={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelFundingSourceSuccessPayload.<b>fundingSource</b></code><Bullet /><code>FundingSource</code> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-cancelfundingsourcesuccesspayloadbfundingsourcebcodefundingsource-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],d=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:d,SpecifiedBy:p,Badge:f},g="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,c.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cancel Funding Source Success Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelFundingSourceSuccessPayload {\n  fundingSource: FundingSource\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cancelfundingsourcesuccesspayloadbfundingsourcebcodefundingsource-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CancelFundingSourceSuccessPayload.",(0,r.kt)("b",null,"fundingSource"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/funding-source"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingSource"))," ",(0,r.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Canceled Funding Source")),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/unions/cancel-funding-source-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CancelFundingSourcePayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);