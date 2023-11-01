"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[32108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"run-tasks-in-lambda-or-docker",title:"Run Step Function Tasks in AWS Lambda or Docker",hide_title:!1},u=void 0,l={unversionedId:"data-cookbooks/run-tasks-in-lambda-or-docker",id:"version-v17.0.0/data-cookbooks/run-tasks-in-lambda-or-docker",title:"Run Step Function Tasks in AWS Lambda or Docker",description:"Overview",source:"@site/versioned_docs/version-v17.0.0/data-cookbooks/run-tasks-in-lambda-or-docker.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/run-tasks-in-lambda-or-docker",permalink:"/cumulus/docs/v17.0.0/data-cookbooks/run-tasks-in-lambda-or-docker",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1692022753,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"run-tasks-in-lambda-or-docker",title:"Run Step Function Tasks in AWS Lambda or Docker",hide_title:!1},sidebar:"docs",previous:{title:"Tracking Ancillary Files",permalink:"/cumulus/docs/v17.0.0/data-cookbooks/tracking-files"},next:{title:"Throttling queued executions",permalink:"/cumulus/docs/v17.0.0/data-cookbooks/throttling-queued-executions"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"When to use Lambda",id:"when-to-use-lambda",level:2},{value:"Step Function Activities and <code>cumulus-ecs-task</code>",id:"step-function-activities-and-cumulus-ecs-task",level:2},{value:"Example: Replacing AWS Lambda with a Docker container run on ECS",id:"example-replacing-aws-lambda-with-a-docker-container-run-on-ecs",level:2},{value:"Final note",id:"final-note",level:2}],p={toc:m},d="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-tasks.html"},"AWS Step Function Tasks")," can run tasks on ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda")," or on ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ecs/"},"AWS Elastic Container Service (ECS)")," as a Docker container."),(0,o.kt)("p",null,"Lambda provides serverless architecture, providing the best option for minimizing cost and server management. ECS provides the fullest extent of AWS EC2 resources via the flexibility to execute arbitrary code on any AWS EC2 instance type."),(0,o.kt)("h2",{id:"when-to-use-lambda"},"When to use Lambda"),(0,o.kt)("p",null,"You should use AWS Lambda whenever all of the following are true:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The task runs on one of the supported ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html"},"Lambda Runtimes"),". At time of this writing, supported runtimes include versions of python, Java, Ruby, node.js, Go and .NET."),(0,o.kt)("li",{parentName:"ul"},"The lambda package is less than 50 MB in size, zipped."),(0,o.kt)("li",{parentName:"ul"},"The task consumes less than each of the following resources:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"3008 MB memory allocation"),(0,o.kt)("li",{parentName:"ul"},"512 MB disk storage (must be written to ",(0,o.kt)("inlineCode",{parentName:"li"},"/tmp"),")"),(0,o.kt)("li",{parentName:"ul"},"15 minutes of execution time")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/limits.html"},"this page")," for a complete and up-to-date list of AWS Lambda limits.")),(0,o.kt)("p",null,"If your task requires more than any of these resources or an unsupported runtime, creating a Docker image which can be run on ECS is the way to go. Cumulus supports running any lambda package (and its configured layers) as a Docker container with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-ecs-task"},(0,o.kt)("inlineCode",{parentName:"a"},"cumulus-ecs-task")),"."),(0,o.kt)("h2",{id:"step-function-activities-and-cumulus-ecs-task"},"Step Function Activities and ",(0,o.kt)("inlineCode",{parentName:"h2"},"cumulus-ecs-task")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-activities.html"},"Step Function Activities"),' enable a state machine task to "publish" an activity task which can be picked up by any activity worker. Activity workers can run pretty much anywhere, but Cumulus workflows support the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-ecs-task"},(0,o.kt)("inlineCode",{parentName:"a"},"cumulus-ecs-task"))," activity worker. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus-ecs-task")," worker runs as a Docker container on the Cumulus ECS cluster."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus-ecs-task")," container takes an AWS Lambda Amazon Resource Name (ARN) as an argument (see ",(0,o.kt)("inlineCode",{parentName:"p"},"--lambdaArn")," in the example below). This ARN argument is defined at deployment time. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus-ecs-task")," worker polls for new Step Function Activity Tasks. When a Step Function executes, the worker (container) picks up the activity task and runs the code contained in the lambda package defined on deployment."),(0,o.kt)("h2",{id:"example-replacing-aws-lambda-with-a-docker-container-run-on-ecs"},"Example: Replacing AWS Lambda with a Docker container run on ECS"),(0,o.kt)("p",null,"This example will use an already-defined workflow from the ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus")," module that includes the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/ingest/queue-granules-task.tf"},(0,o.kt)("inlineCode",{parentName:"a"},"QueueGranules")," task")," in its configuration."),(0,o.kt)("p",null,"The following example is an excerpt from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/discover_granules_workflow.asl.json"},"Discover Granules workflow")," containing the step definition for the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueueGranules")," step:"),(0,o.kt)("admonition",{title:"interpolated values",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"${ingest_granule_workflow_name}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"${queue_granules_task_arn}")," are interpolated values that refer to Terraform resources. See the example deployment code for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/discover_granules_workflow.tf"},"Discover Granules workflow"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "QueueGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "ReplaceConfig": {\n          "FullMessage": true\n        },\n        "task_config": {\n          "provider": "{$.meta.provider}",\n          "internalBucket": "{$.meta.buckets.internal.name}",\n          "stackName": "{$.meta.stack}",\n          "granuleIngestWorkflow": "${ingest_granule_workflow_name}",\n          "queueUrl": "{$.meta.queues.startSF}"\n        }\n      }\n    },\n    "Type": "Task",\n    "Resource": "${queue_granules_task_arn}",\n    "Retry": [\n      {\n        "ErrorEquals": [\n          "Lambda.ServiceException",\n          "Lambda.AWSLambdaException",\n          "Lambda.SdkClientException"\n        ],\n        "IntervalSeconds": 2,\n        "MaxAttempts": 6,\n        "BackoffRate": 2\n      }\n    ],\n    "Catch": [\n      {\n        "ErrorEquals": [\n          "States.ALL"\n        ],\n        "ResultPath": "$.exception",\n        "Next": "WorkflowFailed"\n      }\n    ],\n    "End": true\n  },\n')),(0,o.kt)("p",null,"Given it has been discovered this task can no longer run in AWS Lambda, you can instead run it on the Cumulus ECS cluster by adding the following resources to your terraform deployment (by either adding a new ",(0,o.kt)("inlineCode",{parentName:"p"},".tf")," file or updating an existing one):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"aws_sfn_activity")," resource:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_sfn_activity" "queue_granules" {\n  name = "${var.prefix}-QueueGranules"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An instance of the ",(0,o.kt)("inlineCode",{parentName:"li"},"cumulus_ecs_service")," module (found on the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/releases"},"Cumulus releases page")," configured to provide the ",(0,o.kt)("inlineCode",{parentName:"li"},"QueueGranules")," task:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'\nmodule "queue_granules_service" {\n  source = "https://github.com/nasa/cumulus/releases/download/{version}/terraform-aws-cumulus-ecs-service.zip"\n\n  prefix = var.prefix\n  name   = "QueueGranules"\n\n  cluster_arn                           = module.cumulus.ecs_cluster_arn\n  desired_count                         = 1\n  image                                 = "cumuluss/cumulus-ecs-task:1.9.0"\n\n  cpu                = 400\n  memory_reservation = 700\n\n  environment = {\n    AWS_DEFAULT_REGION = data.aws_region.current.name\n  }\n  command = [\n    "cumulus-ecs-task",\n    "--activityArn",\n    aws_sfn_activity.queue_granules.id,\n    "--lambdaArn",\n    module.cumulus.queue_granules_task.task_arn,\n    "--lastModified",\n    module.cumulus.queue_granules_task.last_modified_date\n  ]\n  alarms = {\n    MemoryUtilizationHigh = {\n      comparison_operator = "GreaterThanThreshold"\n      evaluation_periods  = 1\n      metric_name         = "MemoryUtilization"\n      statistic           = "SampleCount"\n      threshold           = 75\n    }\n  }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you have updated the code for the Lambda specified by ",(0,o.kt)("inlineCode",{parentName:"p"},"--lambdaArn"),", you will have to manually restart the tasks in your ECS service before invocation of the Step Function activity will use the updated Lambda code.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An updated ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/discover_granules_workflow.asl.json"},"Discover Granules workflow"),") to utilize the new resource (the ",(0,o.kt)("inlineCode",{parentName:"li"},"Resource")," key in the ",(0,o.kt)("inlineCode",{parentName:"li"},"QueueGranules")," step has been updated to:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"Resource": "${aws_sfn_activity.queue_granules.id}"'),")`"),(0,o.kt)("p",null,"If you then run this workflow in place of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DiscoverGranules")," workflow, the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueueGranules")," step would run as an ECS task instead of a lambda."),(0,o.kt)("h2",{id:"final-note"},"Final note"),(0,o.kt)("p",null,"Step Function Activities and AWS Lambda are not the only ways to run tasks in an AWS Step Function. Learn more about other service integrations, including direct ECS integration via the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-connectors.html"},"AWS Service Integrations")," page."))}k.isMDXComponent=!0}}]);