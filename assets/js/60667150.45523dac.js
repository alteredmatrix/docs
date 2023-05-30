"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[85642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(n),p=r,y=m["".concat(d,".").concat(p)]||m[p]||h[p]||o;return n?a.createElement(y,c(c({ref:t},s),{},{components:n})):a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66423:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var a=n(83117),r=n(67294),o=n(3905);const c={id:"internal-direct-debit-b2-bmerchant-payment-method",title:"InternalDirectDebitB2BMerchantPaymentMethod",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method",id:"api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method",title:"InternalDirectDebitB2BMerchantPaymentMethod",description:"InternalDirectDebitB2BMerchantPaymentMethod",source:"@site/docs/api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method",permalink:"/docs/api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method.mdx",tags:[],version:"current",frontMatter:{id:"internal-direct-debit-b2-bmerchant-payment-method",title:"InternalDirectDebitB2BMerchantPaymentMethod",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternalCreditTransfer",permalink:"/docs/api-reference/objects/internal-credit-transfer"},next:{title:"InternalDirectDebitCreditor",permalink:"/docs/api-reference/objects/internal-direct-debit-creditor"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitB2BMerchantPaymentMethod.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitB2BMerchantPaymentMethod.<b>type</b></code><Bullet /><code>MerchantPaymentMethodType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbtypebcodemerchantpaymentmethodtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitB2BMerchantPaymentMethod.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitB2BMerchantPaymentMethod.<b>statusInfo</b></code><Bullet /><code>MerchantPaymentMethodStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbstatusinfobcodemerchantpaymentmethodstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitB2BMerchantPaymentMethod.<b>version</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbversionbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitB2BMerchantPaymentMethod.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitB2BMerchantPaymentMethod.<b>rollingReserve</b></code><Bullet /><code>RollingReserve</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbrollingreservebcoderollingreserve-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentMethod</code> <Badge class="secondary" text="interface"/>',id:"merchantpaymentmethod-",level:4}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:m,SpecifiedBy:h,Badge:p},b="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"InternalDirectDebitB2BMerchantPaymentMethod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternalDirectDebitB2BMerchantPaymentMethod implements MerchantPaymentMethod {\n  id: ID!\n  type: MerchantPaymentMethodType!\n  productId: ID!\n  statusInfo: MerchantPaymentMethodStatusInfo!\n  version: Int!\n  updatedAt: Date!\n  rollingReserve: RollingReserve\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier tied to every version of a given Merchant Payment Method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbtypebcodemerchantpaymentmethodtype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"type"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-method-type"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodType!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Merchant Payment Method Type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbproductidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"productId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbstatusinfobcodemerchantpaymentmethodstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatusInfo!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status of the Merchant Payment Method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbversionbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"version"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Version of the Merchant Payment Method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbupdatedatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Date at which the Merchant Payment Method was last updated")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitb2bmerchantpaymentmethodbrollingreservebcoderollingreserve-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"rollingReserve"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/rolling-reserve"},(0,o.kt)("inlineCode",{parentName:"a"},"RollingReserve"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rolling Reserve applicated to the Merchant Payment Method")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"merchantpaymentmethod-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethod"))," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Base object for the different Payment Methods available")))}u.isMDXComponent=!0}}]);