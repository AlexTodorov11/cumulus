"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[43486],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||g[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var r=n(58168),o=n(98587),i=(n(96540),n(15680)),a=["components"],u={id:"rerunning-workflow-executions",title:"Rerunning workflow executions",hide_title:!1},l=void 0,c={unversionedId:"troubleshooting/rerunning-workflow-executions",id:"version-v16.0.0/troubleshooting/rerunning-workflow-executions",title:"Rerunning workflow executions",description:"To rerun a Cumulus workflow execution from the AWS console:",source:"@site/versioned_docs/version-v16.0.0/troubleshooting/rerunning-workflow-executions.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/rerunning-workflow-executions",permalink:"/cumulus/docs/v16.0.0/troubleshooting/rerunning-workflow-executions",draft:!1,tags:[],version:"v16.0.0",lastUpdatedBy:"Nate Pauzenga",lastUpdatedAt:1689363144,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"rerunning-workflow-executions",title:"Rerunning workflow executions",hide_title:!1},sidebar:"docs",previous:{title:"Troubleshooting Deployment",permalink:"/cumulus/docs/v16.0.0/troubleshooting/troubleshooting-deployment"},next:{title:"Reindexing Elasticsearch Guide",permalink:"/cumulus/docs/v16.0.0/troubleshooting/reindex-elasticsearch"}},s={},p=[],g={toc:p},f="wrapper";function m(e){var t=e.components,u=(0,o.A)(e,a);return(0,i.yg)(f,(0,r.A)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"To rerun a Cumulus workflow execution from the AWS console:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Visit the page for an individual workflow execution")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click the "New execution" button at the top right of the screen'),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of the AWS console for a Step Function execution highlighting the &quot;New execution&quot; button at the top right of the screen",src:n(10566).A,width:"2128",height:"527"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'In the "New execution" modal that appears, replace the ',(0,i.yg)("inlineCode",{parentName:"p"},"cumulus_meta.execution_name")," value in the default input with the value of the new execution ID as seen in the screenshot below"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of the AWS console showing the modal window for entering input when running a new Step Function execution",src:n(26942).A,width:"2629",height:"1033"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click the "Start execution" button'))))}m.isMDXComponent=!0},10566:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/new_execution-a28e00d4f8d05ab11704ed7c5d9744ef.png"},26942:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/rerun_execution-b06befedd428ec3eb6a37c73911b3e6e.png"}}]);