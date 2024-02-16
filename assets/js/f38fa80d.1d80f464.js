"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[39467],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(58168),r=n(98587),a=(n(96540),n(15680)),l=["components"],i={id:"queue-post-to-cmr",title:"Queue PostToCmr",hide_title:!1},u=void 0,s={unversionedId:"data-cookbooks/queue-post-to-cmr",id:"version-v10.1.0/data-cookbooks/queue-post-to-cmr",title:"Queue PostToCmr",description:"In this document, we walk through handling CMR errors in workflows by queueing PostToCmr. We assume that the user already has an ingest workflow setup.",source:"@site/versioned_docs/version-v10.1.0/data-cookbooks/queue-post-to-cmr.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/queue-post-to-cmr",permalink:"/cumulus/docs/v10.1.0/data-cookbooks/queue-post-to-cmr",draft:!1,tags:[],version:"v10.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"queue-post-to-cmr",title:"Queue PostToCmr",hide_title:!1},sidebar:"Data Cookbooks",previous:{title:"Throttling queued executions",permalink:"/cumulus/docs/v10.1.0/data-cookbooks/throttling-queued-executions"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Ingest Workflow",id:"ingest-workflow",level:2},{value:"Publish Workflow",id:"publish-workflow",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,i=(0,r.A)(e,l);return(0,a.yg)(f,(0,o.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"In this document, we walk through handling CMR errors in workflows by queueing PostToCmr. We assume that the user already has an ingest workflow setup."),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"The general concept is that the last task of the ingest workflow will be ",(0,a.yg)("inlineCode",{parentName:"p"},"QueueWorkflow"),", which queues the publish workflow. The publish workflow contains the ",(0,a.yg)("inlineCode",{parentName:"p"},"PostToCmr")," task and if a CMR error occurs during ",(0,a.yg)("inlineCode",{parentName:"p"},"PostToCmr"),", the publish workflow will add itself back onto the queue so that it can be executed when CMR is back online. This is achieved by leveraging the ",(0,a.yg)("inlineCode",{parentName:"p"},"QueueWorkflow")," task again in the publish workflow. The following diagram demonstrates this queueing process."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Diagram of workflow queueing",src:n(5069).A,width:"1004",height:"636"})),(0,a.yg)("h2",{id:"ingest-workflow"},"Ingest Workflow"),(0,a.yg)("p",null,"The last step should be the ",(0,a.yg)("inlineCode",{parentName:"p"},"QueuePublishWorkflow")," step. It should be configured with a queueUrl and workflow. In this case, the ",(0,a.yg)("inlineCode",{parentName:"p"},"queueUrl")," is a ",(0,a.yg)("a",{parentName:"p",href:"./throttling-queued-executions"},"throttled queue"),". Any ",(0,a.yg)("inlineCode",{parentName:"p"},"queueUrl")," can be specified here which is useful if you would like to use a lower priority queue. The workflow is the unprefixed workflow name that you would like to queue (e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"PublishWorkflow"),")."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'  "QueuePublishWorkflowStep": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "ReplaceConfig": {\n          "FullMessage": true\n        },\n        "task_config": {\n          "internalBucket": "{$.meta.buckets.internal.name}",\n          "stackName": "{$.meta.stack}",\n          "workflow": "{$.meta.workflow}",\n          "queueUrl": "${start_sf_queue_url}",\n          "provider": "{$.meta.provider}",\n          "collection": "{$.meta.collection}"\n        }\n      }\n    },\n    "Type": "Task",\n    "Resource": "${queue_workflow_task_arn}",\n    "Retry": [\n      {\n        "ErrorEquals": [\n          "Lambda.ServiceException",\n          "Lambda.AWSLambdaException",\n          "Lambda.SdkClientException"\n        ],\n        "IntervalSeconds": 2,\n        "MaxAttempts": 6,\n        "BackoffRate": 2\n      }\n    ],\n    "Catch": [\n      {\n        "ErrorEquals": [\n          "States.ALL"\n        ],\n        "ResultPath": "$.exception",\n        "Next": "WorkflowFailed"\n      }\n    ],\n    "End": true\n  },\n')),(0,a.yg)("h2",{id:"publish-workflow"},"Publish Workflow"),(0,a.yg)("p",null,"Configure the Catch section of your ",(0,a.yg)("inlineCode",{parentName:"p"},"PostToCmr")," task to proceed to ",(0,a.yg)("inlineCode",{parentName:"p"},"QueueWorkflow")," if a ",(0,a.yg)("inlineCode",{parentName:"p"},"CMRInternalError")," is caught. Any other error will cause the workflow to fail."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'  "Catch": [\n    {\n      "ErrorEquals": [\n        "CMRInternalError"\n      ],\n      "Next": "RequeueWorkflow"\n    },\n    {\n      "ErrorEquals": [\n        "States.ALL"\n      ],\n      "Next": "WorkflowFailed",\n      "ResultPath": "$.exception"\n    }\n  ],\n')),(0,a.yg)("p",null,"Then, configure the ",(0,a.yg)("inlineCode",{parentName:"p"},"QueueWorkflow")," task similarly to its configuration in the ingest workflow. This time, pass the current publish workflow to the task config. This allows for the publish workflow to be requeued when there is a CMR error."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "RequeueWorkflow": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "task_config": {\n          "buckets": "{$.meta.buckets}",\n          "distribution_endpoint": "{$.meta.distribution_endpoint}",\n          "workflow": "PublishGranuleQueue",\n          "queueUrl": "${start_sf_queue_url}",\n          "provider": "{$.meta.provider}",\n          "collection": "{$.meta.collection}"\n        }\n      }\n    },\n    "Type": "Task",\n    "Resource": "${queue_workflow_task_arn}",\n    "Catch": [\n      {\n        "ErrorEquals": [\n          "States.ALL"\n        ],\n        "Next": "WorkflowFailed",\n        "ResultPath": "$.exception"\n      }\n    ],\n    "Retry": [\n      {\n        "ErrorEquals": [\n          "Lambda.ServiceException",\n          "Lambda.AWSLambdaException",\n          "Lambda.SdkClientException"\n        ],\n        "IntervalSeconds": 2,\n        "MaxAttempts": 6,\n        "BackoffRate": 2\n      }\n    ],\n    "End": true\n  }\n}  \n')))}m.isMDXComponent=!0},5069:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/queue-workflow-2b24ab7d810ce065fdb2d39198cd3253.png"}}]);