"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[43116],{15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>m});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),p=n,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||a;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4745:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=o(58168),n=o(98587),a=(o(96540),o(15680)),i=["components"],s={id:"troubleshooting-readme",title:"How to Troubleshoot and Fix Issues",hide_title:!1},l=void 0,u={unversionedId:"troubleshooting/troubleshooting-readme",id:"version-v18.3.2/troubleshooting/troubleshooting-readme",title:"How to Troubleshoot and Fix Issues",description:"While Cumulus is a complex system, there is a focus on maintaining the integrity and availability of the system and data. Should you encounter errors or issues while using this system, this section will help troubleshoot and solve those issues.",source:"@site/versioned_docs/version-v18.3.2/troubleshooting/README.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/",permalink:"/cumulus/docs/troubleshooting/",draft:!1,tags:[],version:"v18.3.2",lastUpdatedBy:"Paul Pilone",lastUpdatedAt:1722002722,formattedLastUpdatedAt:"Jul 26, 2024",frontMatter:{id:"troubleshooting-readme",title:"How to Troubleshoot and Fix Issues",hide_title:!1},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/cumulus/docs/category/troubleshooting"},next:{title:"Troubleshooting Deployment",permalink:"/cumulus/docs/troubleshooting/troubleshooting-deployment"}},d={},c=[{value:"Backup and Restore",id:"backup-and-restore",level:2},{value:"Elasticsearch reindexing",id:"elasticsearch-reindexing",level:2},{value:"Troubleshooting Workflows",id:"troubleshooting-workflows",level:2},{value:"Workflow Errors",id:"workflow-errors",level:3},{value:"Workflow Did Not Start",id:"workflow-did-not-start",level:3},{value:"Operator API Errors",id:"operator-api-errors",level:2},{value:"Lambda Errors",id:"lambda-errors",level:2},{value:"KMS Exception: AccessDeniedException",id:"kms-exception-accessdeniedexception",level:3},{value:"Error: Unable to import module &#39;index&#39;: Error",id:"error-unable-to-import-module-index-error",level:3}],h={toc:c},p="wrapper";function m(e){var t=e.components,s=(0,n.A)(e,i);return(0,a.yg)(p,(0,r.A)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"While Cumulus is a complex system, there is a focus on maintaining the integrity and availability of the system and data. Should you encounter errors or issues while using this system, this section will help troubleshoot and solve those issues."),(0,a.yg)("h2",{id:"backup-and-restore"},"Backup and Restore"),(0,a.yg)("p",null,"Cumulus has backup and restore functionality built-in to protect Cumulus data and allow recovery of a Cumulus stack. This is currently limited to Cumulus data and not full S3 archive data. Backup and restore is not enabled by default and must be enabled and configured to take advantage of this feature."),(0,a.yg)("p",null,"For more information, read the ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/features/backup_and_restore#backup-and-restore-with-aws"},"Backup and Restore documentation"),"."),(0,a.yg)("h2",{id:"elasticsearch-reindexing"},"Elasticsearch reindexing"),(0,a.yg)("p",null,"If you run into issues with your Elasticsearch index, a reindex operation is available via the Cumulus API. See\nthe ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/troubleshooting/reindex-elasticsearch"},"Reindexing Guide"),"."),(0,a.yg)("p",null,"Information on how to reindex Elasticsearch is in the ",(0,a.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-api/#elasticsearch-1"},"Cumulus API  documentation"),"."),(0,a.yg)("h2",{id:"troubleshooting-workflows"},"Troubleshooting Workflows"),(0,a.yg)("p",null,"Workflows are state machines comprised of tasks and services and each component logs to ",(0,a.yg)("a",{parentName:"p",href:"https://aws.amazon.com/cloudwatch"},"CloudWatch"),". The CloudWatch logs for all steps in the execution are displayed in the Cumulus dashboard or you can find them by going to CloudWatch and navigating to the logs for that particular task."),(0,a.yg)("h3",{id:"workflow-errors"},"Workflow Errors"),(0,a.yg)("p",null,"Visual representations of executed workflows can be found in the Cumulus dashboard or the AWS Step Functions console for that particular execution."),(0,a.yg)("p",null,"If a workflow errors, the error will be handled according to the ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/data-cookbooks/error-handling"},"error handling configuration"),". The task that fails will have the ",(0,a.yg)("inlineCode",{parentName:"p"},"exception")," field populated in the output, giving information about the error. Further information can be found in the CloudWatch logs for the task."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Graph of AWS Step Function execution showing a failing workflow",src:o(98470).A,width:"312",height:"380"})),(0,a.yg)("h3",{id:"workflow-did-not-start"},"Workflow Did Not Start"),(0,a.yg)("p",null,"Generally, first check your rule configuration. If that is satisfactory, the answer will likely be in the CloudWatch logs for the schedule SF or SF starter lambda functions. See the ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/workflows/workflow-triggers"},"workflow triggers")," page for more information on how workflows start."),(0,a.yg)("p",null,"For Kinesis and SNS rules specifically, if an error occurs during the message consumer process, the fallback consumer lambda will be called and if the message continues to error, a message will be placed on the dead letter queue. Check the dead letter queue for a failure message. Errors can be traced back to the CloudWatch logs for the message consumer and the fallback consumer. Additionally, check that the name and version match those configured in your rule, as rules are filtered by the notification's collection name and version before scheduling executions."),(0,a.yg)("p",null,"More information on kinesis error handling is ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/data-cookbooks/cnm-workflow#kinesis-record-error-handling"},"here"),"."),(0,a.yg)("h2",{id:"operator-api-errors"},"Operator API Errors"),(0,a.yg)("p",null,"All operator API calls are funneled through the ",(0,a.yg)("inlineCode",{parentName:"p"},"ApiEndpoints")," lambda. Each API call is logged to the ",(0,a.yg)("inlineCode",{parentName:"p"},"ApiEndpoints")," CloudWatch log for your deployment."),(0,a.yg)("h2",{id:"lambda-errors"},"Lambda Errors"),(0,a.yg)("h3",{id:"kms-exception-accessdeniedexception"},"KMS Exception: AccessDeniedException"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"KMS Exception: AccessDeniedExceptionKMS Message: The ciphertext refers to a customer master key that does not exist, does not exist in this region, or you are not allowed to access.")),(0,a.yg)("p",null,"The above error was being thrown by cumulus lambda function invocation. The KMS key is the encryption key used to encrypt lambda environment variables. The root cause of this error is unknown, but is speculated to be caused by deleting and recreating, with the same name, the IAM role the lambda uses."),(0,a.yg)("p",null,"This error can be resolved by switching the lambda's execution role to a different one and then back through the Lambda management console. Unfortunately, this approach doesn't scale well."),(0,a.yg)("p",null,"The other resolution (that scales but takes some time) that was found is as follows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Comment out all lambda definitions (and dependent resources) in your Terraform configuration."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"terraform apply")," to delete the lambdas."),(0,a.yg)("li",{parentName:"ol"},"Un-comment the definitions."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"terraform apply")," to recreate the lambdas.")),(0,a.yg)("p",null,"If this problem occurs with Core lambdas and you are using the ",(0,a.yg)("inlineCode",{parentName:"p"},"terraform-aws-cumulus.zip")," file source distributed in our release, we recommend using the non-scaling approach as the number of lambdas we distribute is in the low teens, which are likely to be easier and faster to reconfigure one-by-one compared to editing our configs."),(0,a.yg)("h3",{id:"error-unable-to-import-module-index-error"},"Error: Unable to import module 'index': Error"),(0,a.yg)("p",null,"This error is shown in the CloudWatch logs for a Lambda function."),(0,a.yg)("p",null,"One possible cause is that the Lambda definition in the ",(0,a.yg)("inlineCode",{parentName:"p"},".tf")," file defining the lambda is not pointing to the correct packaged lambda source file. In order to resolve this issue, update the lambda definition to point directly to the packaged (e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},".zip"),") lambda source file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_lambda_function" "discover_granules_task" {\n  function_name    = "${var.prefix}-DiscoverGranules"\n  filename         = "${path.module}/../../tasks/discover-granules/dist/lambda.zip"\n  handler          = "index.handler"\n}\n')),(0,a.yg)("p",null,"If you are seeing this error when using the Lambda as a step in a Cumulus workflow, then inspect the output for this Lambda step in the AWS Step Function console. If you see the error ",(0,a.yg)("inlineCode",{parentName:"p"},"Cannot find module 'node_modules/@cumulus/cumulus-message-adapter-js'"),", then you need to ensure the lambda's packaged dependencies include ",(0,a.yg)("inlineCode",{parentName:"p"},"cumulus-message-adapter-js"),"."))}m.isMDXComponent=!0},98470:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/workflow-fail-f23d0f5db7fbcae42f233757e7aa4478.png"}}]);