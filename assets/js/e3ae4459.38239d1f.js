"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10640:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(83117),i=n(67294),a=n(3905);const o={id:"physical-card-custom-options-input",title:"PhysicalCardCustomOptionsInput",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/inputs/physical-card-custom-options-input",id:"api-reference/inputs/physical-card-custom-options-input",title:"PhysicalCardCustomOptionsInput",description:"No description",source:"@site/docs/api-reference/inputs/physical-card-custom-options-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/physical-card-custom-options-input",permalink:"/docs/api-reference/inputs/physical-card-custom-options-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/physical-card-custom-options-input.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-custom-options-input",title:"PhysicalCardCustomOptionsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PhysicalCardCustomOptionsForPrintInput",permalink:"/docs/api-reference/inputs/physical-card-custom-options-for-print-input"},next:{title:"PrintPhysicalCardInput",permalink:"/docs/api-reference/inputs/print-physical-card-input"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardCustomOptionsInput.<b>additionalPrintedLine</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-physicalcardcustomoptionsinputbadditionalprintedlinebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:u,Badge:m},y="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input PhysicalCardCustomOptionsInput {\n  additionalPrintedLine: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-physicalcardcustomoptionsinputbadditionalprintedlinebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardCustomOptionsInput.",(0,a.kt)("b",null,"additionalPrintedLine"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Additional line to be embossed on the card. ")),(0,a.kt)("p",null,"This field will only be taken into account for custom card design that include it. (",(0,a.kt)("a",{parentName:"p",href:"https://docs.swan.io/guide/issue-cards#order-cards-with-additional-line"},"Learn More"),")"),(0,a.kt)("p",null,"Max length allowed: 26 characters.\nCharacters allowed: alphanumeric\u2019*\u2019 \u2018.\u2019 \u2018-\u2019 \u2018/\u2019 apostrophe"),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/inputs/physical-card-config-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PhysicalCardConfigInput")),"  ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);