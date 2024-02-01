"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[85144],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>g});var u=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,u)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,u,o=function(e,t){if(null==e)return{};var n,u,o={},r=Object.keys(e);for(u=0;u<r.length;u++)n=r[u],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(u=0;u<r.length;u++)n=r[u],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=u.createContext({}),s=function(e){var t=u.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return u.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return u.createElement(u.Fragment,{},t)}},p=u.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?u.createElement(g,a(a({ref:t},c),{},{components:n})):u.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<r;s++)a[s]=n[s];return u.createElement.apply(null,a)}return u.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var u=n(45072),o=n(95656),r=(n(11504),n(95788)),a=["components"],i={id:"throttling-queued-executions",title:"Throttling queued executions",hide_title:!1},l=void 0,s={unversionedId:"data-cookbooks/throttling-queued-executions",id:"version-v17.0.0/data-cookbooks/throttling-queued-executions",title:"Throttling queued executions",description:"In this entry, we will walk through how to create an SQS queue for scheduling executions which will be used to limit those executions to a maximum concurrency. And we will see how to configure our Cumulus workflows/rules to use this queue.",source:"@site/versioned_docs/version-v17.0.0/data-cookbooks/throttling-queued-executions.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/throttling-queued-executions",permalink:"/cumulus/docs/v17.0.0/data-cookbooks/throttling-queued-executions",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1692022753,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"throttling-queued-executions",title:"Throttling queued executions",hide_title:!1},sidebar:"docs",previous:{title:"Run Step Function Tasks in AWS Lambda or Docker",permalink:"/cumulus/docs/v17.0.0/data-cookbooks/run-tasks-in-lambda-or-docker"},next:{title:"Queue PostToCmr",permalink:"/cumulus/docs/v17.0.0/data-cookbooks/queue-post-to-cmr"}},c={},m=[{value:"Implementing the queue",id:"implementing-the-queue",level:2},{value:"Create and deploy the queue",id:"create-and-deploy-the-queue",level:3},{value:"Add a new queue",id:"add-a-new-queue",level:4},{value:"Set maximum executions for the queue",id:"set-maximum-executions-for-the-queue",level:4},{value:"Setup consumer for the queue",id:"setup-consumer-for-the-queue",level:4},{value:"Re-deploy your Cumulus application",id:"re-deploy-your-cumulus-application",level:4},{value:"Integrate your queue with workflows and/or rules",id:"integrate-your-queue-with-workflows-andor-rules",level:3},{value:"Integrate queue with queuing steps in workflows",id:"integrate-queue-with-queuing-steps-in-workflows",level:4},{value:"Create/update a rule to use your new queue",id:"createupdate-a-rule-to-use-your-new-queue",level:4},{value:"Architecture",id:"architecture",level:2},{value:"Final notes",id:"final-notes",level:2}],d={toc:m},p="wrapper";function g(e){var t=e.components,i=(0,o.c)(e,a);return(0,r.yg)(p,(0,u.c)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In this entry, we will walk through how to create an SQS queue for scheduling executions which will be used to limit those executions to a maximum concurrency. And we will see how to configure our Cumulus workflows/rules to use this queue."),(0,r.yg)("p",null,"We will also review the architecture of this feature and highlight some implementation notes."),(0,r.yg)("p",null,"Limiting the number of executions that can be running from a given queue is useful for controlling the cloud resource usage of workflows that may be lower priority, such as granule reingestion or reprocessing campaigns. It could also be useful for preventing workflows from exceeding known resource limits, such as a maximum number of open connections to a data provider."),(0,r.yg)("h2",{id:"implementing-the-queue"},"Implementing the queue"),(0,r.yg)("h3",{id:"create-and-deploy-the-queue"},"Create and deploy the queue"),(0,r.yg)("h4",{id:"add-a-new-queue"},"Add a new queue"),(0,r.yg)("p",null,"In a ",(0,r.yg)("inlineCode",{parentName:"p"},".tf")," file for your ",(0,r.yg)("a",{parentName:"p",href:"./../deployment/#deploy-the-cumulus-instance"},"Cumulus deployment"),", add a new SQS queue:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_sqs_queue" "background_job_queue" {\n  name                       = "${var.prefix}-backgroundJobQueue"\n  receive_wait_time_seconds  = 20\n  visibility_timeout_seconds = 60\n}\n')),(0,r.yg)("h4",{id:"set-maximum-executions-for-the-queue"},"Set maximum executions for the queue"),(0,r.yg)("p",null,"Define the ",(0,r.yg)("inlineCode",{parentName:"p"},"throttled_queues")," variable for the ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus")," module in your ",(0,r.yg)("a",{parentName:"p",href:"./../deployment/#deploy-the-cumulus-instance"},"Cumulus deployment")," to specify the maximum concurrent executions for the queue."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},'module "cumulus" {\n  # ... other variables\n\n  throttled_queues = [{\n    url = aws_sqs_queue.background_job_queue.id,\n    execution_limit = 5\n  }]\n}\n')),(0,r.yg)("h4",{id:"setup-consumer-for-the-queue"},"Setup consumer for the queue"),(0,r.yg)("p",null,"Add the ",(0,r.yg)("inlineCode",{parentName:"p"},"sqs2sfThrottle")," Lambda as the consumer for the queue and add a Cloudwatch event rule/target to read from the queue on a scheduled basis."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"You ",(0,r.yg)("strong",{parentName:"p"},"must use the ",(0,r.yg)("inlineCode",{parentName:"strong"},"sqs2sfThrottle")," Lambda as the consumer for any queue with a queue execution limit")," or else the execution throttling will not work correctly. Additionally, please allow at least 60 seconds after creation before using the queue while associated infrastructure and triggers are set up and made ready.")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"aws_sqs_queue.background_job_queue.id")," refers to the ",(0,r.yg)("a",{parentName:"p",href:"#add-a-new-queue"},"queue resource defined above"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_cloudwatch_event_rule" "background_job_queue_watcher" {\n  schedule_expression = "rate(1 minute)"\n}\n\nresource "aws_cloudwatch_event_target" "background_job_queue_watcher" {\n  rule = aws_cloudwatch_event_rule.background_job_queue_watcher.name\n  arn  = module.cumulus.sqs2sfThrottle_lambda_function_arn\n  input = jsonencode({\n    messageLimit = 500\n    queueUrl     = aws_sqs_queue.background_job_queue.id\n    timeLimit    = 60\n  })\n}\n\nresource "aws_lambda_permission" "background_job_queue_watcher" {\n  action        = "lambda:InvokeFunction"\n  function_name = module.cumulus.sqs2sfThrottle_lambda_function_arn\n  principal     = "events.amazonaws.com"\n  source_arn    = aws_cloudwatch_event_rule.background_job_queue_watcher.arn\n}\n')),(0,r.yg)("h4",{id:"re-deploy-your-cumulus-application"},"Re-deploy your Cumulus application"),(0,r.yg)("p",null,"Follow the instructions to ",(0,r.yg)("a",{parentName:"p",href:"./../deployment/upgrade-readme#update-cumulus-resources"},"re-deploy your Cumulus application"),". After you have re-deployed, your workflow template will be updated to the include information about the queue (the output below is partial output from an expected workflow template):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "cumulus_meta": {\n    "queueExecutionLimits": {\n      "<backgroundJobQueue_SQS_URL>": 5\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"integrate-your-queue-with-workflows-andor-rules"},"Integrate your queue with workflows and/or rules"),(0,r.yg)("h4",{id:"integrate-queue-with-queuing-steps-in-workflows"},"Integrate queue with queuing steps in workflows"),(0,r.yg)("p",null,"For any workflows using ",(0,r.yg)("inlineCode",{parentName:"p"},"QueueGranules")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"QueuePdrs")," that you want to use your new queue, update the Cumulus configuration of those steps in your workflows."),(0,r.yg)("p",null,"As seen in this partial configuration for a ",(0,r.yg)("inlineCode",{parentName:"p"},"QueueGranules")," step, update the ",(0,r.yg)("inlineCode",{parentName:"p"},"queueUrl")," to reference the new throttled queue:"),(0,r.yg)("admonition",{title:"ingest_granule_workflow_name",type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"${ingest_granule_workflow_name}")," is an interpolated value referring to a Terraform resource. See the example deployment code for the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/discover_granules_workflow.tf"},(0,r.yg)("inlineCode",{parentName:"a"},"DiscoverGranules")," workflow"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "QueueGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "ReplaceConfig": {\n          "FullMessage": true\n        },\n        "task_config": {\n          "queueUrl": "${aws_sqs_queue.background_job_queue.id}",\n          "provider": "{$.meta.provider}",\n          "internalBucket": "{$.meta.buckets.internal.name}",\n          "stackName": "{$.meta.stack}",\n          "granuleIngestWorkflow": "${ingest_granule_workflow_name}"\n        }\n      }\n    }\n  }\n}\n')),(0,r.yg)("p",null,"Similarly, for a ",(0,r.yg)("inlineCode",{parentName:"p"},"QueuePdrs")," step:"),(0,r.yg)("admonition",{title:"parse_pdr_workflow_name",type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"${parse_pdr_workflow_name}")," is an interpolated value referring to a Terraform resource. See the example deployment code for the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/discover_and_queue_pdrs_workflow.tf"},(0,r.yg)("inlineCode",{parentName:"a"},"DiscoverPdrs")," workflow"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "QueuePdrs": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "ReplaceConfig": {\n          "FullMessage": true\n        },\n        "task_config": {\n          "queueUrl": "${aws_sqs_queue.background_job_queue.id}",\n          "provider": "{$.meta.provider}",\n          "collection": "{$.meta.collection}",\n          "internalBucket": "{$.meta.buckets.internal.name}",\n          "stackName": "{$.meta.stack}",\n          "parsePdrWorkflow": "${parse_pdr_workflow_name}"\n        }\n      }\n    }\n  }\n}\n')),(0,r.yg)("p",null,"After making these changes, ",(0,r.yg)("a",{parentName:"p",href:"./../deployment/upgrade-readme#update-cumulus-resources"},"re-deploy your Cumulus application")," for the execution throttling to take effect on workflow executions queued by these workflows."),(0,r.yg)("h4",{id:"createupdate-a-rule-to-use-your-new-queue"},"Create/update a rule to use your new queue"),(0,r.yg)("p",null,"Create or update a rule definition to include a ",(0,r.yg)("inlineCode",{parentName:"p"},"queueUrl")," property that refers to your new queue:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "s3_provider_rule",\n  "workflow": "DiscoverAndQueuePdrs",\n  "provider": "s3_provider",\n  "collection": {\n    "name": "MOD09GQ",\n    "version": "006"\n  },\n  "rule": {\n    "type": "onetime"\n  },\n  "state": "ENABLED",\n  "queueUrl": "<backgroundJobQueue_SQS_URL>" // configure rule to use your queue URL\n}\n')),(0,r.yg)("p",null,"After creating/updating the rule, any subsequent invocations of the rule should respect the maximum number of executions when starting workflows from the queue."),(0,r.yg)("h2",{id:"architecture"},"Architecture"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Architecture diagram showing how executions started from a queue are throttled to a maximum concurrent limit",src:n(93328).c,width:"1224",height:"411"})),(0,r.yg)("p",null,"Execution throttling based on the queue works by manually keeping a count (semaphore) of how many executions are running for the queue at a time. The key operation that prevents the number of executions from exceeding the maximum for the queue is that before starting new executions, the ",(0,r.yg)("inlineCode",{parentName:"p"},"sqs2sfThrottle")," Lambda attempts to increment the semaphore and responds as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the increment operation is successful, then the count was not at the maximum and an execution is started"),(0,r.yg)("li",{parentName:"ul"},"If the increment operation fails, then the count was already at the maximum so no execution is started")),(0,r.yg)("h2",{id:"final-notes"},"Final notes"),(0,r.yg)("p",null,"Limiting the number of concurrent executions for work scheduled via a queue has several consequences worth noting:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The number of executions that are running for a given queue will be limited to the maximum for that queue regardless of which workflow(s) are started."),(0,r.yg)("li",{parentName:"ul"},"If you use the same queue to schedule executions across multiple workflows/rules, then the limit on the total number of executions running concurrently ",(0,r.yg)("strong",{parentName:"li"},"will be applied to all of the executions scheduled across all of those workflows/rules"),"."),(0,r.yg)("li",{parentName:"ul"},"If you are scheduling the same workflow both via a queue with a ",(0,r.yg)("inlineCode",{parentName:"li"},"maxExecutions")," value and a queue without a ",(0,r.yg)("inlineCode",{parentName:"li"},"maxExecutions")," value, ",(0,r.yg)("strong",{parentName:"li"},"only the executions scheduled via the queue with the ",(0,r.yg)("inlineCode",{parentName:"strong"},"maxExecutions")," value will be limited to the maximum"),".")))}g.isMDXComponent=!0},93328:(e,t,n)=>{n.d(t,{c:()=>u});const u=n.p+"assets/images/queued-execution-throttling-c5a1e18022ca70ef8035bd187c4801ca.png"}}]);