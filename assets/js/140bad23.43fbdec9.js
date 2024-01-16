"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[11011],{3905:(o,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function r(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.push.apply(t,n)}return t}function i(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(o,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))}))}return o}function u(o,e){if(null==o)return{};var t,n,a=function(o,e){if(null==o)return{};var t,n,a={},r=Object.keys(o);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=o[t]);return a}(o,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(o,t)&&(a[t]=o[t])}return a}var s=n.createContext({}),l=function(o){var e=n.useContext(s),t=e;return o&&(t="function"==typeof o?o(e):i(i({},e),o)),t},c=function(o){var e=l(o.components);return n.createElement(s.Provider,{value:e},o.children)},d="mdxType",p={inlineCode:"code",wrapper:function(o){var e=o.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(o,e){var t=o.components,a=o.mdxType,r=o.originalType,s=o.parentName,c=u(o,["components","mdxType","originalType","parentName"]),d=l(t),k=a,f=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return t?n.createElement(f,i(i({ref:e},c),{},{components:t})):n.createElement(f,i({ref:e},c))}));function f(o,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof o||a){var r=t.length,i=new Array(r);i[0]=k;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=o,u[d]="string"==typeof o?o:a,i[1]=u;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},25905:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var n=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],u={id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},s=void 0,l={unversionedId:"data-cookbooks/about-cookbooks",id:"version-v16.1.3/data-cookbooks/about-cookbooks",title:"About Cookbooks",description:"Introduction",source:"@site/versioned_docs/version-v16.1.3/data-cookbooks/about-cookbooks.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/about-cookbooks",permalink:"/cumulus/docs/data-cookbooks/about-cookbooks",draft:!1,tags:[],version:"v16.1.3",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1705422865,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},sidebar:"docs",previous:{title:"External Contributions",permalink:"/cumulus/docs/external-contributions/"},next:{title:"About Cookbooks",permalink:"/cumulus/docs/data-cookbooks/about-cookbooks"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding a page",id:"adding-a-page",level:2},{value:"More about workflows",id:"more-about-workflows",level:2}],p={toc:d},k="wrapper";function f(o){var e=o.components,t=(0,a.Z)(o,i);return(0,r.kt)(k,(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The following data cookbooks are documents containing examples and explanations of workflows in the Cumulus framework. Additionally, the following data cookbooks should serve to help unify an institution/user group on a set of terms."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The data cookbooks assume you can configure providers, collections, and rules to run workflows. Visit ",(0,r.kt)("a",{parentName:"p",href:"../configuration/data-management-types"},"Cumulus data management types")," for information on how to configure Cumulus data management types."),(0,r.kt)("h2",{id:"adding-a-page"},"Adding a page"),(0,r.kt)("p",null,'As shown in detail in the "Add a New Page and Sidebars" section in ',(0,r.kt)("a",{parentName:"p",href:"docs-how-to.md"},"Cumulus Docs: How To's"),", you can add a new page to the data cookbook by creating a markdown (",(0,r.kt)("inlineCode",{parentName:"p"},".md"),") file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/data-cookbooks")," directory. The new page can then be linked to the sidebar by adding it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data-Cookbooks")," object in the ",(0,r.kt)("inlineCode",{parentName:"p"},"website/sidebar.json")," file as ",(0,r.kt)("inlineCode",{parentName:"p"},"data-cookbooks/${id}"),"."),(0,r.kt)("h2",{id:"more-about-workflows"},"More about workflows"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/workflows/"},"Workflow general information")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/workflows/input_output"},"Input & Output")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/workflows/developing-workflow-tasks"},"Developing Workflow Tasks")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/workflows/workflow-configuration-how-to"},"Workflow Configuration How-to's")))}f.isMDXComponent=!0}}]);