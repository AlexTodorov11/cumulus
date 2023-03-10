"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[68689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={id:"rerunning-workflow-executions",title:"Re-running workflow executions",hide_title:!1},l=void 0,c={unversionedId:"troubleshooting/rerunning-workflow-executions",id:"version-v9.9.0/troubleshooting/rerunning-workflow-executions",title:"Re-running workflow executions",description:"To re-run a Cumulus workflow execution from the AWS console:",source:"@site/versioned_docs/version-v9.9.0/troubleshooting/rerunning-workflow-executions.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/rerunning-workflow-executions",permalink:"/cumulus/docs/v9.9.0/troubleshooting/rerunning-workflow-executions",draft:!1,tags:[],version:"v9.9.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"rerunning-workflow-executions",title:"Re-running workflow executions",hide_title:!1},sidebar:"Operator Docs",previous:{title:"Naming Executions",permalink:"/cumulus/docs/v9.9.0/operator-docs/naming-executions"},next:{title:"How to replay Kinesis messages after an outage",permalink:"/cumulus/docs/v9.9.0/features/replay-kinesis-messages"}},s={},p=[],f={toc:p},m="wrapper";function d(e){var t=e.components,u=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To re-run a Cumulus workflow execution from the AWS console:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the page for an individual workflow execution")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click the "New execution" button at the top right of the screen'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Screenshot of the AWS console for a Step Function execution highlighting the &quot;New execution&quot; button at the top right of the screen",src:n(45323).Z,width:"2128",height:"527"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the "New execution" modal that appears, replace the ',(0,i.kt)("inlineCode",{parentName:"p"},"cumulus_meta.execution_name")," value in the default input with the value of the new execution ID as seen in the screenshot below"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Screenshot of the AWS console showing the modal window for entering input when running a new Step Function execution",src:n(72975).Z,width:"2629",height:"1033"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click the "Start execution" button'))))}d.isMDXComponent=!0},45323:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/new_execution-a28e00d4f8d05ab11704ed7c5d9744ef.png"},72975:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rerun_execution-b06befedd428ec3eb6a37c73911b3e6e.png"}}]);