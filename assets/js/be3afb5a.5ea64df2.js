"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54630],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||d;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,o=new Array(d);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<d;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69372:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(83117),r=a(67294),d=a(3905);const o={id:"add-cards",title:"addCards",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api/mutations/add-cards",id:"api/mutations/add-cards",title:"addCards",description:"Add several cards",source:"@site/docs/api/mutations/add-cards.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/add-cards",permalink:"/docs/api/mutations/add-cards",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/mutations/add-cards.mdx",tags:[],version:"current",frontMatter:{id:"add-cards",title:"addCards",hide_table_of_contents:!1}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addCards.<b>input</b></code><Bullet /><code>AddCardsInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addcardsbinputbcodeaddcardsinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddCardsPayload</code> <Badge class="secondary" text="union"/>',id:"addcardspayload-",level:4}],p=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:p,SpecifiedBy:u,Badge:m},y="wrapper";function g(e){let{components:t,...a}=e;return(0,d.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Add several cards"),(0,d.kt)("p",null,"This mutation is restricted to an User access token (",(0,d.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,d.kt)("p",null,"The user must have an account membership for this account with the attribute ",(0,d.kt)("inlineCode",{parentName:"p"},"canManageAccountMembership=true"),"."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"addCards(\n  input: AddCardsInput!\n): AddCardsPayload!\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addcardsbinputbcodeaddcardsinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"addCards.",(0,d.kt)("b",null,"input"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/inputs/add-cards-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsInput!"))," ",(0,d.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"addcardspayload-"},(0,d.kt)("a",{parentName:"h4",href:"/api/unions/add-cards-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsPayload"))," ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,d.kt)("blockquote",null))}g.isMDXComponent=!0}}]);