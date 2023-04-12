"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[94448],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>f});var n=l(67294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,o=function(e,t){if(null==e)return{};var l,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(l),p=o,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return l?n.createElement(f,a(a({ref:t},m),{},{components:l})):n.createElement(f,a({ref:t},m))}));function f(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=l.length,a=new Array(r);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<r;s++)a[s]=l[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},36051:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=l(83117),o=l(67294),r=l(3905);const a={id:"aml-risk-level",title:"AmlRiskLevel",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api/enums/aml-risk-level",id:"api/enums/aml-risk-level",title:"AmlRiskLevel",description:"No description",source:"@site/docs/api/enums/aml-risk-level.mdx",sourceDirName:"api/enums",slug:"/api/enums/aml-risk-level",permalink:"/docs/api/enums/aml-risk-level",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/aml-risk-level.mdx",tags:[],version:"current",frontMatter:{id:"aml-risk-level",title:"AmlRiskLevel",hide_table_of_contents:!1}},s={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AmlRiskLevel.<b>Low</b></code>",id:"code-style-fontweight-normal-amlrisklevelblowbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AmlRiskLevel.<b>Medium</b></code>",id:"code-style-fontweight-normal-amlrisklevelbmediumbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AmlRiskLevel.<b>High</b></code>",id:"code-style-fontweight-normal-amlrisklevelbhighbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AmlRiskLevel.<b>TooHigh</b></code>",id:"code-style-fontweight-normal-amlrisklevelbtoohighbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:d,SpecifiedBy:u,Badge:p},k="wrapper";function b(e){let{components:t,...l}=e;return(0,r.kt)(k,(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AmlRiskLevel {\n  Low\n  Medium\n  High\n  TooHigh\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-amlrisklevelblowbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AmlRiskLevel.",(0,r.kt)("b",null,"Low")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-amlrisklevelbmediumbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AmlRiskLevel.",(0,r.kt)("b",null,"Medium")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-amlrisklevelbhighbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AmlRiskLevel.",(0,r.kt)("b",null,"High")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-amlrisklevelbtoohighbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AmlRiskLevel.",(0,r.kt)("b",null,"TooHigh")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/project-info"},(0,r.kt)("inlineCode",{parentName:"a"},"ProjectInfo")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);