"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[19572],{95788:(e,t,n)=>{n.d(t,{Iu:()=>m,yg:()=>y});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,y=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(y,s(s({ref:t},m),{},{components:n})):a.createElement(y,s({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},36524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(45072),r=n(95656),i=(n(11504),n(95788)),s=["components"],o={id:"replay-kinesis-messages",title:"How to replay Kinesis messages after an outage",hide_title:!1},l=void 0,p={unversionedId:"features/replay-kinesis-messages",id:"version-v9.9.0/features/replay-kinesis-messages",title:"How to replay Kinesis messages after an outage",description:"After a period of outage, it may be necessary for a Cumulus operator to reprocess or 'replay' messages that arrived on an AWS Kinesis Data Stream but did not trigger an ingest. This document serves as an outline on how to start a replay operation, and how to perform status tracking. Cumulus supports replay of all Kinesis messages on a stream (subject to the normal RetentionPeriod constraints), or all messages within a given time slice delimited by start and end timestamps.",source:"@site/versioned_docs/version-v9.9.0/features/replay-kinesis-messages.md",sourceDirName:"features",slug:"/features/replay-kinesis-messages",permalink:"/cumulus/docs/v9.9.0/features/replay-kinesis-messages",draft:!1,tags:[],version:"v9.9.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"replay-kinesis-messages",title:"How to replay Kinesis messages after an outage",hide_title:!1},sidebar:"Operator Docs",previous:{title:"Re-running workflow executions",permalink:"/cumulus/docs/v9.9.0/troubleshooting/rerunning-workflow-executions"},next:{title:"Operator Common Use Cases",permalink:"/cumulus/docs/v9.9.0/operator-docs/ops-common-use-cases"}},m={},d=[{value:"Replays endpoint",id:"replays-endpoint",level:2},{value:"Start a replay",id:"start-a-replay",level:2},{value:"Status tracking",id:"status-tracking",level:2}],u={toc:d},g="wrapper";function y(e){var t=e.components,n=(0,r.c)(e,s);return(0,i.yg)(g,(0,a.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"After a period of outage, it may be necessary for a Cumulus operator to reprocess or 'replay' messages that arrived on an AWS Kinesis Data Stream but did not trigger an ingest. This document serves as an outline on how to start a replay operation, and how to perform status tracking. Cumulus supports replay of all Kinesis messages on a stream (subject to the normal RetentionPeriod constraints), or all messages within a given time slice delimited by start and end timestamps."),(0,i.yg)("p",null,"As Kinesis has no comparable field to e.g. the SQS ReceiveCount on its records, Cumulus cannot tell which messages within a given time slice have never been processed, and cannot guarantee only missed messages will be processed. Users will have to rely on duplicate handling or some other method of identifying messages that should not be processed within the time slice."),(0,i.yg)("p",null,"NOTE: This operation flow effectively changes only the trigger mechanism for Kinesis ingest notifications. The existence of valid Kinesis-type rules and all other normal requirements for the triggering of ingest via Kinesis still apply."),(0,i.yg)("h2",{id:"replays-endpoint"},"Replays endpoint"),(0,i.yg)("p",null,"Cumulus has added a new endpoint to its API, ",(0,i.yg)("inlineCode",{parentName:"p"},"/replays"),". This endpoint will allow you to start replay operations and returns an AsyncOperationId for operation status tracking."),(0,i.yg)("h2",{id:"start-a-replay"},"Start a replay"),(0,i.yg)("p",null,"In order to start a replay, you must perform a ",(0,i.yg)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,i.yg)("inlineCode",{parentName:"p"},"replays")," endpoint."),(0,i.yg)("p",null,"The required and optional fields that should be part of the body of this request are documented below."),(0,i.yg)("p",null,"NOTE: As the ",(0,i.yg)("inlineCode",{parentName:"p"},"endTimestamp")," relies on a comparison with the Kinesis server-side ",(0,i.yg)("inlineCode",{parentName:"p"},"ApproximateArrivalTimestamp"),", and given that there is no documented level of accuracy for the approximation, it is recommended that the ",(0,i.yg)("inlineCode",{parentName:"p"},"endTimestamp")," include some amount of buffer to allow for slight discrepancies.\nIf tolerable, the same is recommended for the ",(0,i.yg)("inlineCode",{parentName:"p"},"startTimestamp")," although it is used differently and less vulnerable to discrepancies since a server-side arrival timestamp should never be earlier than the client-side request timestamp."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Field"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Required"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"type")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"required"),(0,i.yg)("td",{parentName:"tr",align:null},"Currently only accepts ",(0,i.yg)("inlineCode",{parentName:"td"},"kinesis"),".")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"kinesisStream")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"for type ",(0,i.yg)("inlineCode",{parentName:"td"},"kinesis")),(0,i.yg)("td",{parentName:"tr",align:null},"Any valid kinesis stream name (",(0,i.yg)("em",{parentName:"td"},"not")," ARN)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"kinesisStreamCreationTimestamp")),(0,i.yg)("td",{parentName:"tr",align:null},"*"),(0,i.yg)("td",{parentName:"tr",align:null},"optional"),(0,i.yg)("td",{parentName:"tr",align:null},"Any input valid for a JS Date constructor. For reasons to use this field see ",(0,i.yg)("a",{parentName:"td",href:"https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListShards.html#API_ListShards_RequestSyntax"},"AWS documentation on StreamCreationTimestamp"),".")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"endTimestamp")),(0,i.yg)("td",{parentName:"tr",align:null},"*"),(0,i.yg)("td",{parentName:"tr",align:null},"optional"),(0,i.yg)("td",{parentName:"tr",align:null},"Any input valid for a JS Date constructor. Messages newer than this timestamp will be skipped.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"startTimestamp")),(0,i.yg)("td",{parentName:"tr",align:null},"*"),(0,i.yg)("td",{parentName:"tr",align:null},"optional"),(0,i.yg)("td",{parentName:"tr",align:null},"Any input valid for a JS Date constructor. Messages will be fetched from the Kinesis stream starting at this timestamp. Ignored if it is further in the past than the stream's retention period.")))),(0,i.yg)("h2",{id:"status-tracking"},"Status tracking"),(0,i.yg)("p",null,"A successful response from the ",(0,i.yg)("inlineCode",{parentName:"p"},"/replays")," endpoint will contain an ",(0,i.yg)("inlineCode",{parentName:"p"},"asyncOperationId")," field.\nUse this ID with the ",(0,i.yg)("inlineCode",{parentName:"p"},"/asyncOperations")," endpoint to track the status."))}y.isMDXComponent=!0}}]);