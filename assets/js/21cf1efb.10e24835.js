"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[82881],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,g=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(58168),o=r(98587),a=(r(96540),r(15680)),l=["components"],i={id:"workflow-ts-failed-step",title:"Workflow - Troubleshoot Failed Step(s)",hide_title:!1},u=void 0,p={unversionedId:"integrator-guide/workflow-ts-failed-step",id:"version-v16.0.0/integrator-guide/workflow-ts-failed-step",title:"Workflow - Troubleshoot Failed Step(s)",description:"Steps",source:"@site/versioned_docs/version-v16.0.0/integrator-guide/workflow-ts-failed-step.md",sourceDirName:"integrator-guide",slug:"/integrator-guide/workflow-ts-failed-step",permalink:"/cumulus/docs/v16.0.0/integrator-guide/workflow-ts-failed-step",draft:!1,tags:[],version:"v16.0.0",lastUpdatedBy:"Nate Pauzenga",lastUpdatedAt:1689363144,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"workflow-ts-failed-step",title:"Workflow - Troubleshoot Failed Step(s)",hide_title:!1},sidebar:"docs",previous:{title:"Workflow - Add New Lambda",permalink:"/cumulus/docs/v16.0.0/integrator-guide/workflow-add-new-lambda"},next:{title:"Upgrade Notes",permalink:"/cumulus/docs/v16.0.0/category/upgrade-notes"}},s={},c=[{value:"Steps",id:"steps",level:2}],d={toc:c},f="wrapper";function g(e){var t=e.components,r=(0,o.A)(e,l);return(0,a.yg)(f,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"steps"},"Steps"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Locate Step")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Go to ",(0,a.yg)("inlineCode",{parentName:"li"},"Cumulus")," dashboard"),(0,a.yg)("li",{parentName:"ul"},"Find the granule"),(0,a.yg)("li",{parentName:"ul"},"Go to ",(0,a.yg)("inlineCode",{parentName:"li"},"Executions")," to determine the failed step")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Investigate in Cloudwatch")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Go to ",(0,a.yg)("inlineCode",{parentName:"li"},"Cloudwatch")),(0,a.yg)("li",{parentName:"ul"},"Locate lambda"),(0,a.yg)("li",{parentName:"ul"},"Search ",(0,a.yg)("inlineCode",{parentName:"li"},"Cloudwatch")," logs")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Recreate Error"),(0,a.yg)("p",{parentName:"li"},"In your sandbox environment, try to recreate the error.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Resolution"))))}g.isMDXComponent=!0}}]);