"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[55962],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function u(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=s(e.components);return n.createElement(l.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},k=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),k=a,f=d["".concat(l,".").concat(k)]||d[k]||p[k]||r;return t?n.createElement(f,i(i({ref:o},c),{},{components:t})):n.createElement(f,i({ref:o},c))}));function f(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=k;var u={};for(var l in o)hasOwnProperty.call(o,l)&&(u[l]=o[l]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<r;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},47161:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var n=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],u={id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},l=void 0,s={unversionedId:"data-cookbooks/about-cookbooks",id:"data-cookbooks/about-cookbooks",title:"About Cookbooks",description:"Introduction",source:"@site/../docs/data-cookbooks/about-cookbooks.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/about-cookbooks",permalink:"/cumulus/docs/next/data-cookbooks/about-cookbooks",draft:!1,tags:[],version:"current",lastUpdatedBy:"Matt Savoie",lastUpdatedAt:1643055767,formattedLastUpdatedAt:"Jan 24, 2022",frontMatter:{id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},sidebar:"Data Cookbooks",next:{title:"HelloWorld Workflow",permalink:"/cumulus/docs/next/data-cookbooks/hello-world"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding a page",id:"adding-a-page",level:2},{value:"More about workflows",id:"more-about-workflows",level:2}],p={toc:d},k="wrapper";function f(e){var o=e.components,t=(0,a.Z)(e,i);return(0,r.kt)(k,(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The following data cookbooks are documents containing examples and explanations of workflows in the Cumulus framework. Additionally, the following data cookbooks should serve to help unify an institution/user group on a set of terms."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The data cookbooks assume you can configure providers, collections, and rules to run workflows. Visit ",(0,r.kt)("a",{parentName:"p",href:"../configuration/data-management-types"},"Cumulus data management types")," for information on how to configure Cumulus data management types."),(0,r.kt)("h2",{id:"adding-a-page"},"Adding a page"),(0,r.kt)("p",null,'As shown in detail in the "Add a New Page and Sidebars" section in ',(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/next/docs-how-to"},"Cumulus Docs: How To's"),", you can add a new page to the data cookbook by creating a markdown (",(0,r.kt)("inlineCode",{parentName:"p"},".md"),") file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/data-cookbooks")," directory. The new page can then be linked to the sidebar by adding it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data-Cookbooks")," object in the ",(0,r.kt)("inlineCode",{parentName:"p"},"website/sidebar.json")," file as ",(0,r.kt)("inlineCode",{parentName:"p"},"data-cookbooks/${id}"),"."),(0,r.kt)("h2",{id:"more-about-workflows"},"More about workflows"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/next/workflows/"},"Workflow general information")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/next/workflows/input_output"},"Input & Output")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/next/workflows/developing-workflow-tasks"},"Developing Workflow Tasks")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/next/workflows/workflow-configuration-how-to"},"Workflow Configuration How-to's")))}f.isMDXComponent=!0}}]);