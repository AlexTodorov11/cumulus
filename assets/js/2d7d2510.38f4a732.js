"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[17040],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),g=n,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},35684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=r(58168),n=r(98587),o=(r(96540),r(15680)),s=["components"],i={id:"workflow-triggers",title:"Workflow Triggers",hide_title:!1},l=void 0,u={unversionedId:"workflows/workflow-triggers",id:"version-v15.0.2/workflows/workflow-triggers",title:"Workflow Triggers",description:"For a workflow to run, it needs to be associated with a rule (see rule configuration). The rule configuration determines how and when a workflow execution is triggered. Rules can be triggered one time, on a schedule, or by new data written to a kinesis stream.",source:"@site/versioned_docs/version-v15.0.2/workflows/workflow-triggers.md",sourceDirName:"workflows",slug:"/workflows/workflow-triggers",permalink:"/cumulus/docs/v15.0.2/workflows/workflow-triggers",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"workflow-triggers",title:"Workflow Triggers",hide_title:!1},sidebar:"docs",previous:{title:"Cumulus Tasks: Message Flow",permalink:"/cumulus/docs/v15.0.2/workflows/cumulus-task-message-flow"},next:{title:"How to Deploy Cumulus",permalink:"/cumulus/docs/v15.0.2/deployment/"}},c={},d=[],p={toc:d},g="wrapper";function m(e){var t=e.components,i=(0,n.A)(e,s);return(0,o.yg)(g,(0,a.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"For a workflow to run, it needs to be associated with a rule (see ",(0,o.yg)("a",{parentName:"p",href:"/cumulus/docs/v15.0.2/configuration/data-management-types#rules"},"rule configuration"),"). The rule configuration determines how and when a workflow execution is triggered. Rules can be triggered one time, on a schedule, or by new data written to a kinesis stream."),(0,o.yg)("p",null,"There are three lambda functions in the API package responsible for scheduling and starting workflows: ",(0,o.yg)("inlineCode",{parentName:"p"},"SF scheduler"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"message consumer"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"SF starter"),". Each Cumulus instance comes with a Start SF ",(0,o.yg)("a",{parentName:"p",href:"https://aws.amazon.com/sqs/"},"SQS queue"),"."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"SF scheduler")," lambda puts a message onto the ",(0,o.yg)("inlineCode",{parentName:"p"},"Start SF")," queue. This message is picked up the ",(0,o.yg)("inlineCode",{parentName:"p"},"Start SF")," lambda and an execution is started with the body of the message as the input."),(0,o.yg)("p",null,"When a one time rule is created, the ",(0,o.yg)("inlineCode",{parentName:"p"},"schedule SF")," lambda is triggered. Rules that are not one time are associated with a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html"},"CloudWatch event")," which will manage the trigger of the lambdas that trigger the workflows."),(0,o.yg)("p",null,"For a scheduled rule, the Cloudwatch event is triggered on the given schedule which calls directly to the ",(0,o.yg)("inlineCode",{parentName:"p"},"schedule SF")," lambda."),(0,o.yg)("p",null,"For a kinesis rule, when data is added to the kinesis stream, the Cloudwatch event is triggered, which calls the ",(0,o.yg)("inlineCode",{parentName:"p"},"message consumer")," lambda. The ",(0,o.yg)("inlineCode",{parentName:"p"},"message consumer")," lambda parses the kinesis message and finds all of the rules associated with that message. For each rule (which corresponds to one workflow), the ",(0,o.yg)("inlineCode",{parentName:"p"},"schedule SF")," lambda is triggered to queue a message to start the workflow."),(0,o.yg)("p",null,"For an sns rule, when a message is published to the SNS topic, the ",(0,o.yg)("inlineCode",{parentName:"p"},"message consumer")," receives the SNS message (JSON expected), parses it into an object, starts a new execution of the workflow associated with the rule and passes the object in the ",(0,o.yg)("inlineCode",{parentName:"p"},"payload")," field of the Cumulus message."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Diagram showing how workflows are scheduled via rules",src:r(51688).A,width:"527",height:"297"})))}m.isMDXComponent=!0},51688:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/schedule-workflows-caa06b7beed8e97aa61a70c7b1cbe248.png"}}]);