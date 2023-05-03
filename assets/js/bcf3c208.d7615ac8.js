"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12224:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(83117),i=r(67294),a=r(3905);const o={id:"skip",title:"skip",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/directives/skip",id:"api-reference/directives/skip",title:"skip",description:"Directs the executor to skip this field or fragment when the if argument is true.",source:"@site/docs/api-reference/directives/skip.mdx",sourceDirName:"api-reference/directives",slug:"/api-reference/directives/skip",permalink:"/docs/api-reference/directives/skip",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/directives/skip.mdx",tags:[],version:"current",frontMatter:{id:"skip",title:"skip",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"include",permalink:"/docs/api-reference/directives/include"},next:{title:"specifiedBy",permalink:"/docs/api-reference/directives/specified-by"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>skip.<b>if</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-skipbifbcodeboolean--",level:4}],d=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:u,Badge:f},k="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Directs the executor to skip this field or fragment when the ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," argument is true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @skip(\n  if: Boolean!\n) on \n  | FIELD\n  | FRAGMENT_SPREAD\n  | INLINE_FRAGMENT\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-skipbifbcodeboolean--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"skip.",(0,a.kt)("b",null,"if"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Skipped when true.")))}y.isMDXComponent=!0}}]);