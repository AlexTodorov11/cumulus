"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[58092],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),g=r,h=c["".concat(l,".").concat(g)]||c[g]||p[g]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},57716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(58168),r=a(98587),i=(a(96540),a(15680)),s=["components"],o={id:"dead_letter_archive",title:"Cumulus Dead Letter Archive",hide_title:!1},l=void 0,u={unversionedId:"features/dead_letter_archive",id:"features/dead_letter_archive",title:"Cumulus Dead Letter Archive",description:"This documentation explains the Cumulus dead letter archive and associated functionality.",source:"@site/../docs/features/dead_letter_archive.md",sourceDirName:"features",slug:"/features/dead_letter_archive",permalink:"/cumulus/docs/next/features/dead_letter_archive",draft:!1,tags:[],version:"current",lastUpdatedBy:"etcart",lastUpdatedAt:1713990679,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{id:"dead_letter_archive",title:"Cumulus Dead Letter Archive",hide_title:!1},sidebar:"docs",previous:{title:"Dead Letter Queues",permalink:"/cumulus/docs/next/features/dead_letter_queues"},next:{title:"Execution Payload Retention",permalink:"/cumulus/docs/next/features/execution_payload_retention"}},d={},c=[{value:"DB Records DLQ Archive",id:"db-records-dlq-archive",level:2},{value:"Dead Letter Archive recovery",id:"dead-letter-archive-recovery",level:2},{value:"Dead Letter Archive Message structure",id:"dead-letter-archive-message-structure",level:2},{value:"Dead Letter Archive Body contents",id:"dead-letter-archive-body-contents",level:2},{value:"Search and View Dead Letter Archive Messages",id:"search-and-view-dead-letter-archive-messages",level:2},{value:"Procedure",id:"procedure",level:3}],p={toc:c},g="wrapper";function h(e){var t=e.components,a=(0,r.A)(e,s);return(0,i.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This documentation explains the Cumulus dead letter archive and associated functionality."),(0,i.yg)("h2",{id:"db-records-dlq-archive"},"DB Records DLQ Archive"),(0,i.yg)("p",null,"The Cumulus system contains a number of ",(0,i.yg)("a",{parentName:"p",href:"/cumulus/docs/next/features/dead_letter_queues"},"dead letter queues"),". Perhaps the most important system lambda function supported by a DLQ is the ",(0,i.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecords")," lambda function which parses Cumulus messages from workflow executions to generate and write database records to the Cumulus database."),(0,i.yg)("p",null,"As of Cumulus v9+, the dead letter queue for this lambda (named ",(0,i.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecordsDeadLetterQueue"),") has been updated with a consumer lambda that will automatically write any incoming records to the S3 system bucket, under the path ",(0,i.yg)("inlineCode",{parentName:"p"},"<stackName>/dead-letter-archive/sqs/"),". This will allow integrators and operators engaged in debugging missing records to inspect any Cumulus messages which failed to process and did not result in the successful creation of database records."),(0,i.yg)("h2",{id:"dead-letter-archive-recovery"},"Dead Letter Archive recovery"),(0,i.yg)("p",null,"In addition to the above, as of Cumulus v9+, the Cumulus API also contains a new endpoint at ",(0,i.yg)("inlineCode",{parentName:"p"},"/deadLetterArchive/recoverCumulusMessages"),"."),(0,i.yg)("p",null,"Sending a POST request to this endpoint will trigger a Cumulus AsyncOperation that will attempt to reprocess (and if successful delete) all Cumulus messages in the dead letter archive, using the same underlying logic as the existing ",(0,i.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecords"),". Otherwise, all Cumulus messages that fail to be reprocessed will be moved to a new archive location under the path ",(0,i.yg)("inlineCode",{parentName:"p"},"<stackName>/dead-letter-archive/failed-sqs/<YYYY-MM-DD>"),"."),(0,i.yg)("p",null,"This endpoint may prove particularly useful when recovering from extended or unexpected database outage, where messages failed to process due to external outage and there is no essential malformation of each Cumulus message."),(0,i.yg)("h2",{id:"dead-letter-archive-message-structure"},"Dead Letter Archive Message structure"),(0,i.yg)("p",null,"The Messages yielded to the dead letter archive have some inherent uncertainty to their structure due to their nature as failed messages that may have failed due to structural issues. However there is a standard format that they will overwhelmingly conform to. This follows, but adds attributes to the format documented at ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_Message.html"},"SQSMessage")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"{\n    body: [string], // parseable as EventBridge\n    error: [string | null], // error that caused the message to be shunted to the DLQ\n    execution: [string | null], // execution ARN for the execution which created the originating sf event\n    time: [string | null], // Zulu timestamp of of the originating sf event\n    collection: [string | null], // collection the granule belongs to\n    granules: [Array[string | null] | null], // granules \n    stateMachine: [string | null], // ARN of the triggering workflow\n    status: [string | null], status of triggering execution\n    /* these following are standard, not built by cumulus */\n    md5OfBody: [string], // checksum of message body\n    eventSource: [string], // aws:sqs\n    awsRegion: [string], // aws region that this is happening in\n    messageId: [string], // uniqueID of the DLQ message\n    receiptHandle: [string], // An identifier associated with the act of receiving the message. A new receipt handle is returned every time you receive a message.\n    attributes: [Object], // A map of the attributes requested in ReceiveMessage to their respective values.\n    messageAttributes: [Object], // Each message attribute consists of a Name, Type, and Value. \n}\n")),(0,i.yg)("p",null,"note that each of these fields except for 'body' can be null if no data was found, usually due to a parsing error\nfor further details on body contents: ","[see below]"),(0,i.yg)("h2",{id:"dead-letter-archive-body-contents"},"Dead Letter Archive Body contents"),(0,i.yg)("p",null,"The body attribute should be a JSON string containing an event bridge event"),(0,i.yg)("p",null,"Note that"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Because this message body arrived in the Dead Letter Archive because of issues in processing it, there is no strict guarantee that it is a valid json object, or conforms to expected structure. the ",(0,i.yg)("em",{parentName:"li"},"expected")," structure follows."),(0,i.yg)("li",{parentName:"ul"},"Automated processing of these messages ",(0,i.yg)("em",{parentName:"li"},"must")," be prepared for attributes to be missing.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"{\n    version: [string | null], // versionString\n    id: [string | null], // unique ID of the triggering event\n    'detail-type': 'Step Functions Execution Status Change', // defines the below 'detail' spec\n    source: 'aws.states',\n    account: [string], // account ID\n    time: [string], // Zulu timestamp of the originating sf event\n    region: [string], //aws region\n    resources: [Array[string]], //ARNs of involved resources\n    detail: [string], //parses as Step Function Execution Status Change object, see below\n}\n")),(0,i.yg)("p",null,"Step Function Execution Status Change (detail) ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sfn/Interface/DescribeExecutionCommandOutput/"},"here"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"{\n    executionArn: [string], // ARN of the triggering execution\n    stateMachineArn: [string], // ARN of the triggering workflow\n    name: [string], // Execution name of triggering execution\n    status: [string], // status of triggering execution\n    startDate: [int], // timestamp of\n    stopDate: [int | null], // timestamp of\n    input: [string], //parses as the cumulus message input\n    output: [string | null], //parses as the cumulus message output if execution succeeded\n    stateMachineVersionArn: [string | null], // The version ARN is a combination of state machine ARN and the version number separated by a colon (:)\n    stateMachineAliasArn: [string | null], // a combination of state machine ARN and the alias name separated by a colon (:)\n    inputDetails: [CloudWatchEventsExecutionDataDetails], // Details about execution input\n    outputDetails: [CloudWatchEventsExecutionDataDetails | null], // Details about execution output\n    error: [string | null], // The cause string if the state machine execution failed (most errors that send to the DLA will not have a *caught* failure that does not arrive here)\n    cause: [string | null], // the cause string if the state machine execution failed\n    /* note that these redrive statistics can be misleading, as they are not referring to the execution that failed if the triggering execution was sfEventSqsToDbRecords*/\n    redriveCount: [int],\n    redriveDate: [string | null],\n    redriveStatus: [string],\n    redriveStatusReason: [string],\n}\n")),(0,i.yg)("h2",{id:"search-and-view-dead-letter-archive-messages"},"Search and View Dead Letter Archive Messages"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/what-is.html"},"Amazon Athena")," is a powerful serverless query service that allows us\nto analyze data directly from Amazon S3 using standard SQL. One of the key features of Athena is its support for partition\nprojection. ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/partition-projection.html"},"Partition projection")," allows us to define a\nvirtual partitioning scheme for our data stored in Amazon S3 without physically partitioning the data."),(0,i.yg)("p",null,"We have provided an AWS Glue Catalog database, an AWS Glue Catalog table and an example query for querying S3 DLA messages.\nOur AWS Glue Catalog table ",(0,i.yg)("inlineCode",{parentName:"p"},"<prefix>_dla_glue_table")," defines partition projection for ",(0,i.yg)("inlineCode",{parentName:"p"},"eventdate")," key which corresponds\nto ",(0,i.yg)("inlineCode",{parentName:"p"},"date")," folder under Dead Letter Archive S3 storage location."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"<prefix>")," is your stack name with dash replaced by underscore"),(0,i.yg)("h3",{id:"procedure"},"Procedure"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Navigate to AWS Athena Console:"),(0,i.yg)("p",{parentName:"li"},"Launch query editor to ",(0,i.yg)("inlineCode",{parentName:"p"},"Query your data with Trino SQL"),"."),(0,i.yg)("p",{parentName:"li"},"Choose Workgroup ",(0,i.yg)("inlineCode",{parentName:"p"},"<prefix>_athena_workgroup")," from the workgroup drop down menu and acknowledge ",(0,i.yg)("inlineCode",{parentName:"p"},"Workgroup <prefix>_athena_workgroup settings"),"."),(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"Saved queries")," tab should have an example query ",(0,i.yg)("inlineCode",{parentName:"p"},"<prefix>_athena_test_query"),", click it to open."),(0,i.yg)("p",{parentName:"li"},"Select the appropriate database ",(0,i.yg)("inlineCode",{parentName:"p"},"<prefix>_glue_database")," from the Database dropdown menu and run the query.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Write and Run the Query:"),(0,i.yg)("p",{parentName:"li"},"When the query includes the partition key ",(0,i.yg)("inlineCode",{parentName:"p"},"eventdate"),", the query on the table will be executed using ",(0,i.yg)("inlineCode",{parentName:"p"},"partition projection"),"\nsettings and would result in faster results by directly scanning the folder and files based on the partition information\nprovided in the query."),(0,i.yg)("p",{parentName:"li"},"In the following query, the data is filtered based on the eventdate partition key and a specific value in the granules column.\n",(0,i.yg)("inlineCode",{parentName:"p"},"$path")," returns the S3 file location for the data in a table row."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select \"$path\",\n    *\nfrom <prefix>_dla_glue_table\nwhere eventdate between '2024-03-10' and '2024-03-15'\n    and contains(\n        granules,\n        'MOD09GQ.A5039420.mQk0tM.006.9370766211793'\n    )\n")),(0,i.yg)("p",{parentName:"li"},"See ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/ddl-sql-reference.html"},"SQL reference for Athena")," for the complete SQL guide."))))}h.isMDXComponent=!0}}]);