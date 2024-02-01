"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[3880],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>m});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(45072),a=r(95656),o=(r(11504),r(95788)),s=["components"],i={id:"workflow-triggers",title:"Workflow Triggers",hide_title:!1},l=void 0,u={unversionedId:"workflows/workflow-triggers",id:"version-v17.0.0/workflows/workflow-triggers",title:"Workflow Triggers",description:"For a workflow to run, it needs to be associated with a rule (see rule configuration). The rule configuration determines how and when a workflow execution is triggered. Rules can be triggered one time, on a schedule, or by new data written to a kinesis stream.",source:"@site/versioned_docs/version-v17.0.0/workflows/workflow-triggers.md",sourceDirName:"workflows",slug:"/workflows/workflow-triggers",permalink:"/cumulus/docs/v17.0.0/workflows/workflow-triggers",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1692022753,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"workflow-triggers",title:"Workflow Triggers",hide_title:!1},sidebar:"docs",previous:{title:"Workflow Inputs & Outputs",permalink:"/cumulus/docs/v17.0.0/workflows/input_output"},next:{title:"Workflow Message Granule Writes",permalink:"/cumulus/docs/v17.0.0/workflows/message_granule_writes"}},c={},d=[],p={toc:d},g="wrapper";function m(e){var t=e.components,i=(0,a.c)(e,s);return(0,o.yg)(g,(0,n.c)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"For a workflow to run, it needs to be associated with a rule (see ",(0,o.yg)("a",{parentName:"p",href:"/cumulus/docs/v17.0.0/configuration/data-management-types#rules"},"rule configuration"),"). The rule configuration determines how and when a workflow execution is triggered. Rules can be triggered one time, on a schedule, or by new data written to a kinesis stream."),(0,o.yg)("p",null,"There are three lambda functions in the API package responsible for scheduling and starting workflows: ",(0,o.yg)("inlineCode",{parentName:"p"},"SF scheduler"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"message consumer"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"SF starter"),". Each Cumulus instance comes with a Start SF ",(0,o.yg)("a",{parentName:"p",href:"https://aws.amazon.com/sqs/"},"SQS queue"),"."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"SF scheduler")," lambda puts a message onto the ",(0,o.yg)("inlineCode",{parentName:"p"},"Start SF")," queue. This message is picked up the ",(0,o.yg)("inlineCode",{parentName:"p"},"Start SF")," lambda and an execution is started with the body of the message as the input."),(0,o.yg)("p",null,"When a one time rule is created, the ",(0,o.yg)("inlineCode",{parentName:"p"},"schedule SF")," lambda is triggered. Rules that are not one time are associated with a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html"},"CloudWatch event")," which will manage the trigger of the lambdas that trigger the workflows."),(0,o.yg)("p",null,"For a scheduled rule, the Cloudwatch event is triggered on the given schedule which calls directly to the ",(0,o.yg)("inlineCode",{parentName:"p"},"schedule SF")," lambda."),(0,o.yg)("p",null,"For a kinesis rule, when data is added to the kinesis stream, the Cloudwatch event is triggered, which calls the ",(0,o.yg)("inlineCode",{parentName:"p"},"message consumer")," lambda. The ",(0,o.yg)("inlineCode",{parentName:"p"},"message consumer")," lambda parses the kinesis message and finds all of the rules associated with that message. For each rule (which corresponds to one workflow), the ",(0,o.yg)("inlineCode",{parentName:"p"},"schedule SF")," lambda is triggered to queue a message to start the workflow."),(0,o.yg)("p",null,"For an sns rule, when a message is published to the SNS topic, the ",(0,o.yg)("inlineCode",{parentName:"p"},"message consumer")," receives the SNS message (JSON expected), parses it into an object, starts a new execution of the workflow associated with the rule and passes the object in the ",(0,o.yg)("inlineCode",{parentName:"p"},"payload")," field of the Cumulus message."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Diagram showing how workflows are scheduled via rules",src:r(44572).c,width:"527",height:"297"})))}m.isMDXComponent=!0},44572:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/schedule-workflows-caa06b7beed8e97aa61a70c7b1cbe248.png"}}]);