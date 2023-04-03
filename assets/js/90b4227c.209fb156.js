"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20055],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=o,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},45265:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return b},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=n(83117),o=n(67294),r=n(3905);const i={id:"disable-account-membership-payload",title:"DisableAccountMembershipPayload",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api/unions/disable-account-membership-payload",id:"api/unions/disable-account-membership-payload",title:"DisableAccountMembershipPayload",description:"No description",source:"@site/docs/api/unions/disable-account-membership-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/disable-account-membership-payload",permalink:"/docs/api/unions/disable-account-membership-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/disable-account-membership-payload.mdx",tags:[],version:"current",frontMatter:{id:"disable-account-membership-payload",title:"DisableAccountMembershipPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DenySddVirtualIbanEntryPayload",permalink:"/docs/api/unions/deny-sdd-virtual-iban-entry-payload"},next:{title:"EnableReceivedDirectDebitMandatePayload",permalink:"/docs/api/unions/enable-received-direct-debit-mandate-payload"}},s={},d=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>DisableAccountMembershipSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"disableaccountmembershipsuccesspayload-",level:4},{value:'<code>AccountMembershipCannotBeDisabledRejection</code> <Badge class="secondary" text="object"/>',id:"accountmembershipcannotbedisabledrejection-",level:4},{value:'<code>AccountMembershipNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"accountmembershipnotfoundrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:'<code>LegalRepresentativeAccountMembershipCannotBeDisabledRejection</code> <Badge class="secondary" text="object"/>',id:"legalrepresentativeaccountmembershipcannotbedisabledrejection-",level:4},{value:'<code>UserNotAllowedToDisableItsOwnAccountMembershipRejection</code> <Badge class="secondary" text="object"/>',id:"usernotallowedtodisableitsownaccountmembershiprejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:p,Badge:b},y="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union DisableAccountMembershipPayload = DisableAccountMembershipSuccessPayload | AccountMembershipCannotBeDisabledRejection | AccountMembershipNotFoundRejection | ForbiddenRejection | InternalErrorRejection | LegalRepresentativeAccountMembershipCannotBeDisabledRejection | UserNotAllowedToDisableItsOwnAccountMembershipRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"disableaccountmembershipsuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/disable-account-membership-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"DisableAccountMembershipSuccessPayload"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"accountmembershipcannotbedisabledrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/account-membership-cannot-be-disabled-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipCannotBeDisabledRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"accountmembershipnotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/account-membership-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipNotFoundRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"forbiddenrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/forbidden-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"internalerrorrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/internal-error-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,r.kt)("h4",{id:"legalrepresentativeaccountmembershipcannotbedisabledrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/legal-representative-account-membership-cannot-be-disabled-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"LegalRepresentativeAccountMembershipCannotBeDisabledRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"usernotallowedtodisableitsownaccountmembershiprejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/user-not-allowed-to-disable-its-own-account-membership-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"UserNotAllowedToDisableItsOwnAccountMembershipRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/disable-account-membership"},(0,r.kt)("inlineCode",{parentName:"a"},"disableAccountMembership")),"  ",(0,r.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);