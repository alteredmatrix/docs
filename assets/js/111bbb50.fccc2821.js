"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[35847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,u=p["".concat(s,".").concat(g)]||p[g]||b[g]||a;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74549:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(83117),r=n(67294),a=n(3905);const i={id:"onboardings",title:"onboardings",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api/queries/onboardings",id:"api/queries/onboardings",title:"onboardings",description:"Returns the list of onboardings.",source:"@site/docs/api/queries/onboardings.mdx",sourceDirName:"api/queries",slug:"/api/queries/onboardings",permalink:"/docs/api/queries/onboardings",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/queries/onboardings.mdx",tags:[],version:"current",frontMatter:{id:"onboardings",title:"onboardings",hide_table_of_contents:!1}},d={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>onboardings.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>onboardings.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingsbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>onboardings.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingsbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>onboardings.<b>filters</b></code><Bullet /><code>OnboardingFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onboardingsbfiltersbcodeonboardingfiltersinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>onboardings.<b>orderBy</b></code><Bullet /><code>OnboardingOrderByInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onboardingsborderbybcodeonboardingorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>OnboardingConnection</code> <Badge class="secondary" text="object"/>',id:"onboardingconnection-",level:4}],p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:c,Bullet:p,SpecifiedBy:b,Badge:g},f="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns the list of onboardings."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This query is restricted to a Project access token (",(0,a.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"onboardings(\n  first: Int! = 50\n  before: String\n  after: String\n  filters: OnboardingFiltersInput\n  orderBy: OnboardingOrderByInput\n): OnboardingConnection!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingsbfirstbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"onboardings.",(0,a.kt)("b",null,"first"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingsbbeforebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"onboardings.",(0,a.kt)("b",null,"before"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingsbafterbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"onboardings.",(0,a.kt)("b",null,"after"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingsbfiltersbcodeonboardingfiltersinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"onboardings.",(0,a.kt)("b",null,"filters"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/onboarding-filters-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingFiltersInput"))," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingsborderbybcodeonboardingorderbyinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"onboardings.",(0,a.kt)("b",null,"orderBy"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/onboarding-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingOrderByInput"))," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"onboardingconnection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/onboarding-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingConnection"))," ",(0,a.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Implements the Relay Connection interface, used to paginate list of element (",(0,a.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")))}m.isMDXComponent=!0}}]);