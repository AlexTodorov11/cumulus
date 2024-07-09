"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[4470],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},50903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(58168),o=t(98587),r=(t(96540),t(15680)),s=["components"],i={id:"error-handling",title:"Error Handling in Workflows",hide_title:!1},l=void 0,c={unversionedId:"data-cookbooks/error-handling",id:"version-v18.3.1/data-cookbooks/error-handling",title:"Error Handling in Workflows",description:"Cumulus Workflow error handling is configurable via AWS Step Function",source:"@site/versioned_docs/version-v18.3.1/data-cookbooks/error-handling.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/error-handling",permalink:"/cumulus/docs/data-cookbooks/error-handling",draft:!1,tags:[],version:"v18.3.1",lastUpdatedBy:"Paul Pilone",lastUpdatedAt:1720534771,formattedLastUpdatedAt:"Jul 9, 2024",frontMatter:{id:"error-handling",title:"Error Handling in Workflows",hide_title:!1},sidebar:"docs",previous:{title:"CNM Workflow",permalink:"/cumulus/docs/data-cookbooks/cnm-workflow"},next:{title:"Choice States",permalink:"/cumulus/docs/data-cookbooks/choice-states"}},u={},d=[{value:"Workflow Configuration",id:"workflow-configuration",level:2},{value:"Summary",id:"summary",level:2}],m={toc:d},p="wrapper";function h(e){var n=e.components,i=(0,o.A)(e,s);return(0,r.yg)(p,(0,a.A)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Cumulus Workflow error handling is configurable via AWS Step Function\ndefinitions, which enable users to configure what the state machine does next\nwhen an exception is thrown. Read more in the AWS docs:\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html"},"How Step Functions Works: Error Handling"),"."),(0,r.yg)("p",null,"Cumulus Workflow Tasks ",(0,r.yg)("em",{parentName:"p"},"should")," throw errors and rely on the state machine logic\nto handle the error state. Errors and exceptions thrown in Cumulus Workflow\nTasks using the Cumulus Message Adapter (CMA) are caught and rethrown by the CMA\nlibraries ",(0,r.yg)("em",{parentName:"p"},"unless")," the error name contains ",(0,r.yg)("inlineCode",{parentName:"p"},"WorkflowError"),"."),(0,r.yg)("p",null,"The former (tasks which throw errors which are not ",(0,r.yg)("inlineCode",{parentName:"p"},"WorkflowError"),"s) is the\nexpected behavior. However a ",(0,r.yg)("inlineCode",{parentName:"p"},"WorkflowError")," can be used to handle errors that\nshould ",(0,r.yg)("em",{parentName:"p"},"not")," result in task failure."),(0,r.yg)("h2",{id:"workflow-configuration"},"Workflow Configuration"),(0,r.yg)("p",null,"Some best practices for error handling in Cumulus Workflows are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"States should include a ",(0,r.yg)("inlineCode",{parentName:"li"},"Catch")," configuration object which defines the\n",(0,r.yg)("inlineCode",{parentName:"li"},"ResultPath")," to be ",(0,r.yg)("inlineCode",{parentName:"li"},"$.exception"),". This passes along the entire Cumulus message\nto the next state with the addition of the ",(0,r.yg)("inlineCode",{parentName:"li"},"Error")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"Cause")," details of the\nthrown error in the ",(0,r.yg)("inlineCode",{parentName:"li"},"exception")," key. Excluding this ",(0,r.yg)("inlineCode",{parentName:"li"},"Catch")," configuration\nmeans that any execution records saved for your failed workflows will not\ninclude details about the exceptions."),(0,r.yg)("li",{parentName:"ul"},"States may be configured to ",(0,r.yg)("inlineCode",{parentName:"li"},"Retry")," a task on specified failures to handle\ntransient issues, such as those arising from resource allocation throttling,\ninstead of failing the entire workflow. Cumulus supports the AWS retry\nconfiguration outlined\n",(0,r.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html"},"here"),"\nand an example is provided in the ",(0,r.yg)("inlineCode",{parentName:"li"},"HelloWorld")," step of the ",(0,r.yg)("inlineCode",{parentName:"li"},"RetryPassWorkflow"),"\nworkflow defined in the Cumulus repository's\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/retry_pass_workflow.tf"},"example workflow ",(0,r.yg)("inlineCode",{parentName:"a"},"retry_pass_workflow")),"."),(0,r.yg)("li",{parentName:"ul"},"Tasks downstream of failed tasks should understand how to pass along\nexceptions if required. If a task throws an error which is caught by the\nworkflow configuration and passed to another state which also uses the CMA,\nthe CMA overrides the exception key to ",(0,r.yg)("inlineCode",{parentName:"li"},'"None"')," so the exception will not be\npassed to downstream tasks after the next state. This works if the exception\nis not needed in downstream tasks. If the exception is needed in downstream\ntasks, you need to re-attach the exception to the Cumulus message by setting\nthe ",(0,r.yg)("inlineCode",{parentName:"li"},"ResultPath")," to be ",(0,r.yg)("inlineCode",{parentName:"li"},"$.exception")," for the task where the error is initially\ncaught. In the example below, ",(0,r.yg)("inlineCode",{parentName:"li"},"CnmResponseFail")," catches and re-attaches the\nerror to the message."),(0,r.yg)("li",{parentName:"ul"},"If multiple downstream tasks should run after a workflow task has thrown an\nerror, you can create a separate failure branch of your workflow by chaining\ntasks that catch and re-attach the error as described above."),(0,r.yg)("li",{parentName:"ul"},"Tasks that are lambdas should be configured to retry in the event of a Lambda\nService Exception. See\n",(0,r.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/step-functions/latest/dg/bp-lambda-serviceexception.html"},"this documentation"),"\non configuring your workflow to handle transient lambda errors.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example ",(0,r.yg)("inlineCode",{parentName:"strong"},"state machine definition"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "Comment": "Tests Workflow from Kinesis Stream",\n  "StartAt": "TranslateMessage",\n  "States": {\n    "TranslateMessage": {\n      "Parameters": {\n        "cma": {\n          "event.$": "$",\n          "task_config": {\n            "cumulus_message": {\n              "outputs": [\n                {\n                  "source": "{$.cnm}",\n                  "destination": "{$.meta.cnm}"\n                },\n                {\n                  "source": "{$}",\n                  "destination": "{$.payload}"\n                }\n              ]\n            }\n          }\n        }\n      },\n      "Type": "Task",\n      "Resource": "${aws_lambda_function.cnm_to_cma_task.arn}",\n      "Retry": [\n        {\n          "ErrorEquals": [\n            "Lambda.ServiceException",\n            "Lambda.AWSLambdaException",\n            "Lambda.SdkClientException"\n          ],\n          "IntervalSeconds": 2,\n          "MaxAttempts": 6,\n          "BackoffRate": 2\n        }\n      ],\n      "Catch": [\n        {\n          "ErrorEquals": ["States.ALL"],\n          "ResultPath": "$.exception",\n          "Next": "CnmResponseFail"\n        }\n      ],\n      "Next": "SyncGranule"\n    },\n    "SyncGranule": {\n      "Parameters": {\n        "cma": {\n          "event.$": "$",\n          "ReplaceConfig": {\n            "Path": "$.payload",\n            "TargetPath": "$.payload"\n          },\n          "task_config": {\n            "provider": "{$.meta.provider}",\n            "buckets": "{$.meta.buckets}",\n            "collection": "{$.meta.collection}",\n            "downloadBucket": "{$.meta.buckets.private.name}",\n            "stack": "{$.meta.stack}",\n            "cumulus_message": {\n              "outputs": [\n                {\n                  "source": "{$.granules}",\n                  "destination": "{$.meta.input_granules}"\n                },\n                {\n                  "source": "{$}",\n                  "destination": "{$.payload}"\n                }\n              ]\n            }\n          }\n        }\n      },\n      "Type": "Task",\n      "Resource": "${module.cumulus.sync_granule_task.task_arn}",\n      "Retry": [\n        {\n          "ErrorEquals": ["States.ALL"],\n          "IntervalSeconds": 10,\n          "MaxAttempts": 3\n        }\n      ],\n      "Catch": [\n        {\n          "ErrorEquals": ["States.ALL"],\n          "ResultPath": "$.exception",\n          "Next": "CnmResponseFail"\n        }\n      ],\n      "Next": "CnmResponse"\n    },\n    "CnmResponse": {\n      "Parameters": {\n        "cma": {\n          "event.$": "$",\n          "task_config": {\n            "OriginalCNM": "{$.meta.cnm}",\n            "CNMResponseStream": "{$.meta.cnmResponseStream}",\n            "region": "us-east-1",\n            "WorkflowException": "{$.exception}",\n            "cumulus_message": {\n              "outputs": [\n                {\n                  "source": "{$}",\n                  "destination": "{$.meta.cnmResponse}"\n                },\n                {\n                  "source": "{$}",\n                  "destination": "{$.payload}"\n                }\n              ]\n            }\n          }\n        }\n      },\n      "Type": "Task",\n      "Resource": "${aws_lambda_function.cnm_response_task.arn}",\n      "Retry": [\n        {\n          "ErrorEquals": [\n            "Lambda.ServiceException",\n            "Lambda.AWSLambdaException",\n            "Lambda.SdkClientException"\n          ],\n          "IntervalSeconds": 2,\n          "MaxAttempts": 6,\n          "BackoffRate": 2\n        }\n      ],\n      "Catch": [\n        {\n          "ErrorEquals": ["States.ALL"],\n          "ResultPath": "$.exception",\n          "Next": "WorkflowFailed"\n        }\n      ],\n      "Next": "WorkflowSucceeded"\n    },\n    "CnmResponseFail": {\n      "Parameters": {\n        "cma": {\n          "event.$": "$",\n          "task_config": {\n            "OriginalCNM": "{$.meta.cnm}",\n            "CNMResponseStream": "{$.meta.cnmResponseStream}",\n            "region": "us-east-1",\n            "WorkflowException": "{$.exception}",\n            "cumulus_message": {\n              "outputs": [\n                {\n                  "source": "{$}",\n                  "destination": "{$.meta.cnmResponse}"\n                },\n                {\n                  "source": "{$}",\n                  "destination": "{$.payload}"\n                }\n              ]\n            }\n          }\n        }\n      },\n      "Type": "Task",\n      "Resource": "${aws_lambda_function.cnm_response_task.arn}",\n      "Retry": [\n        {\n          "ErrorEquals": [\n            "Lambda.ServiceException",\n            "Lambda.AWSLambdaException",\n            "Lambda.SdkClientException"\n          ],\n          "IntervalSeconds": 2,\n          "MaxAttempts": 6,\n          "BackoffRate": 2\n        }\n      ],\n      "Catch": [\n        {\n          "ErrorEquals": ["States.ALL"],\n          "ResultPath": "$.exception",\n          "Next": "WorkflowFailed"\n        }\n      ],\n      "Next": "WorkflowFailed"\n    },\n    "WorkflowSucceeded": {\n      "Type": "Succeed"\n    },\n    "WorkflowFailed": {\n      "Type": "Fail",\n      "Cause": "Workflow failed"\n    }\n  }\n}\n')),(0,r.yg)("p",null,"The above results in a workflow which is visualized in the diagram below:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Screenshot of a visualization of an AWS Step Function workflow definition with branching logic for failures",src:t(52611).A,width:"510",height:"605"})),(0,r.yg)("h2",{id:"summary"},"Summary"),(0,r.yg)("p",null,"Error handling should (mostly) be the domain of workflow configuration."))}h.isMDXComponent=!0},52611:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/kinesis-workflow-d6d813a854179d0e0b113af25a156e4e.png"}}]);