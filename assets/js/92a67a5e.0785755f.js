"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[90717],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(a),h=r,f=m["".concat(d,".").concat(h)]||m[h]||p[h]||o;return a?n.createElement(f,l(l({ref:t},i),{},{components:a})):n.createElement(f,l({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15043:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(83117),r=a(67294),o=a(3905);const l={id:"merchant-profile",title:"MerchantProfile",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api-reference/objects/merchant-profile",id:"api-reference/objects/merchant-profile",title:"MerchantProfile",description:"Merchant Profile",source:"@site/docs/api-reference/objects/merchant-profile.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/merchant-profile",permalink:"/docs/api-reference/objects/merchant-profile",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/merchant-profile.mdx",tags:[],version:"current",frontMatter:{id:"merchant-profile",title:"MerchantProfile",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MerchantProfileWrongStatusRejection",permalink:"/docs/api-reference/objects/merchant-profile-wrong-status-rejection"},next:{title:"MissingMandatoryFieldRejection",permalink:"/docs/api-reference/objects/missing-mandatory-field-rejection"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>merchantName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebmerchantnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>merchantWebsite</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebmerchantwebsitebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>statusInfo</b></code><Bullet /><code>MerchantProfileStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-merchantprofilebstatusinfobcodemerchantprofilestatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>productType</b></code><Bullet /><code>ProductType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantprofilebproducttypebcodeproducttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>expectedMonthlyPaymentVolume</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-merchantprofilebexpectedmonthlypaymentvolumebcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>merchantPaymentProducts</b></code><Bullet /><code>[MerchantPaymentProduct!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-merchantprofilebmerchantpaymentproductsbcodemerchantpaymentproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>merchantPaymentMethods</b></code><Bullet /><code>[MerchantPaymentMethod!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-merchantprofilebmerchantpaymentmethodsbcodemerchantpaymentmethod--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>expectedAverageBasket</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-merchantprofilebexpectedaveragebasketbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfile.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantprofilebupdatedatbcodedatetime--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:m,SpecifiedBy:p,Badge:h},u="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Merchant Profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type MerchantProfile {\n  id: ID!\n  accountId: ID!\n  merchantName: String!\n  merchantWebsite: String\n  statusInfo: MerchantProfileStatusInfo!\n  productType: ProductType!\n  expectedMonthlyPaymentVolume: Amount!\n  merchantPaymentProducts: [MerchantPaymentProduct!]\n  merchantPaymentMethods: [MerchantPaymentMethod!]\n  expectedAverageBasket: Amount!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Merchant Profile ID")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebaccountidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"accountId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Account ID this Merchant Profile is linked to")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebmerchantnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"merchantName"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Business name of the merchant, i.e. name that will be displayed on debtors' bank statements")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebmerchantwebsitebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"merchantWebsite"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Url of the merchant's website")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebstatusinfobcodemerchantprofilestatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-profile-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileStatusInfo!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The status of the merchant profile")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebproducttypebcodeproducttype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"productType"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/product-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductType!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Type of product sold. List of value: Goods, Services, VirtualGoods, GiftsAndDonations. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebexpectedmonthlypaymentvolumebcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"expectedMonthlyPaymentVolume"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expected annual activity volumes for all payment method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebmerchantpaymentproductsbcodemerchantpaymentproduct--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"merchantPaymentProducts"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-product"},(0,o.kt)("inlineCode",{parentName:"a"},"[MerchantPaymentProduct!]"))," ",(0,o.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payment Products associated")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebmerchantpaymentmethodsbcodemerchantpaymentmethod--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"merchantPaymentMethods"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"[MerchantPaymentMethod!]"))," ",(0,o.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payment Methods associated")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebexpectedaveragebasketbcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"expectedAverageBasket"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"expected average basket value.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"created date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilebupdatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfile.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"updated date")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/queries/merchant-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"merchantProfile")),"  ",(0,o.kt)(h,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/add-merchant-profile-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddMerchantProfileSuccessPayload")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/merchant-profile-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileEdge")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/request-merchant-payment-methods-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentMethodsSuccessPayload")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/request-merchant-payment-products-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentProductsSuccessPayload")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);