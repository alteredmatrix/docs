"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),g=o,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},55072:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(83117),o=a(67294),r=a(3905);const i={id:"capital-deposit-case-edge",title:"CapitalDepositCaseEdge",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api/objects/capital-deposit-case-edge",id:"api/objects/capital-deposit-case-edge",title:"CapitalDepositCaseEdge",description:"Implements the Relay Edge interface",source:"@site/docs/api/objects/capital-deposit-case-edge.mdx",sourceDirName:"api/objects",slug:"/api/objects/capital-deposit-case-edge",permalink:"/docs/api/objects/capital-deposit-case-edge",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/capital-deposit-case-edge.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case-edge",title:"CapitalDepositCaseEdge",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcaseedgebcursorbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseEdge.<b>node</b></code><Bullet /><code>CapitalDepositCase!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-capitaldepositcaseedgebnodebcodecapitaldepositcase--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="secondary" text="interface"/>',id:"edge-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:g},f="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Implements the Relay Edge interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CapitalDepositCaseEdge implements Edge {\n  cursor: String!\n  node: CapitalDepositCase!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseedgebcursorbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseEdge.",(0,r.kt)("b",null,"cursor"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Opaque identifier pointing to this capital deposit case node in the pagination mechanism")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseedgebnodebcodecapitaldepositcase--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseEdge.",(0,r.kt)("b",null,"node"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/capital-deposit-case"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositCase!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The CapitalDepositCase")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"edge-"},(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/edge"},(0,r.kt)("inlineCode",{parentName:"a"},"Edge"))," ",(0,r.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/capital-deposit-case-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseConnection")),"  ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);