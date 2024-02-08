"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[98540],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>g});var a=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(45072),o=n(95656),s=(n(11504),n(95788)),r=["components"],i={id:"ingest-notifications",title:"Ingest Notification in Workflows",hide_title:!1},u=void 0,l={unversionedId:"data-cookbooks/ingest-notifications",id:"version-v18.2.0/data-cookbooks/ingest-notifications",title:"Ingest Notification in Workflows",description:"On deployment, an SQS queue and three SNS topics, one for executions, granules, and PDRs, are created and used for handling notification messages related to the workflow.",source:"@site/versioned_docs/version-v18.2.0/data-cookbooks/ingest-notifications.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/ingest-notifications",permalink:"/cumulus/docs/data-cookbooks/ingest-notifications",draft:!1,tags:[],version:"v18.2.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1707330127,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{id:"ingest-notifications",title:"Ingest Notification in Workflows",hide_title:!1},sidebar:"docs",previous:{title:"HelloWorld Workflow",permalink:"/cumulus/docs/data-cookbooks/hello-world"},next:{title:"Science Investigator-led Processing Systems (SIPS)",permalink:"/cumulus/docs/data-cookbooks/sips-workflow"}},p={},c=[{value:"Sending SQS messages to report status",id:"sending-sqs-messages-to-report-status",level:2},{value:"Publishing granule/PDR reports directly to the SQS queue",id:"publishing-granulepdr-reports-directly-to-the-sqs-queue",level:3},{value:"In a workflow",id:"in-a-workflow",level:3},{value:"Subscribing additional listeners to SNS topics",id:"subscribing-additional-listeners-to-sns-topics",level:2},{value:"SNS message format",id:"sns-message-format",level:3},{value:"Summary",id:"summary",level:2}],d={toc:c},m="wrapper";function g(e){var t=e.components,i=(0,o.c)(e,r);return(0,s.yg)(m,(0,a.c)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"On deployment, an ",(0,s.yg)("a",{parentName:"p",href:"https://aws.amazon.com/sqs/"},"SQS queue")," and three ",(0,s.yg)("a",{parentName:"p",href:"https://aws.amazon.com/sns/"},"SNS topics"),", one for executions, granules, and PDRs, are created and used for handling notification messages related to the workflow."),(0,s.yg)("p",null,"The ingest notification reporting SQS queue is populated via a ",(0,s.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/cw-events.html"},"Cloudwatch rule for any Step Function execution state transitions"),". The ",(0,s.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecords")," Lambda consumes this queue. The queue and Lambda are included in the ",(0,s.yg)("inlineCode",{parentName:"p"},"cumulus")," module and the Cloudwatch rule in the ",(0,s.yg)("inlineCode",{parentName:"p"},"workflow")," module and are included by default in a Cumulus deployment."),(0,s.yg)("p",null,"The ",(0,s.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecords")," Lambda function reads from the ",(0,s.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecordsInputQueue")," queue and updates the RDS database records for granules, executions, and PDRs. When the records are updated, messages are posted to the three SNS topics. This Lambda is invoked both when the workflow starts and when it reaches a terminal state (completion or failure)."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Diagram of architecture for reporting workflow ingest notifications from AWS Step Functions",src:n(2008).c,width:"2286",height:"1031"})),(0,s.yg)("h2",{id:"sending-sqs-messages-to-report-status"},"Sending SQS messages to report status"),(0,s.yg)("h3",{id:"publishing-granulepdr-reports-directly-to-the-sqs-queue"},"Publishing granule/PDR reports directly to the SQS queue"),(0,s.yg)("p",null,"If you have a non-Cumulus workflow or process ingesting data and would like to update the status of your granules or PDRs, you can publish directly to the reporting SQS queue. Publishing messages to this queue will result in those messages being stored as granule/PDR records in the Cumulus database and having the status of those granules/PDRs being visible on the Cumulus dashboard. The queue does have certain expectations as it expects a Cumulus Message nested within a Cloudwatch Step Function Event object."),(0,s.yg)("p",null,"Posting directly to the queue will require knowing the queue URL. Assuming that you are using the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/cumulus"},(0,s.yg)("inlineCode",{parentName:"a"},"cumulus")," module")," for your deployment, you can get the queue URL by adding them to ",(0,s.yg)("inlineCode",{parentName:"p"},"outputs.tf")," for your Terraform deployment ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/outputs.tf"},"as in our example deployment"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-hcl"},'output "stepfunction_event_reporter_queue_url" {\n  value = module.cumulus.stepfunction_event_reporter_queue_url\n}\n\noutput "report_executions_sns_topic_arn" {\n  value = module.cumulus.report_executions_sns_topic_arn\n}\noutput "report_granules_sns_topic_arn" {\n  value = module.cumulus.report_granules_sns_topic_arn\n}\noutput "report_pdrs_sns_topic_arn" {\n  value = module.cumulus.report_pdrs_sns_topic_arn\n}\n')),(0,s.yg)("p",null,"Then, when you run ",(0,s.yg)("inlineCode",{parentName:"p"},"terraform deploy"),", you should see the topic ARNs printed to your console:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"Outputs:\n...\nstepfunction_event_reporter_queue_url = https://sqs.us-east-1.amazonaws.com/xxxxxxxxx/<prefix>-sfEventSqsToDbRecordsInputQueue\nreport_executions_sns_topic_arn = arn:aws:sns:us-east-1:xxxxxxxxx:<prefix>-report-executions-topic\nreport_granules_sns_topic_arn = arn:aws:sns:us-east-1:xxxxxxxxx:<prefix>-report-executions-topic\nreport_pdrs_sns_topic_arn = arn:aws:sns:us-east-1:xxxxxxxxx:<prefix>-report-pdrs-topic\n")),(0,s.yg)("p",null,"Once you have the queue URL, you can use the AWS SDK for your language of choice to publish messages to the topic. The expected format of these messages is that of a ",(0,s.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/cw-events.html"},"Cloudwatch Step Function event")," containing a Cumulus message. For ",(0,s.yg)("inlineCode",{parentName:"p"},"SUCCEEDED")," events, the Cumulus message is expected to be in ",(0,s.yg)("inlineCode",{parentName:"p"},"detail.output"),". For all other events statuses, a Cumulus Message is expected in ",(0,s.yg)("inlineCode",{parentName:"p"},"detail.input"),". The Cumulus Message populating these fields ",(0,s.yg)("strong",{parentName:"p"},"MUST")," be a JSON string, not an object. ",(0,s.yg)("strong",{parentName:"p"},"Messages that do not conform to the schemas will fail to be created as records"),"."),(0,s.yg)("p",null,"If you are not seeing records persist to the database or show up in the Cumulus dashboard, you can investigate the Cloudwatch logs of the SQS consumer Lambda:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"/aws/lambda/<prefix>-sfEventSqsToDbRecords"))),(0,s.yg)("h3",{id:"in-a-workflow"},"In a workflow"),(0,s.yg)("p",null,"As described above, ingest notifications will automatically be published to the SNS topics on workflow start and completion/failure, so ",(0,s.yg)("strong",{parentName:"p"},"you should not include a workflow step to publish the initial or final status of your workflows"),"."),(0,s.yg)("p",null,"However, if you want to report your ingest status at any point ",(0,s.yg)("strong",{parentName:"p"},"during a workflow execution"),", you can add a workflow step using the ",(0,s.yg)("inlineCode",{parentName:"p"},"SfSqsReport")," Lambda. In the following example from ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/parse_pdr_workflow.tf"},(0,s.yg)("inlineCode",{parentName:"a"},"cumulus-tf/parse_pdr_workflow.tf")),", the ",(0,s.yg)("inlineCode",{parentName:"p"},"ParsePdr")," workflow is configured to use the ",(0,s.yg)("inlineCode",{parentName:"p"},"SfSqsReport")," Lambda, primarily to update the PDR ingestion status."),(0,s.yg)("admonition",{type:"info"},(0,s.yg)("p",{parentName:"admonition"},(0,s.yg)("inlineCode",{parentName:"p"},"${sf_sqs_report_task_arn}")," is an interpolated value referring to a Terraform resource. See the example deployment code for the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/parse_pdr_workflow.tf"},(0,s.yg)("inlineCode",{parentName:"a"},"ParsePdr")," workflow"),".")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'  "PdrStatusReport": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "ReplaceConfig": {\n          "FullMessage": true\n        },\n        "task_config": {\n          "cumulus_message": {\n            "input": "{$}"\n          }\n        }\n      }\n    },\n    "ResultPath": null,\n    "Type": "Task",\n    "Resource": "${sf_sqs_report_task_arn}",\n    "Retry": [\n      {\n        "ErrorEquals": [\n          "Lambda.ServiceException",\n          "Lambda.AWSLambdaException",\n          "Lambda.SdkClientException"\n        ],\n        "IntervalSeconds": 2,\n        "MaxAttempts": 6,\n        "BackoffRate": 2\n      }\n    ],\n    "Catch": [\n      {\n        "ErrorEquals": [\n          "States.ALL"\n        ],\n        "ResultPath": "$.exception",\n        "Next": "WorkflowFailed"\n      }\n    ],\n    "Next": "WaitForSomeTime"\n  },\n')),(0,s.yg)("h2",{id:"subscribing-additional-listeners-to-sns-topics"},"Subscribing additional listeners to SNS topics"),(0,s.yg)("p",null,"Additional listeners to SNS topics can be configured in a ",(0,s.yg)("inlineCode",{parentName:"p"},".tf")," file for your Cumulus deployment. Shown below is configuration that subscribes an additional Lambda function (",(0,s.yg)("inlineCode",{parentName:"p"},"test_lambda"),") to receive messages from the ",(0,s.yg)("inlineCode",{parentName:"p"},"report_executions")," SNS topic. To subscribe to the ",(0,s.yg)("inlineCode",{parentName:"p"},"report_granules")," or ",(0,s.yg)("inlineCode",{parentName:"p"},"report_pdrs")," SNS topics instead, simply replace ",(0,s.yg)("inlineCode",{parentName:"p"},"report_executions")," in the code block below with either of those values."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_lambda_function" "test_lambda" {\n  function_name    = "${var.prefix}-testLambda"\n  filename         = "./testLambda.zip"\n  source_code_hash = filebase64sha256("./testLambda.zip")\n  handler          = "index.handler"\n  role             = module.cumulus.lambda_processing_role_arn\n  runtime          = "nodejs10.x"\n}\n\nresource "aws_sns_topic_subscription" "test_lambda" {\n  topic_arn = module.cumulus.report_executions_sns_topic_arn\n  protocol  = "lambda"\n  endpoint  = aws_lambda_function.test_lambda.arn\n}\n\nresource "aws_lambda_permission" "test_lambda" {\n  action        = "lambda:InvokeFunction"\n  function_name = aws_lambda_function.test_lambda.arn\n  principal     = "sns.amazonaws.com"\n  source_arn    = module.cumulus.report_executions_sns_topic_arn\n}\n')),(0,s.yg)("h3",{id:"sns-message-format"},"SNS message format"),(0,s.yg)("p",null,"Subscribers to the SNS topics can expect to find the published message in the ",(0,s.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-sns"},"SNS event")," at ",(0,s.yg)("inlineCode",{parentName:"p"},"Records[0].Sns.Message"),". The message will be a JSON stringified version of the ingest notification record for an execution or a PDR. For granules, the message will be a JSON stringified object with ingest notification record in the ",(0,s.yg)("inlineCode",{parentName:"p"},"record")," property and the event type as the ",(0,s.yg)("inlineCode",{parentName:"p"},"event")," property."),(0,s.yg)("p",null,"The ingest notification record of the execution, granule, or PDR should conform to the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/packages/api/lib/schemas.js"},"data model schema for the given record type"),"."),(0,s.yg)("h2",{id:"summary"},"Summary"),(0,s.yg)("p",null,"Workflows can be configured to send SQS messages at any point using the ",(0,s.yg)("inlineCode",{parentName:"p"},"sf-sqs-report")," task."),(0,s.yg)("p",null,"Additional listeners can be easily configured to trigger when messages are sent to the SNS topics."))}g.isMDXComponent=!0},2008:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/interfaces-afde22eec1363772c777174b43895b47.svg"}}]);