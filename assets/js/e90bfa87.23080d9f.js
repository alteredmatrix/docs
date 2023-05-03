"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[60800],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>f});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(a),b=o,f=p["".concat(c,".").concat(b)]||p[b]||u[b]||r;return a?t.createElement(f,i(i({ref:n},s),{},{components:a})):t.createElement(f,i({ref:n},s))}));function f(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=b;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d[p]="string"==typeof e?e:o,i[1]=d;for(var l=2;l<r;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}b.displayName="MDXCreateElement"},30140:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>b,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=a(83117),o=a(67294),r=a(3905);const i={id:"update-individual-onboarding-success-payload",title:"UpdateIndividualOnboardingSuccessPayload",hide_table_of_contents:!1},d=void 0,c={unversionedId:"api-reference/objects/update-individual-onboarding-success-payload",id:"api-reference/objects/update-individual-onboarding-success-payload",title:"UpdateIndividualOnboardingSuccessPayload",description:"Type of result when updateIndividualOnboarding is a success",source:"@site/docs/api-reference/objects/update-individual-onboarding-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/update-individual-onboarding-success-payload",permalink:"/docs/api-reference/objects/update-individual-onboarding-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/update-individual-onboarding-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-individual-onboarding-success-payload",title:"UpdateIndividualOnboardingSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateCompanyOnboardingSuccessPayload",permalink:"/docs/api-reference/objects/update-company-onboarding-success-payload"},next:{title:"UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload",permalink:"/docs/api-reference/objects/update-received-sepa-direct-debit-b2-b-mandate-success-payload"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateIndividualOnboardingSuccessPayload.<b>onboarding</b></code><Bullet /><code>OnboardingInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updateindividualonboardingsuccesspayloadbonboardingbcodeonboardinginfo--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:u,Badge:b},y="wrapper";function g(e){let{components:n,...a}=e;return(0,r.kt)(y,(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Type of result when updateIndividualOnboarding is a success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateIndividualOnboardingSuccessPayload {\n  onboarding: OnboardingInfo!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateindividualonboardingsuccesspayloadbonboardingbcodeonboardinginfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateIndividualOnboardingSuccessPayload.",(0,r.kt)("b",null,"onboarding"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/onboarding-info"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingInfo!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/update-individual-onboarding-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingPayload")),"  ",(0,r.kt)(b,{class:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);