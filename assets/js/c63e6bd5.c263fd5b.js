"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[45056],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>g});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,g=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(45072),o=r(95656),a=(r(11504),r(95788)),s=["components"],i={id:"interfaces",title:"Interfaces",hide_title:!1},u=void 0,l={unversionedId:"interfaces",id:"version-v9.0.0/interfaces",title:"Interfaces",description:"Cumulus has multiple interfaces that allow interaction with discrete components of the system, such as starting workflows via SNS/Kinesis/SQS, manually queueing workflow start messages, submitting SNS notifications for completed workflows, and the many operations allowed by the Cumulus API.",source:"@site/versioned_docs/version-v9.0.0/interfaces.md",sourceDirName:".",slug:"/interfaces",permalink:"/cumulus/docs/v9.0.0/interfaces",draft:!1,tags:[],version:"v9.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"interfaces",title:"Interfaces",hide_title:!1},sidebar:"docs",previous:{title:"Architecture",permalink:"/cumulus/docs/v9.0.0/architecture"},next:{title:"Cumulus Team",permalink:"/cumulus/docs/v9.0.0/team"}},c={},p=[{value:"Workflow triggers and queuing",id:"workflow-triggers-and-queuing",level:2},{value:"Kinesis stream",id:"kinesis-stream",level:3},{value:"SQS queue for executions",id:"sqs-queue-for-executions",level:3},{value:"Workflow executions",id:"workflow-executions",level:2},{value:"Workflow reporting",id:"workflow-reporting",level:2},{value:"SNS reporting topics",id:"sns-reporting-topics",level:3},{value:"Cumulus API",id:"cumulus-api",level:3}],m={toc:p},f="wrapper";function g(e){var t=e.components,i=(0,o.c)(e,s);return(0,a.yg)(f,(0,n.c)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Cumulus has multiple interfaces that allow interaction with discrete components of the system, such as starting workflows via SNS/Kinesis/SQS, manually queueing workflow start messages, submitting SNS notifications for completed workflows, and the many operations allowed by the Cumulus API."),(0,a.yg)("p",null,"The diagram below illustrates the workflow process in detail and the various interfaces that allow starting of workflows, reporting of workflow information, and database create operations that occur when a workflow reporting message is processed. For interfaces with expected input or output schemas, details are provided below."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note:")," This diagram is current of v1.18.0."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Architecture diagram showing the interfaces for triggering and reporting of Cumulus workflow executions",src:r(34724).c})),(0,a.yg)("h2",{id:"workflow-triggers-and-queuing"},"Workflow triggers and queuing"),(0,a.yg)("h3",{id:"kinesis-stream"},"Kinesis stream"),(0,a.yg)("p",null,"As a Kinesis stream is consumed by the ",(0,a.yg)("inlineCode",{parentName:"p"},"messageConsumer")," Lambda to queue workflow executions, the incoming event is validated against ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/lambdas/kinesis-consumer-event-schema.json"},"this consumer schema")," by the ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/ajv"},(0,a.yg)("inlineCode",{parentName:"a"},"ajv")," package"),"."),(0,a.yg)("h3",{id:"sqs-queue-for-executions"},"SQS queue for executions"),(0,a.yg)("p",null,"The messages put into the SQS queue for executions should conform to the ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v9.0.0/workflows/cumulus-task-message-flow#cumulus-message-format"},"Cumulus message format"),"."),(0,a.yg)("h2",{id:"workflow-executions"},"Workflow executions"),(0,a.yg)("p",null,"See the ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v9.0.0/workflows/"},"documentation on Cumulus workflows"),"."),(0,a.yg)("h2",{id:"workflow-reporting"},"Workflow reporting"),(0,a.yg)("h3",{id:"sns-reporting-topics"},"SNS reporting topics"),(0,a.yg)("p",null,"For granule and PDR reporting, the topics will only receive data if the ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v9.0.0/workflows/cumulus-task-message-flow#cumulus-message-format"},"Cumulus workflow execution message")," meets the following criteria:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Granules - workflow message contains granule data in ",(0,a.yg)("inlineCode",{parentName:"li"},"payload.granules")),(0,a.yg)("li",{parentName:"ul"},"PDRs - workflow message contains PDR data in ",(0,a.yg)("inlineCode",{parentName:"li"},"payload.pdr"))),(0,a.yg)("p",null,"The messages published to the SNS reporting topics for executions and PDRs and the ",(0,a.yg)("inlineCode",{parentName:"p"},"record")," property in the messages published to the granules SNS topic should conform to the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"model schema")," for each data type."),(0,a.yg)("p",null,"Further detail on workflow reporting and how to interact with these interfaces can be found in the ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v9.0.0/data-cookbooks/ingest-notifications"},"workflow notifications data cookbook"),"."),(0,a.yg)("h3",{id:"cumulus-api"},"Cumulus API"),(0,a.yg)("p",null,"See the ",(0,a.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-api/"},"Cumulus API documentation"),"."))}g.isMDXComponent=!0},34724:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/interfaces-fcbe751f37dd14ad2da7e27715e91371.svg"}}]);