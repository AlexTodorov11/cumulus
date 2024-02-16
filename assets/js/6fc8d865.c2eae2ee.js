"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[681],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||u;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<u;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(58168),a=n(98587),u=(n(96540),n(15680)),o=["components"],i={id:"cumulus-docs-readme",slug:"/",title:"Introduction",hide_title:!1},s=void 0,l={unversionedId:"cumulus-docs-readme",id:"version-v15.0.2/cumulus-docs-readme",title:"Introduction",description:"This Cumulus project seeks to address the existing need for a \u201cnative\u201d cloud-based data ingest, archive, distribution, and management system that can be used for all future Earth Observing System Data and Information System (EOSDIS) data streams via the development and implementation of Cumulus. The term \u201cnative\u201d implies that the system will leverage all components of a cloud infrastructure provided by the vendor for efficiency (in terms of both processing time and cost). Additionally, Cumulus will operate on future data streams involving satellite missions, aircraft missions, and field campaigns.",source:"@site/versioned_docs/version-v15.0.2/README.md",sourceDirName:".",slug:"/",permalink:"/cumulus/docs/v15.0.2/",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"cumulus-docs-readme",slug:"/",title:"Introduction",hide_title:!1},sidebar:"docs",next:{title:"Getting Started",permalink:"/cumulus/docs/v15.0.2/getting-started"}},c={},m=[{value:"Navigating the Cumulus Docs",id:"navigating-the-cumulus-docs",level:2},{value:"Get To Know Cumulus",id:"get-to-know-cumulus",level:3},{value:"Cumulus Reference Docs",id:"cumulus-reference-docs",level:3},{value:"Auxiliary Guides",id:"auxiliary-guides",level:3},{value:"Contributing",id:"contributing",level:2}],d={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,a.A)(e,o);return(0,u.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.yg)("p",null,"This Cumulus project seeks to address the existing need for a \u201cnative\u201d cloud-based data ingest, archive, distribution, and management system that can be used for all future Earth Observing System Data and Information System (EOSDIS) data streams via the development and implementation of Cumulus. The term \u201cnative\u201d implies that the system will leverage all components of a cloud infrastructure provided by the vendor for efficiency (in terms of both processing time and cost). Additionally, Cumulus will operate on future data streams involving satellite missions, aircraft missions, and field campaigns."),(0,u.yg)("p",null,"This documentation includes both guidelines, examples, and source code docs. It is accessible at ",(0,u.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus"},"https://nasa.github.io/cumulus"),"."),(0,u.yg)("hr",null),(0,u.yg)("h2",{id:"navigating-the-cumulus-docs"},"Navigating the Cumulus Docs"),(0,u.yg)("h3",{id:"get-to-know-cumulus"},"Get To Know Cumulus"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},"Getting Started - ",(0,u.yg)("a",{parentName:"li",href:"/cumulus/docs/v15.0.2/getting-started"},"here")," - If you are new to Cumulus we suggest that you begin with this section to help you understand and work in the environment."),(0,u.yg)("li",{parentName:"ul"},"General Cumulus Documentation - ",(0,u.yg)("a",{parentName:"li",href:"/cumulus/docs/v15.0.2/"},"here")," <- you're here")),(0,u.yg)("h3",{id:"cumulus-reference-docs"},"Cumulus Reference Docs"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},"Cumulus API Documentation - ",(0,u.yg)("a",{parentName:"li",href:"https://nasa.github.io/cumulus-api"},"here")),(0,u.yg)("li",{parentName:"ul"},"Cumulus Developer Documentation - ",(0,u.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus"},"here")," - READMEs throughout the main repository."),(0,u.yg)("li",{parentName:"ul"},"Data Cookbooks - ",(0,u.yg)("a",{parentName:"li",href:"/cumulus/docs/v15.0.2/data-cookbooks/about-cookbooks"},"here"))),(0,u.yg)("h3",{id:"auxiliary-guides"},"Auxiliary Guides"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},"Integrator Guide - ",(0,u.yg)("a",{parentName:"li",href:"/cumulus/docs/v15.0.2/integrator-guide/about-int-guide"},"here")),(0,u.yg)("li",{parentName:"ul"},"Operator Docs - ",(0,u.yg)("a",{parentName:"li",href:"/cumulus/docs/v15.0.2/operator-docs/about-operator-docs"},"here"))),(0,u.yg)("hr",null),(0,u.yg)("h2",{id:"contributing"},"Contributing"),(0,u.yg)("p",null,"Please refer to: ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/CONTRIBUTING.md"},"https://github.com/nasa/cumulus/blob/master/CONTRIBUTING.md")," for information. We thank you in advance."))}g.isMDXComponent=!0}}]);