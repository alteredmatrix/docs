"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,h=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93596:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(83117),a=n(67294),o=n(3905);const i={id:"request-merchant-payment-methods-input",title:"RequestMerchantPaymentMethodsInput",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api-reference/inputs/request-merchant-payment-methods-input",id:"api-reference/inputs/request-merchant-payment-methods-input",title:"RequestMerchantPaymentMethodsInput",description:"No description",source:"@site/docs/api-reference/inputs/request-merchant-payment-methods-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/request-merchant-payment-methods-input",permalink:"/docs/api-reference/inputs/request-merchant-payment-methods-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/request-merchant-payment-methods-input.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-payment-methods-input",title:"RequestMerchantPaymentMethodsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RefundTransaction",permalink:"/docs/api-reference/inputs/refund-transaction"},next:{title:"RequestMerchantPaymentProductsInput",permalink:"/docs/api-reference/inputs/request-merchant-payment-products-input"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>merchantProfileId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbmerchantprofileidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>internalDirectDebitStandard</b></code><Bullet /><code>InternalDirectDebitStandardPaymentMethodInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbinternaldirectdebitstandardbcodeinternaldirectdebitstandardpaymentmethodinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>internalDirectDebitB2B</b></code><Bullet /><code>InternalDirectDebitB2BPaymentMethodInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbinternaldirectdebitb2bbcodeinternaldirectdebitb2bpaymentmethodinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>check</b></code><Bullet /><code>CheckPaymentProductInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbcheckbcodecheckpaymentproductinput-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:p,Bullet:s,SpecifiedBy:u,Badge:m},y="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input RequestMerchantPaymentMethodsInput {\n  merchantProfileId: ID!\n  internalDirectDebitStandard: InternalDirectDebitStandardPaymentMethodInput\n  internalDirectDebitB2B: InternalDirectDebitB2BPaymentMethodInput\n  check: CheckPaymentProductInput\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbmerchantprofileidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"merchantProfileId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the Merchant Profile")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbinternaldirectdebitstandardbcodeinternaldirectdebitstandardpaymentmethodinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"internalDirectDebitStandard"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/internal-direct-debit-standard-payment-method-input"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitStandardPaymentMethodInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Input for the Internal Direct Debit Standard payment method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbinternaldirectdebitb2bbcodeinternaldirectdebitb2bpaymentmethodinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"internalDirectDebitB2B"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/internal-direct-debit-b2-bpayment-method-input"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitB2BPaymentMethodInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Input for the Internal Direct Debit B2B payment method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbcheckbcodecheckpaymentproductinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"check"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/check-payment-product-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckPaymentProductInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Input for Check payment product")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/request-merchant-payment-methods"},(0,o.kt)("inlineCode",{parentName:"a"},"requestMerchantPaymentMethods")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);