"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(83117),a=(r(67294),r(3905));const i={title:"Credit transfers home",sidebar_label:"Credit transfers"},s="About credit transfers",o={unversionedId:"guides/payments/credit-transfers/concepts",id:"guides/payments/credit-transfers/concepts",title:"Credit transfers home",description:"Swan supports several types of transfers:",source:"@site/docs/guides/payments/credit-transfers/concepts.mdx",sourceDirName:"guides/payments/credit-transfers",slug:"/guides/payments/credit-transfers/concepts",permalink:"/docs/guides/payments/credit-transfers/concepts",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/guides/payments/credit-transfers/concepts.mdx",tags:[],version:"current",frontMatter:{title:"Credit transfers home",sidebar_label:"Credit transfers"},sidebar:"docs",previous:{title:"Payments",permalink:"/docs/guides/payments/concepts"},next:{title:"Receive SEPA transfers",permalink:"/docs/guides/payments/credit-transfers/guide-receive-transfers"}},c={},l=[{value:"SEPA credit transfers",id:"sepa-credit-transfers",level:2},{value:"Verifying outgoing SEPA credit transfers",id:"verifying-outgoing-sepa-credit-transfers",level:3},{value:"SEPA instant credit transfers",id:"sepa-instant-credit-transfers",level:2},{value:"Internal credit transfers",id:"internal-credit-transfers",level:2},{value:"International transfers",id:"international-transfers",level:2},{value:"Recurring transfers (standing orders)",id:"recurring-transfers-standing-orders",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-credit-transfers"},"About credit transfers"),(0,a.kt)("p",null,"Swan supports several types of transfers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SEPA credit transfers"),(0,a.kt)("li",{parentName:"ul"},"SEPA instant credit transfers"),(0,a.kt)("li",{parentName:"ul"},"Internal credit transfers"),(0,a.kt)("li",{parentName:"ul"},"International transfers"),(0,a.kt)("li",{parentName:"ul"},"Recurring transfers (standing orders)")),(0,a.kt)("h2",{id:"sepa-credit-transfers"},"SEPA credit transfers"),(0,a.kt)("p",null,"A SEPA credit transfer (SCT) is a transfer that occurs between two accounts located in the Single Euro Payments Area (SEPA).\nSEPA includes all countries in the European Union, as well as the United Kingdom, Iceland, Lichtenstein, Norway, and Switzerland."),(0,a.kt)("p",null,"There are two types of standard SEPA credit transfers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SCT in"),": incoming SEPA credit transfers using the mutation ",(0,a.kt)("inlineCode",{parentName:"li"},"SepaCreditTransferIntype")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SCT out"),": outgoing SEPA credit transfers using the mutation ",(0,a.kt)("inlineCode",{parentName:"li"},"SepaCreditTransferOuttype"))),(0,a.kt)("h3",{id:"verifying-outgoing-sepa-credit-transfers"},"Verifying outgoing SEPA credit transfers"),(0,a.kt)("p",null,"Swan needs to verify all beneficiaries of outgoing SEPA credit transfers.\nTo do so, we closely examine the IBAN:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Is the IBAN length greater or equal to five?"),(0,a.kt)("li",{parentName:"ol"},"Is the country code valid?"),(0,a.kt)("li",{parentName:"ol"},"Are the third and fourth characters of the IBAN numbers?"),(0,a.kt)("li",{parentName:"ol"},"Does the IBAN length match the expected length for that country?"),(0,a.kt)("li",{parentName:"ol"},"Is the IBAN checksum correct?")),(0,a.kt)("p",null,"Until this verification is complete, the account sending the outgoing SEPA credit transfer has a limited payment level. The only accounts that can receive an outgoing SEPA credit transfer immediately is an account the Account Holder owns with a different financial institution. "),(0,a.kt)("h2",{id:"sepa-instant-credit-transfers"},"SEPA instant credit transfers"),(0,a.kt)("h2",{id:"internal-credit-transfers"},"Internal credit transfers"),(0,a.kt)("p",null,"An internal credit transfer is an instant transfer that occurs between two Swan accounts."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If the account owner is still in the verification process, their account has the status ",(0,a.kt)("inlineCode",{parentName:"p"},"paymentLevel=Limited"),"."),(0,a.kt)("p",{parentName:"admonition"},"Accounts with the status ",(0,a.kt)("inlineCode",{parentName:"p"},"paymentLevel=Limited")," have a 150\u20ac spending limit over 30 days rolling, and can only purchase goods and services for consumption.\nIf you initiate an internal credit transfer with a Swan account that has the status ",(0,a.kt)("inlineCode",{parentName:"p"},"paymentLevel=Limited"),", it will be rejected.")),(0,a.kt)("h2",{id:"international-transfers"},"International transfers"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This section is empty on purpose right now.")),(0,a.kt)("h2",{id:"recurring-transfers-standing-orders"},"Recurring transfers (standing orders)"))}p.isMDXComponent=!0}}]);