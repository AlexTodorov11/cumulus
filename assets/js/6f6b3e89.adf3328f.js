"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[1872],{95788:(e,t,r)=>{r.d(t,{Iu:()=>d,yg:()=>f});var a=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(45072),o=r(95656),n=(r(11504),r(95788)),l=["components"],i={id:"workflow-add-new-lambda",title:"Workflow - Add New Lambda",hide_title:!1},s=void 0,u={unversionedId:"integrator-guide/workflow-add-new-lambda",id:"version-v15.0.2/integrator-guide/workflow-add-new-lambda",title:"Workflow - Add New Lambda",description:"You can develop a workflow task in AWS Lambda or Elastic Container Service (ECS). AWS ECS requires Docker. For a list of tasks to use go to our Cumulus Tasks page.",source:"@site/versioned_docs/version-v15.0.2/integrator-guide/workflow-add-new-lambda.md",sourceDirName:"integrator-guide",slug:"/integrator-guide/workflow-add-new-lambda",permalink:"/cumulus/docs/v15.0.2/integrator-guide/workflow-add-new-lambda",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"workflow-add-new-lambda",title:"Workflow - Add New Lambda",hide_title:!1},sidebar:"docs",previous:{title:"Integrator Common Use Cases",permalink:"/cumulus/docs/v15.0.2/integrator-guide/int-common-use-cases"},next:{title:"Workflow - Troubleshoot Failed Step(s)",permalink:"/cumulus/docs/v15.0.2/integrator-guide/workflow-ts-failed-step"}},d={},p=[{value:"Steps",id:"steps",level:2}],c={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,o.c)(e,l);return(0,n.yg)(m,(0,a.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"You can develop a workflow task in AWS Lambda or Elastic Container Service (ECS). AWS ECS requires Docker. For a list of tasks to use go to our ",(0,n.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page"),"."),(0,n.yg)("p",null,"The following steps are to help you along as you write a new Lambda that integrates with a Cumulus workflow. This will aid you with the understanding of the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter"},"Cumulus Message Adapter (CMA)")," process."),(0,n.yg)("h2",{id:"steps"},"Steps"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Define New Lambda in Terraform")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Add Task in JSON Object"),(0,n.yg)("p",{parentName:"li"},"For details on how to set up a workflow via CMA go to the\xa0",(0,n.yg)("a",{parentName:"p",href:"../workflows/cumulus-task-message-flow"},"CMA Tasks: Message Flow"),"."),(0,n.yg)("p",{parentName:"li"},"You will need to assign input and output for the new task and follow the CMA contract ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter/blob/master/CONTRACT.md"},"here"),". This\xa0contract defines how libraries should call the\xa0cumulus-message-adapter\xa0to integrate a task into an existing Cumulus Workflow.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Verify New Task"),(0,n.yg)("p",{parentName:"li"},"Check the updated workflow in AWS and in Cumulus."))))}f.isMDXComponent=!0}}]);