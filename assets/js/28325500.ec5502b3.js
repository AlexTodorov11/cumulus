"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[4696],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(96540),a=r(20053),o=r(97460),i=r(75489),c=r(16654),s=r(21312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,r=e.children;return n.createElement(i.A,{href:t,className:(0,a.A)("card padding--lg",l.cardContainer)},r)}function d(e){var t=e.href,r=e.icon,o=e.title,i=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.A)("text--truncate",l.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.A)("text--truncate",l.cardDescription),title:i},i))}function p(e){var t,r=e.item,a=(0,o._o)(r);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r,a=e.item,i=(0,c.A)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.cC)(null!=(t=a.docId)?t:void 0);return n.createElement(d,{href:a.href,icon:i,title:a.label,description:null!=(r=a.description)?r:null==s?void 0:s.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,o.$S)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var i=(0,o.d1)(t);return n.createElement("section",{className:(0,a.A)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e}))})))}},82986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(58168),a=r(98587),o=(r(96540),r(15680)),i=r(3514),c=["components"],s={id:"databases-introduction",title:"Databases",hide_title:!1},l=void 0,u={unversionedId:"deployment/databases-introduction",id:"version-v16.0.0/deployment/databases-introduction",title:"Databases",description:"Cumulus Core Database",source:"@site/versioned_docs/version-v16.0.0/deployment/databases-introduction.mdx",sourceDirName:"deployment",slug:"/deployment/databases-introduction",permalink:"/cumulus/docs/v16.0.0/deployment/databases-introduction",draft:!1,tags:[],version:"v16.0.0",lastUpdatedBy:"Nate Pauzenga",lastUpdatedAt:1689363144,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"databases-introduction",title:"Databases",hide_title:!1},sidebar:"docs",previous:{title:"Component-based Cumulus Deployment",permalink:"/cumulus/docs/v16.0.0/deployment/components"},next:{title:"PostgreSQL Database Deployment",permalink:"/cumulus/docs/v16.0.0/deployment/postgres_database_deployment"}},d={},p=[{value:"Cumulus Core Database",id:"cumulus-core-database",level:3},{value:"Types of Databases",id:"types-of-databases",level:3}],m={toc:p},f="wrapper";function y(e){var t=e.components,r=(0,a.A)(e,c);return(0,o.yg)(f,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"cumulus-core-database"},"Cumulus Core Database"),(0,o.yg)("p",null,"Cumulus uses a PostgreSQL database as its primary data store for operational and archive records (e.g. collections, granules, etc). We expect a PostgreSQL database to be provided by the AWS RDS service; however, there are two types of the RDS database which we will explore in the upcoming pages."),(0,o.yg)("h3",{id:"types-of-databases"},"Types of Databases"),(0,o.yg)(i.A,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);