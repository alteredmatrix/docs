"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||c;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17859:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(83117),a=r(67294),c=r(3905);const o={id:"account-membership",title:"accountMembership",hide_table_of_contents:!1},i=void 0,s={unversionedId:"api-reference/queries/account-membership",id:"api-reference/queries/account-membership",title:"accountMembership",description:"Returns an account membership from its id.",source:"@site/docs/api-reference/queries/account-membership.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/account-membership",permalink:"/docs/api-reference/queries/account-membership",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/account-membership.mdx",tags:[],version:"current",frontMatter:{id:"account-membership",title:"accountMembership",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"accountInvoice",permalink:"/docs/api-reference/queries/account-invoice"},next:{title:"accountMemberships",permalink:"/docs/api-reference/queries/account-memberships"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>accountMembership.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipbidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AccountMembership</code> <Badge class="secondary" text="object"/>',id:"accountmembership-",level:4}],u=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:m,Badge:d},b="wrapper";function h(e){let{components:t,...r}=e;return(0,c.kt)(b,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Returns an account membership from its id."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"accountMembership(\n  id: ID!\n): AccountMembership\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipbidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"accountMembership.",(0,c.kt)("b",null,"id"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"accountmembership-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-membership"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembership"))," ",(0,c.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"An account membership represents the rights of a user for a given account.")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Each account is administered by an account membership having the capacity of legal representative. He has the possibility of delegating rights on this account to other users.")),(0,c.kt)("blockquote",null))}h.isMDXComponent=!0}}]);