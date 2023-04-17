"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),o=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=o(n),p=a,m=u["".concat(c,".").concat(p)]||u[p]||g[p]||s;return n?i.createElement(m,r(r({ref:t},l),{},{components:n})):i.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:a,r[1]=d;for(var o=2;o<s;o++)r[o]=n[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19661:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(83117),a=n(67294),s=n(3905);const r={id:"add-funding-limit-settings-change-request-success-payload",title:"AddFundingLimitSettingsChangeRequestSuccessPayload",hide_table_of_contents:!1},d=void 0,c={unversionedId:"api/objects/add-funding-limit-settings-change-request-success-payload",id:"api/objects/add-funding-limit-settings-change-request-success-payload",title:"AddFundingLimitSettingsChangeRequestSuccessPayload",description:"Add Funding Limit Settings Change Request Success Payload",source:"@site/docs/api/objects/add-funding-limit-settings-change-request-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/add-funding-limit-settings-change-request-success-payload",permalink:"/docs/api/objects/add-funding-limit-settings-change-request-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/add-funding-limit-settings-change-request-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-funding-limit-settings-change-request-success-payload",title:"AddFundingLimitSettingsChangeRequestSuccessPayload",hide_table_of_contents:!1}},o={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestSuccessPayload.<b>fundingLimitSettingsChangeRequest</b></code><Bullet /><code>FundingLimitSettingsChangeRequest!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestsuccesspayloadbfundinglimitsettingschangerequestbcodefundinglimitsettingschangerequest--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:u,SpecifiedBy:g,Badge:p},f="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(f,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Add Funding Limit Settings Change Request Success Payload"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddFundingLimitSettingsChangeRequestSuccessPayload {\n  fundingLimitSettingsChangeRequest: FundingLimitSettingsChangeRequest!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestsuccesspayloadbfundinglimitsettingschangerequestbcodefundinglimitsettingschangerequest--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestSuccessPayload.",(0,s.kt)("b",null,"fundingLimitSettingsChangeRequest"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/funding-limit-settings-change-request"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequest!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The new request for funding limit settings change")),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api/unions/add-funding-limit-settings-change-request-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"AddFundingLimitSettingsChangeRequestPayload")),"  ",(0,s.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);