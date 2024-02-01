"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[36544],{95788:(e,o,t)=>{t.d(o,{Iu:()=>c,yg:()=>m});var n=t(11504);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var o=n.useContext(u),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},c=function(e){var o=s(e.components);return n.createElement(u.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},f=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return t?n.createElement(m,a(a({ref:o},c),{},{components:t})):n.createElement(m,a({ref:o},c))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var u in o)hasOwnProperty.call(o,u)&&(i[u]=o[u]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7432:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(45072),r=t(95656),l=(t(11504),t(95788)),a=["components"],i={id:"hello-world",title:"HelloWorld Workflow",hide_title:!1},u=void 0,s={unversionedId:"data-cookbooks/hello-world",id:"version-v10.0.0/data-cookbooks/hello-world",title:"HelloWorld Workflow",description:"Example task meant to be a sanity check/introduction to the Cumulus workflows.",source:"@site/versioned_docs/version-v10.0.0/data-cookbooks/hello-world.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/hello-world",permalink:"/cumulus/docs/v10.0.0/data-cookbooks/hello-world",draft:!1,tags:[],version:"v10.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"hello-world",title:"HelloWorld Workflow",hide_title:!1},sidebar:"Data Cookbooks",previous:{title:"About Cookbooks",permalink:"/cumulus/docs/v10.0.0/data-cookbooks/about-cookbooks"},next:{title:"Ingest Notification in Workflows",permalink:"/cumulus/docs/v10.0.0/data-cookbooks/ingest-notifications"}},c={},d=[{value:"Pre-Deployment Configuration",id:"pre-deployment-configuration",level:2},{value:"Workflow Configuration",id:"workflow-configuration",level:3},{value:"Task Configuration",id:"task-configuration",level:3},{value:"Execution",id:"execution",level:2},{value:"Output/Results",id:"outputresults",level:3},{value:"Summary",id:"summary",level:2}],p={toc:d},f="wrapper";function m(e){var o=e.components,i=(0,r.c)(e,a);return(0,l.yg)(f,(0,n.c)({},p,i,{components:o,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Example task meant to be a sanity check/introduction to the Cumulus workflows."),(0,l.yg)("h2",{id:"pre-deployment-configuration"},"Pre-Deployment Configuration"),(0,l.yg)("h3",{id:"workflow-configuration"},"Workflow Configuration"),(0,l.yg)("p",null,"A workflow definition can be found in the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy/blob/master/cumulus-tf/hello_world_workflow.tf"},"template repository hello_world_workflow module"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "Comment": "Returns Hello World",\n  "StartAt": "HelloWorld",\n  "States": {\n    "HelloWorld": {\n      "Parameters": {\n        "cma": {\n          "event.$": "$",\n          "task_config": {\n            "buckets": "{$.meta.buckets}",\n            "provider": "{$.meta.provider}",\n            "collection": "{$.meta.collection}"\n          }\n        }\n      },\n      "Type": "Task",\n      "Resource": "${module.cumulus.hello_world_task.task_arn}",\n      "Retry": [\n        {\n          "ErrorEquals": [\n            "Lambda.ServiceException",\n            "Lambda.AWSLambdaException",\n            "Lambda.SdkClientException"\n          ],\n          "IntervalSeconds": 2,\n          "MaxAttempts": 6,\n          "BackoffRate": 2\n        }\n      ],\n      "End": true\n    }\n  }\n}\n')),(0,l.yg)("p",null,"Workflow ",(0,l.yg)("strong",{parentName:"p"},"error-handling")," can be configured as discussed in the ",(0,l.yg)("a",{parentName:"p",href:"/cumulus/docs/v10.0.0/data-cookbooks/error-handling"},"Error-Handling")," cookbook."),(0,l.yg)("h3",{id:"task-configuration"},"Task Configuration"),(0,l.yg)("p",null,"The HelloWorld task is provided for you as part of the ",(0,l.yg)("inlineCode",{parentName:"p"},"cumulus")," terraform module, no configuration is needed."),(0,l.yg)("p",null,"If you want to manually deploy your own version of this Lambda for testing, you can copy the Lambda resource definition located in the Cumulus source code at ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tf-modules/ingest/hello-world-task.tf"},(0,l.yg)("inlineCode",{parentName:"a"},"cumulus/tf-modules/ingest/hello-world-task.tf")),". The Lambda source code is located in the Cumulus source code at ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tasks/hello-world/"},"'cumulus/tasks/hello-world'"),"."),(0,l.yg)("h2",{id:"execution"},"Execution"),(0,l.yg)("p",null,"We will focus on using the Cumulus dashboard to schedule the execution of a HelloWorld workflow."),(0,l.yg)("p",null,"Our goal here is to create a rule through the Cumulus dashboard that will define the scheduling and execution of our HelloWorld workflow. Let's navigate to the ",(0,l.yg)("inlineCode",{parentName:"p"},"Rules")," page and click ",(0,l.yg)("inlineCode",{parentName:"p"},"Add a rule"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "collection": {                  # collection values can be configured and found on the Collections page\n    "name": "${collection_name}",\n    "version": "${collection_version}"\n  },\n  "name": "helloworld_rule",\n  "provider": "${provider}",       # found on the Providers page\n  "rule": {\n    "type": "onetime"\n  },\n  "state": "ENABLED",\n  "workflow": "HelloWorldWorkflow" # This can be found on the Workflows page\n}\n')),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of AWS Step Function execution graph for the HelloWorld workflow",src:t(8580).c,width:"312",height:"407"}),"\n",(0,l.yg)("em",{parentName:"p"},"Executed workflow as seen in AWS Console")),(0,l.yg)("h3",{id:"outputresults"},"Output/Results"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"Executions")," page presents a list of all executions, their status (running, failed, or completed), to which workflow the execution belongs, along with other information. The rule defined in the previous section should start an execution of its own accord, and the status of that execution can be tracked here."),(0,l.yg)("p",null,"To get some deeper information on the execution, click on the value in the ",(0,l.yg)("inlineCode",{parentName:"p"},"Name")," column of your execution of interest. This should bring up a visual representation of the workflow similar to that shown above, execution details, and a list of events."),(0,l.yg)("h2",{id:"summary"},"Summary"),(0,l.yg)("p",null,"Setting up the HelloWorld workflow on the Cumulus dashboard is the tip of the iceberg, so to speak. The task and step-function need to be configured before Cumulus deployment. A compatible collection and provider must be configured and applied to the rule. Finally, workflow execution status can be viewed via the workflows tab on the dashboard."))}m.isMDXComponent=!0},8580:(e,o,t)=>{t.d(o,{c:()=>n});const n=t.p+"assets/images/hello_world_workflow-f1f1d9f350716f951bcb37a843736b8b.png"}}]);