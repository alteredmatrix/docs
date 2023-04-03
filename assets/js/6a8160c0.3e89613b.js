"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[8304],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,f=u["".concat(d,".").concat(y)]||u[y]||p[y]||r;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=y;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},84907:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return y},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var o=n(83117),a=n(67294),r=n(3905);const l={id:"allow-sdd-payload",title:"AllowSddPayload",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api/unions/allow-sdd-payload",id:"api/unions/allow-sdd-payload",title:"AllowSddPayload",description:"No description",source:"@site/docs/api/unions/allow-sdd-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/allow-sdd-payload",permalink:"/docs/api/unions/allow-sdd-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/allow-sdd-payload.mdx",tags:[],version:"current",frontMatter:{id:"allow-sdd-payload",title:"AllowSddPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddVirtualIbanEntryPayload",permalink:"/docs/api/unions/add-virtual-iban-entry-payload"},next:{title:"AllowSddVirtualIbanEntryPayload",permalink:"/docs/api/unions/allow-sdd-virtual-iban-entry-payload"}},c={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AllowSddSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"allowsddsuccesspayload-",level:4},{value:'<code>AccountNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"accountnotfoundrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:u,SpecifiedBy:p,Badge:y},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union AllowSddPayload = AllowSddSuccessPayload | AccountNotFoundRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"allowsddsuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/allow-sdd-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AllowSddSuccessPayload"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"accountnotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/account-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountNotFoundRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists")),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/allow-sdd"},(0,r.kt)("inlineCode",{parentName:"a"},"allowSdd")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);