"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[37644],{95788:(e,o,t)=>{t.d(o,{Iu:()=>c,yg:()=>b});var n=t(11504);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function u(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=l(e.components);return n.createElement(s.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},f=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(b,i(i({ref:o},c),{},{components:t})):n.createElement(b,i({ref:o},c))}));function b(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var s in o)hasOwnProperty.call(o,s)&&(u[s]=o[s]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},52856:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var n=t(45072),r=t(95656),a=(t(11504),t(95788)),i=["components"],u={id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},s=void 0,l={unversionedId:"data-cookbooks/about-cookbooks",id:"data-cookbooks/about-cookbooks",title:"About Cookbooks",description:"Introduction",source:"@site/../docs/data-cookbooks/about-cookbooks.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/about-cookbooks",permalink:"/cumulus/docs/next/data-cookbooks/about-cookbooks",draft:!1,tags:[],version:"current",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1698871291,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},sidebar:"docs",previous:{title:"External Contributions",permalink:"/cumulus/docs/next/external-contributions/"},next:{title:"About Cookbooks",permalink:"/cumulus/docs/next/data-cookbooks/about-cookbooks"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding a page",id:"adding-a-page",level:2},{value:"More about workflows",id:"more-about-workflows",level:2}],p={toc:d},f="wrapper";function b(e){var o=e.components,t=(0,r.c)(e,i);return(0,a.yg)(f,(0,n.c)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The following data cookbooks are documents containing examples and explanations of workflows in the Cumulus framework. Additionally, the following data cookbooks should serve to help unify an institution/user group on a set of terms."),(0,a.yg)("h2",{id:"setup"},"Setup"),(0,a.yg)("p",null,"The data cookbooks assume you can configure providers, collections, and rules to run workflows. Visit ",(0,a.yg)("a",{parentName:"p",href:"../configuration/data-management-types"},"Cumulus data management types")," for information on how to configure Cumulus data management types."),(0,a.yg)("h2",{id:"adding-a-page"},"Adding a page"),(0,a.yg)("p",null,'As shown in detail in the "Add a New Page and Sidebars" section in ',(0,a.yg)("a",{parentName:"p",href:"../docs-how-to.md"},"Cumulus Docs: How To's"),", you can add a new page to the data cookbook by creating a markdown (",(0,a.yg)("inlineCode",{parentName:"p"},".md"),") file in the ",(0,a.yg)("inlineCode",{parentName:"p"},"docs/data-cookbooks")," directory. The new page can then be linked to the sidebar by adding it to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Data-Cookbooks")," object in the ",(0,a.yg)("inlineCode",{parentName:"p"},"website/sidebar.json")," file as ",(0,a.yg)("inlineCode",{parentName:"p"},"data-cookbooks/${id}"),"."),(0,a.yg)("h2",{id:"more-about-workflows"},"More about workflows"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/next/workflows/"},"Workflow general information")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/next/workflows/input_output"},"Input & Output")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/next/workflows/developing-workflow-tasks"},"Developing Workflow Tasks")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/next/workflows/workflow-configuration-how-to"},"Workflow Configuration How-to's")))}b.isMDXComponent=!0}}]);