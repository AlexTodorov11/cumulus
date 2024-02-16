"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[8933],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>g});var o=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),u=function(e){var a=o.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=u(e.components);return o.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,g=c["".concat(i,".").concat(p)]||c[p]||d[p]||n;return t?o.createElement(g,s(s({ref:a},m),{},{components:t})):o.createElement(g,s({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,s=new Array(n);s[0]=p;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<n;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4669:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var o=t(58168),r=t(98587),n=(t(96540),t(15680)),s=["components"],l={id:"glossary",title:"Glossary",hide_title:!1},i=void 0,u={unversionedId:"glossary",id:"version-v11.1.0/glossary",title:"Glossary",description:"AWS Glossary",source:"@site/versioned_docs/version-v11.1.0/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/cumulus/docs/v11.1.0/glossary",draft:!1,tags:[],version:"v11.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"glossary",title:"Glossary",hide_title:!1},sidebar:"docs",previous:{title:"Getting Started",permalink:"/cumulus/docs/v11.1.0/getting-started"},next:{title:"Frequently Asked Questions",permalink:"/cumulus/docs/v11.1.0/faqs"}},m={},c=[{value:"AWS Glossary",id:"aws-glossary",level:2},{value:"Cumulus Glossary of Terms",id:"cumulus-glossary-of-terms",level:2},{value:"API Gateway",id:"api-gateway",level:3},{value:"ARN",id:"arn",level:3},{value:"AWS",id:"aws",level:3},{value:"AWS Lambda/Lambda Function",id:"aws-lambdalambda-function",level:3},{value:"AWS Access Keys",id:"aws-access-keys",level:3},{value:"Bucket",id:"bucket",level:3},{value:"CloudFormation",id:"cloudformation",level:3},{value:"Cloudformation Template",id:"cloudformation-template",level:3},{value:"Cloudwatch",id:"cloudwatch",level:3},{value:"Cloud Notification Mechanism (CNM)",id:"cloud-notification-mechanism-cnm",level:3},{value:"Common Metadata Repository (CMR)",id:"common-metadata-repository-cmr",level:3},{value:"Collection (Cumulus)",id:"collection-cumulus",level:3},{value:"Cumulus Message Adapter (CMA)",id:"cumulus-message-adapter-cma",level:3},{value:"Distributed Active Archive Center (DAAC)",id:"distributed-active-archive-center-daac",level:3},{value:"Dead Letter Queue (DLQ)",id:"dead-letter-queue-dlq",level:3},{value:"Developer",id:"developer",level:3},{value:"ECS",id:"ecs",level:3},{value:"ECS Activity",id:"ecs-activity",level:3},{value:"Execution (Cumulus)",id:"execution-cumulus",level:3},{value:"GIBS",id:"gibs",level:3},{value:"Granule",id:"granule",level:3},{value:"IAM",id:"iam",level:3},{value:"Integrator/Developer",id:"integratordeveloper",level:3},{value:"Kinesis",id:"kinesis",level:3},{value:"Lambda",id:"lambda",level:3},{value:"Module (Terraform)",id:"module-terraform",level:3},{value:"Node",id:"node",level:3},{value:"Npm",id:"npm",level:3},{value:"Operator",id:"operator",level:3},{value:"PDR",id:"pdr",level:3},{value:"Packages (NPM)",id:"packages-npm",level:3},{value:"Provider",id:"provider",level:3},{value:"Rule",id:"rule",level:3},{value:"S3",id:"s3",level:3},{value:"SIPS",id:"sips",level:3},{value:"SNS",id:"sns",level:3},{value:"SQS",id:"sqs",level:3},{value:"Stack",id:"stack",level:3},{value:"Step Function",id:"step-function",level:3},{value:"Terraform",id:"terraform",level:3},{value:"Workflows",id:"workflows",level:3}],d={toc:c},p="wrapper";function g(e){var a=e.components,t=(0,r.A)(e,s);return(0,n.yg)(p,(0,o.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"aws-glossary"},"AWS Glossary"),(0,n.yg)("p",null,"For terms/items from Amazon/AWS not mentioned in this glossary, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/glos-chap.html"},"AWS Glossary"),"."),(0,n.yg)("h2",{id:"cumulus-glossary-of-terms"},"Cumulus Glossary of Terms"),(0,n.yg)("h3",{id:"api-gateway"},"API Gateway"),(0,n.yg)("p",null,"  Refers to ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/api-gateway/"},"AWS's API Gateway"),".   Used by the Cumulus API."),(0,n.yg)("h3",{id:"arn"},"ARN"),(0,n.yg)("p",null,'  Refers to an AWS "Amazon Resource Name".'),(0,n.yg)("p",null,"  For more info, see the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"},"AWS documentation"),"."),(0,n.yg)("h3",{id:"aws"},"AWS"),(0,n.yg)("p",null,"  See: ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/"},"aws.amazon.com")),(0,n.yg)("h3",{id:"aws-lambdalambda-function"},"AWS Lambda/Lambda Function"),(0,n.yg)("p",null,"  AWS's 'serverless' option.   Allows the running of code without provisioning a service or managing server/ECS instances/etc."),(0,n.yg)("p",null,"  For more information, see the ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda documentation"),"."),(0,n.yg)("h3",{id:"aws-access-keys"},"AWS Access Keys"),(0,n.yg)("p",null,"  Access credentials that give you access to AWS to act as a IAM user programmatically or from the command line."),(0,n.yg)("p",null,"  For more information, see the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"},"AWS IAM Documentation"),"."),(0,n.yg)("h3",{id:"bucket"},"Bucket"),(0,n.yg)("p",null,"  An Amazon S3 cloud storage resource."),(0,n.yg)("p",null,"  For more information, see the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html"},"AWS Bucket Documentation"),"."),(0,n.yg)("h3",{id:"cloudformation"},"CloudFormation"),(0,n.yg)("p",null,"  An AWS service that allows you to define and manage cloud resources as a preconfigured block."),(0,n.yg)("p",null,"  For more information, see the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"},"AWS CloudFormation User Guide"),"."),(0,n.yg)("h3",{id:"cloudformation-template"},"Cloudformation Template"),(0,n.yg)("p",null,"  A template that defines an AWS Cloud Formation."),(0,n.yg)("p",null,"  For more information, see the ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/cloudformation/aws-cloudformation-templates/"},"AWS intro page"),"."),(0,n.yg)("h3",{id:"cloudwatch"},"Cloudwatch"),(0,n.yg)("p",null,"  AWS service that allows logging and metrics collections on various cloud resources you have in AWS."),(0,n.yg)("p",null,"  For more information, see the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"},"AWS User Guide"),"."),(0,n.yg)("h3",{id:"cloud-notification-mechanism-cnm"},"Cloud Notification Mechanism (CNM)"),(0,n.yg)("p",null,"  An interface mechanism to support cloud-based ingest messaging. For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/podaac/cloud-notification-message-schema"},"PO.DAAC's CNM Schema"),"."),(0,n.yg)("h3",{id:"common-metadata-repository-cmr"},"Common Metadata Repository (CMR)"),(0,n.yg)("p",null,'  "A high-performance, high-quality, continuously evolving metadata system that catalogs Earth Science data and associated service metadata records".  For more information, see ',(0,n.yg)("a",{parentName:"p",href:"https://cmr.earthdata.nasa.gov/"},"NASA's CMR page"),"."),(0,n.yg)("h3",{id:"collection-cumulus"},"Collection (Cumulus)"),(0,n.yg)("p",null,"  Cumulus Collections are logical sets of data objects of the same data type and version."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"configuration/data-management-types#collections"},"cookbook reference page"),"."),(0,n.yg)("h3",{id:"cumulus-message-adapter-cma"},"Cumulus Message Adapter (CMA)"),(0,n.yg)("p",null,"  A library designed to help task developers integrate step function tasks into a Cumulus workflow by adapting task input/output into the Cumulus Message format."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"workflows/input_output#cumulus-message-adapter"},"CMA workflow reference page"),"."),(0,n.yg)("h3",{id:"distributed-active-archive-center-daac"},"Distributed Active Archive Center (DAAC)"),(0,n.yg)("p",null,"  Refers to a specific organization that's part of NASA's distributed system of archive centers.   For more information see ",(0,n.yg)("a",{parentName:"p",href:"https://earthdata.nasa.gov/about/daacs"},"EOSDIS's DAAC page")),(0,n.yg)("h3",{id:"dead-letter-queue-dlq"},"Dead Letter Queue (DLQ)"),(0,n.yg)("p",null,"  This refers to Amazon SQS Dead-Letter Queues - these SQS queues are specifically configured to capture failed messages from other services/SQS queues/etc to allow for processing of failed messages."),(0,n.yg)("p",null,"  For more on DLQs, see the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},"Amazon Documentation")," and the ",(0,n.yg)("a",{parentName:"p",href:"/cumulus/docs/v11.1.0/features/dead_letter_queues"},"Cumulus DLQ feature page"),"."),(0,n.yg)("h3",{id:"developer"},"Developer"),(0,n.yg)("p",null,"  Those who setup deployment and workflow management for Cumulus. Sometimes referred to as an integrator. ",(0,n.yg)("em",{parentName:"p"},"See ",(0,n.yg)("a",{parentName:"em",href:"#integrator"},"integrator")),"."),(0,n.yg)("h3",{id:"ecs"},"ECS"),(0,n.yg)("p",null,"  Amazon's Elastic Container Service.   Used in Cumulus by workflow steps that require more flexibility than Lambda can provide."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html"},"AWS's developer guide"),"."),(0,n.yg)("h3",{id:"ecs-activity"},"ECS Activity"),(0,n.yg)("p",null,"  An ECS instance run via a Step Function."),(0,n.yg)("h3",{id:"execution-cumulus"},"Execution (Cumulus)"),(0,n.yg)("p",null,"  A Cumulus execution refers to a single execution of a (Cumulus) Workflow."),(0,n.yg)("h3",{id:"gibs"},"GIBS"),(0,n.yg)("p",null,"  ",(0,n.yg)("a",{parentName:"p",href:"https://earthdata.nasa.gov/about/science-system-description/eosdis-components/global-imagery-browse-services-gibs"},"Global Imagery Browse Services")),(0,n.yg)("h3",{id:"granule"},"Granule"),(0,n.yg)("p",null,"  A granule is the smallest aggregation of data that can be independently managed (described, inventoried, and retrieved). Granules are always associated with a collection, which is a grouping of granules. A granule is a grouping of data files."),(0,n.yg)("h3",{id:"iam"},"IAM"),(0,n.yg)("p",null,"  AWS Identity and Access Management."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/iam/"},"AWS IAMs"),"."),(0,n.yg)("h3",{id:"integratordeveloper"},"Integrator/Developer"),(0,n.yg)("p",null,"  Those who work within Cumulus and AWS for deployments and to manage workflows."),(0,n.yg)("h3",{id:"kinesis"},"Kinesis"),(0,n.yg)("p",null,"  Amazon's platform for streaming data on AWS."),(0,n.yg)("p",null,"  See ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/kinesis/index.html"},"AWS Kinesis")," for more information."),(0,n.yg)("h3",{id:"lambda"},"Lambda"),(0,n.yg)("p",null,"  AWS's cloud  service that lets you run code without provisioning or managing servers."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS's lambda page"),"."),(0,n.yg)("h3",{id:"module-terraform"},"Module (Terraform)"),(0,n.yg)("p",null,"  Refers to a ",(0,n.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/configuration/modules.html"},"terraform module"),"."),(0,n.yg)("h3",{id:"node"},"Node"),(0,n.yg)("p",null,"  See ",(0,n.yg)("a",{parentName:"p",href:"https://nodejs.org/en/about"},"node.js"),"."),(0,n.yg)("h3",{id:"npm"},"Npm"),(0,n.yg)("p",null,"  Node package manager."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs.com"),"."),(0,n.yg)("h3",{id:"operator"},"Operator"),(0,n.yg)("p",null,"  Those who work within Cumulus to ingest/archive data and manage collections."),(0,n.yg)("h3",{id:"pdr"},"PDR"),(0,n.yg)("p",null,'  "Polling Delivery Mechanism" used in "DAAC Ingest" workflows.'),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://earthdata.nasa.gov/user-resources/standards-and-references/polling-with-delivery-record-pdr-mechanism"},"nasa.gov"),"."),(0,n.yg)("h3",{id:"packages-npm"},"Packages (NPM)"),(0,n.yg)("p",null,"  ",(0,n.yg)("a",{parentName:"p",href:"https://www.npm.js.com"},"NPM")," hosted node.js packages.   Cumulus packages can be found on NPM's site ",(0,n.yg)("a",{parentName:"p",href:"https://www.npmjs.com/org/cumulus"},"here")),(0,n.yg)("h3",{id:"provider"},"Provider"),(0,n.yg)("p",null,"  Data source that generates and/or distributes data for Cumulus workflows to act upon."),(0,n.yg)("p",null,"  For more information, see the ",(0,n.yg)("a",{parentName:"p",href:"./configuration/data-management-types#providers"},"Cumulus documentation"),"."),(0,n.yg)("h3",{id:"rule"},"Rule"),(0,n.yg)("p",null,"  Rules are configurable scheduled events that trigger workflows based on various criteria."),(0,n.yg)("p",null,"  For more information, see the ",(0,n.yg)("a",{parentName:"p",href:"./configuration/data-management-types#rules"},"Cumulus Rules documentation"),"."),(0,n.yg)("h3",{id:"s3"},"S3"),(0,n.yg)("p",null,"  Amazon's Simple Storage Service provides data object storage in the cloud.   Used in Cumulus to store configuration, data and more."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://imgs.xkcd.com/comics/marsiforming_2x.png"},"AWS's s3 page"),"."),(0,n.yg)("h3",{id:"sips"},"SIPS"),(0,n.yg)("p",null,"  Science Investigator-led Processing Systems.   In the context of DAAC ingest, this refers to data producers/providers."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://earthdata.nasa.gov/about/sips"},"nasa.gov"),"."),(0,n.yg)("h3",{id:"sns"},"SNS"),(0,n.yg)("p",null,"  Amazon's Simple Notification Service provides a messaging service that allows publication of and subscription to events.   Used in Cumulus to trigger workflow events, track event failures, and others."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/sns/"},"AWS's SNS page"),"."),(0,n.yg)("h3",{id:"sqs"},"SQS"),(0,n.yg)("p",null,"  Amazon's Simple Queue Service."),(0,n.yg)("p",null,"  For more information, see ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/sqs/"},"AWS's SQS page"),"."),(0,n.yg)("h3",{id:"stack"},"Stack"),(0,n.yg)("p",null,"  A collection of AWS resources you can manage as a single unit."),(0,n.yg)("p",null,"  In the context of Cumulus, this refers to a deployment of the ",(0,n.yg)("inlineCode",{parentName:"p"},"cumulus")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"data-persistence")," modules that is managed by ",(0,n.yg)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")),(0,n.yg)("h3",{id:"step-function"},"Step Function"),(0,n.yg)("p",null,"  AWS's web service that allows you to compose complex workflows as a state machine comprised of tasks (Lambdas, activities hosted on EC2/ECS, some AWS service APIs, etc).   See ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"},"AWS's Step Function Documentation")," for more information.    In the context of Cumulus these are the underlying AWS service used to create Workflows."),(0,n.yg)("h3",{id:"terraform"},"Terraform"),(0,n.yg)("p",null,"  Terraform is the tool that you will use for deployment and configuration of your Cumulus environment."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"For more information on Terraform and how it works, see ",(0,n.yg)("a",{parentName:"li",href:"https://www.terraform.io/intro/index.html"},"Introduction to Terraform"),"."),(0,n.yg)("li",{parentName:"ul"},"For steps on how to use Terraform for Cumulus, see ",(0,n.yg)("a",{parentName:"li",href:"deployment"},"How to Deploy Cumulus"),".")),(0,n.yg)("h3",{id:"workflows"},"Workflows"),(0,n.yg)("p",null,"  ",(0,n.yg)("a",{parentName:"p",href:"workflows"},"Workflows")," are comprised of one or more AWS Lambda Functions and ECS Activities to discover, ingest, process, manage and archive data."))}g.isMDXComponent=!0}}]);