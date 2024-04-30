"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[1592],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),g=a,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},50833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var r=t(58168),a=t(98587),o=(t(96540),t(15680)),i=["components"],u={id:"naming-executions",title:"Naming Executions",hide_title:!1},l=void 0,s={unversionedId:"operator-docs/naming-executions",id:"version-v18.1.0/operator-docs/naming-executions",title:"Naming Executions",description:"By default, Cumulus will assign a random name to workflow executions. If",source:"@site/versioned_docs/version-v18.1.0/operator-docs/naming-executions.md",sourceDirName:"operator-docs",slug:"/operator-docs/naming-executions",permalink:"/cumulus/docs/v18.1.0/operator-docs/naming-executions",draft:!1,tags:[],version:"v18.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1698355623,formattedLastUpdatedAt:"Oct 26, 2023",frontMatter:{id:"naming-executions",title:"Naming Executions",hide_title:!1},sidebar:"docs",previous:{title:"CMR Operations",permalink:"/cumulus/docs/v18.1.0/operator-docs/cmr-operations"},next:{title:"Rerunning workflow executions",permalink:"/cumulus/docs/v18.1.0/troubleshooting/rerunning-workflow-executions"}},c={},p=[{value:"Naming executions triggered by rules",id:"naming-executions-triggered-by-rules",level:2},{value:"Naming executions enqueued by the QueueGranules and QueuePdrs tasks",id:"naming-executions-enqueued-by-the-queuegranules-and-queuepdrs-tasks",level:2},{value:"Setting executionNamePrefix config for QueueGranules using rule.meta",id:"setting-executionnameprefix-config-for-queuegranules-using-rulemeta",level:3}],m={toc:p},g="wrapper";function d(e){var n=e.components,t=(0,a.A)(e,i);return(0,o.yg)(g,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"By default, Cumulus will assign a random name to workflow executions. If\ndesired, though, a configurable prefix can be added to those execution names."),(0,o.yg)("h2",{id:"naming-executions-triggered-by-rules"},"Naming executions triggered by rules"),(0,o.yg)("p",null,"Rules now have an optional ",(0,o.yg)("inlineCode",{parentName:"p"},"executionNamePrefix")," property. If set, any workflows\ntriggered directly by that rule will have an execution name that starts with\nthat prefix."),(0,o.yg)("h2",{id:"naming-executions-enqueued-by-the-queuegranules-and-queuepdrs-tasks"},"Naming executions enqueued by the QueueGranules and QueuePdrs tasks"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"QueueGranules")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"QueuePdrs")," tasks add executions to a queue to be run\nlater. These two tasks now support an optional config property called\n",(0,o.yg)("inlineCode",{parentName:"p"},"executionNamePrefix"),". If specified, any executions enqueued by those tasks will\nhave an execution name that begins with that prefix. The value of that prefix\nshould be configured in the workflow that contains the ",(0,o.yg)("inlineCode",{parentName:"p"},"QueueGranules")," or\n",(0,o.yg)("inlineCode",{parentName:"p"},"QueuePdrs")," step."),(0,o.yg)("p",null,"In the following excerpt, the ",(0,o.yg)("inlineCode",{parentName:"p"},"QueueGranules")," ",(0,o.yg)("inlineCode",{parentName:"p"},"config.executionNamePrefix"),"\nproperty is set using the value configured in the workflow's\n",(0,o.yg)("inlineCode",{parentName:"p"},"meta.executionNamePrefix"),"."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"This ",(0,o.yg)("inlineCode",{parentName:"p"},"meta.executionNamePrefix")," property should not be confused with the optional rule ",(0,o.yg)("inlineCode",{parentName:"p"},"executionNamePrefix")," property from the previous section. Setting ",(0,o.yg)("inlineCode",{parentName:"p"},"executionNamePrefix")," as a root property of the rule will set a prefix for the names of any workflows triggered by the rule. Setting ",(0,o.yg)("inlineCode",{parentName:"p"},"meta.executionNamePrefix")," on the rule will set ",(0,o.yg)("inlineCode",{parentName:"p"},"meta.executionNamePrefix")," in the workflow messages generated for this rule, allowing workflow steps like ",(0,o.yg)("inlineCode",{parentName:"p"},"QueueGranules")," to read from the message ",(0,o.yg)("inlineCode",{parentName:"p"},"meta.executionNamePrefix")," for their config. Then, workflows scheduled by ",(0,o.yg)("inlineCode",{parentName:"p"},"QueueGranules")," would use the configured execution name prefix.")),(0,o.yg)("h3",{id:"setting-executionnameprefix-config-for-queuegranules-using-rulemeta"},"Setting executionNamePrefix config for QueueGranules using rule.meta"),(0,o.yg)("p",null,'If you wanted to use a prefix of "my-prefix", you would create a rule with a ',(0,o.yg)("inlineCode",{parentName:"p"},"meta")," property similar to the following Rule snippet:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  ...other rule keys here...\n  "meta":\n    {\n      "executionNamePrefix": "my-prefix"\n    }\n}\n')),(0,o.yg)("p",null,"The value of ",(0,o.yg)("inlineCode",{parentName:"p"},"meta.executionNamePrefix")," from the rule will be set as ",(0,o.yg)("inlineCode",{parentName:"p"},"meta.executionNamePrefix"),"  in the workflow message."),(0,o.yg)("p",null,'Then, the workflow could contain a "QueueGranules" step with the following state, which uses ',(0,o.yg)("inlineCode",{parentName:"p"},"meta.executionNamePrefix")," from the message as the value for the ",(0,o.yg)("inlineCode",{parentName:"p"},"executionNamePrefix"),' config to the "QueueGranules" step:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "QueueGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "ReplaceConfig": {\n          "FullMessage": true\n        },\n        "task_config": {\n          "queueUrl": "${start_sf_queue_url}",\n          "provider": "{$.meta.provider}",\n          "internalBucket": "{$.meta.buckets.internal.name}",\n          "stackName": "{$.meta.stack}",\n          "granuleIngestWorkflow": "${ingest_granule_workflow_name}",\n          "executionNamePrefix": "{$.meta.executionNamePrefix}"\n        }\n      }\n    },\n    "Type": "Task",\n    "Resource": "${queue_granules_task_arn}",\n    "Retry": [\n      {\n        "ErrorEquals": [\n          "Lambda.ServiceException",\n          "Lambda.AWSLambdaException",\n          "Lambda.SdkClientException"\n        ],\n        "IntervalSeconds": 2,\n        "MaxAttempts": 6,\n        "BackoffRate": 2\n      }\n    ],\n    "Catch": [\n      {\n        "ErrorEquals": [\n          "States.ALL"\n        ],\n        "ResultPath": "$.exception",\n        "Next": "WorkflowFailed"\n      }\n    ],\n    "End": true\n  },\n}\n')))}d.isMDXComponent=!0}}]);