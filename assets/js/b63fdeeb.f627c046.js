"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[57666],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>m});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),g=o,m=p["".concat(c,".").concat(g)]||p[g]||f[g]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var r=n(45072),o=n(95656),i=(n(11504),n(95788)),a=["components"],u={id:"rerunning-workflow-executions",title:"Re-running workflow executions",hide_title:!1},c=void 0,l={unversionedId:"troubleshooting/rerunning-workflow-executions",id:"version-v10.1.0/troubleshooting/rerunning-workflow-executions",title:"Re-running workflow executions",description:"To re-run a Cumulus workflow execution from the AWS console:",source:"@site/versioned_docs/version-v10.1.0/troubleshooting/rerunning-workflow-executions.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/rerunning-workflow-executions",permalink:"/cumulus/docs/v10.1.0/troubleshooting/rerunning-workflow-executions",draft:!1,tags:[],version:"v10.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"rerunning-workflow-executions",title:"Re-running workflow executions",hide_title:!1},sidebar:"Operator Docs",previous:{title:"Naming Executions",permalink:"/cumulus/docs/v10.1.0/operator-docs/naming-executions"},next:{title:"How to replay Kinesis messages after an outage",permalink:"/cumulus/docs/v10.1.0/features/replay-kinesis-messages"}},s={},p=[],f={toc:p},g="wrapper";function m(e){var t=e.components,u=(0,o.c)(e,a);return(0,i.yg)(g,(0,r.c)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"To re-run a Cumulus workflow execution from the AWS console:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Visit the page for an individual workflow execution")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click the "New execution" button at the top right of the screen'),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of the AWS console for a Step Function execution highlighting the &quot;New execution&quot; button at the top right of the screen",src:n(63260).c,width:"2128",height:"527"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'In the "New execution" modal that appears, replace the ',(0,i.yg)("inlineCode",{parentName:"p"},"cumulus_meta.execution_name")," value in the default input with the value of the new execution ID as seen in the screenshot below"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of the AWS console showing the modal window for entering input when running a new Step Function execution",src:n(37368).c,width:"2629",height:"1033"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click the "Start execution" button'))))}m.isMDXComponent=!0},63260:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/new_execution-a28e00d4f8d05ab11704ed7c5d9744ef.png"},37368:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/rerun_execution-b06befedd428ec3eb6a37c73911b3e6e.png"}}]);