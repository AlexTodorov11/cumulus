"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[23536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={id:"workflow-ts-failed-step",title:"Workflow - Troubleshoot Failed Step(s)",hide_title:!1},s=void 0,u={unversionedId:"integrator-guide/workflow-ts-failed-step",id:"version-v10.1.0/integrator-guide/workflow-ts-failed-step",title:"Workflow - Troubleshoot Failed Step(s)",description:"Steps",source:"@site/versioned_docs/version-v10.1.0/integrator-guide/workflow-ts-failed-step.md",sourceDirName:"integrator-guide",slug:"/integrator-guide/workflow-ts-failed-step",permalink:"/cumulus/docs/v10.1.0/integrator-guide/workflow-ts-failed-step",draft:!1,tags:[],version:"v10.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"workflow-ts-failed-step",title:"Workflow - Troubleshoot Failed Step(s)",hide_title:!1},sidebar:"docs",previous:{title:"Workflow - Add New Lambda",permalink:"/cumulus/docs/v10.1.0/integrator-guide/workflow-add-new-lambda"},next:{title:"Migrate TEA deployment to standalone module",permalink:"/cumulus/docs/v10.1.0/upgrade-notes/migrate_tea_standalone"}},p={},d=[{value:"Steps",id:"steps",level:2}],c={toc:d},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Locate Step")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Cumulus")," dashboard"),(0,a.kt)("li",{parentName:"ul"},"Find the granule"),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Executions")," to determine the failed step")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Investigate in Cloudwatch")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloudwatch")),(0,a.kt)("li",{parentName:"ul"},"Locate lambda"),(0,a.kt)("li",{parentName:"ul"},"Search ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloudwatch")," logs")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Recreate Error"),(0,a.kt)("p",{parentName:"li"},"In your sandbox environment, try to recreate the error.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Resolution"))))}f.isMDXComponent=!0}}]);