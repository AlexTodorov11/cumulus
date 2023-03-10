"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[22540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=i(a),m=s,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return a?r.createElement(f,n(n({ref:t},d),{},{components:a})):r.createElement(f,n({ref:t},d))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,n=new Array(o);n[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:s,n[1]=u;for(var i=2;i<o;i++)n[i]=a[i];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var r=a(87462),s=a(63366),o=(a(67294),a(3905)),n=["components"],u={id:"dead_letter_queues",title:"Dead Letter Queues",hide_title:!1},l=void 0,i={unversionedId:"features/dead_letter_queues",id:"version-v9.0.0/features/dead_letter_queues",title:"Dead Letter Queues",description:"startSF SQS queue",source:"@site/versioned_docs/version-v9.0.0/features/lambda_dead_letter_queue.md",sourceDirName:"features",slug:"/features/dead_letter_queues",permalink:"/cumulus/docs/v9.0.0/features/dead_letter_queues",draft:!1,tags:[],version:"v9.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"dead_letter_queues",title:"Dead Letter Queues",hide_title:!1},sidebar:"docs",previous:{title:"Cumulus Metadata in DynamoDB",permalink:"/cumulus/docs/v9.0.0/features/data_in_dynamodb"},next:{title:"EMS Reporting",permalink:"/cumulus/docs/v9.0.0/features/ems_reporting"}},d={},p=[{value:"startSF SQS queue",id:"startsf-sqs-queue",level:2},{value:"Named Lambda Dead Letter Queues",id:"named-lambda-dead-letter-queues",level:2},{value:"<strong>Default Lambda Configuration</strong>",id:"default-lambda-configuration",level:3},{value:"Troubleshooting/Utilizing messages in a Dead Letter Queue",id:"troubleshootingutilizing-messages-in-a-dead-letter-queue",level:2}],c={toc:p},m="wrapper";function f(e){var t=e.components,u=(0,s.Z)(e,n);return(0,o.kt)(m,(0,r.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"startsf-sqs-queue"},"startSF SQS queue"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../workflows/workflow-triggers"},"workflow-trigger")," for the startSF queue has a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-queues-redrivepolicy.html"},"Redrive Policy")," set up that directs any failed attempts to pull from the workflow start queue to a SQS queue ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},"Dead Letter Queue"),"."),(0,o.kt)("p",null,"This queue can then be monitored for failures to initiate a workflow.   Please note that workflow failures will not show up in this queue, only repeated failure to trigger a workflow."),(0,o.kt)("h2",{id:"named-lambda-dead-letter-queues"},"Named Lambda Dead Letter Queues"),(0,o.kt)("p",null,"Cumulus provides configured ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},"Dead Letter Queues")," (",(0,o.kt)("inlineCode",{parentName:"p"},"DLQ"),") for non-workflow Lambdas (such as ScheduleSF) to capture Lambda failures for further processing."),(0,o.kt)("p",null,"These DLQs are setup with the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},"  receive_wait_time_seconds  = 20\n  message_retention_seconds  = 1209600\n  visibility_timeout_seconds = 60\n")),(0,o.kt)("h3",{id:"default-lambda-configuration"},(0,o.kt)("strong",{parentName:"h3"},"Default Lambda Configuration")),(0,o.kt)("p",null,"The following built-in Cumulus Lambdas are setup with DLQs to allow handling of process failures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dbIndexer (Updates Elasticsearch based on DynamoDB events)"),(0,o.kt)("li",{parentName:"ul"},"EmsIngestReport (Daily EMS ingest report generation Lambda)"),(0,o.kt)("li",{parentName:"ul"},"JobsLambda (writes logs outputs to Elasticsearch)"),(0,o.kt)("li",{parentName:"ul"},"ScheduleSF (the SF Scheduler Lambda that places messages on the queue that is used to start workflows, see ",(0,o.kt)("a",{parentName:"li",href:"/cumulus/docs/v9.0.0/workflows/workflow-triggers"},"Workflow Triggers"),")"),(0,o.kt)("li",{parentName:"ul"},"publishReports  (Lambda that publishes messages to the SNS topics for execution, granule and PDR reporting)"),(0,o.kt)("li",{parentName:"ul"},"reportGranules, reportExecutions, reportPdrs (Lambdas responsible for updating records based on messages in the queues published by publishReports)")),(0,o.kt)("h2",{id:"troubleshootingutilizing-messages-in-a-dead-letter-queue"},"Troubleshooting/Utilizing messages in a ",(0,o.kt)("a",{parentName:"h2",href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},"Dead Letter Queue")),(0,o.kt)("p",null,"Ideally an automated process should be configured to poll the queue and process messages off a dead letter queue."),(0,o.kt)("p",null,"For aid in manually troubleshooting, you can utilize the ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/sqs/home"},"SQS Management console")," to view/messages available in the queues setup for a particular stack.    The dead letter queues will have a Message Body containing the Lambda payload, as well as Message Attributes that reference both the error returned and a RequestID which can be cross referenced to the associated Lambda's CloudWatch logs for more information:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the AWS SQS console showing how to view SQS message attributes",src:a(61598).Z,width:"657",height:"553"})))}f.isMDXComponent=!0},61598:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sqs_message_attribute-f4cac0e790fb9506641e398dca7d3f19.png"}}]);