"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[89374],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>m});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),y=n,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||s;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},88256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(45072),n=a(95656),s=(a(11504),a(95788)),i=["components"],o={id:"replay-archived-sqs-messages",title:"How to replay SQS messages archived in S3",hide_title:!1},l=void 0,p={unversionedId:"features/replay-archived-sqs-messages",id:"features/replay-archived-sqs-messages",title:"How to replay SQS messages archived in S3",description:"Context",source:"@site/../docs/features/replay-archived-sqs-messages.md",sourceDirName:"features",slug:"/features/replay-archived-sqs-messages",permalink:"/cumulus/docs/next/features/replay-archived-sqs-messages",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jennifer Tran",lastUpdatedAt:1628047755,formattedLastUpdatedAt:"Aug 4, 2021",frontMatter:{id:"replay-archived-sqs-messages",title:"How to replay SQS messages archived in S3",hide_title:!1},sidebar:"docs",previous:{title:"How to replay Kinesis messages after an outage",permalink:"/cumulus/docs/next/features/replay-kinesis-messages"},next:{title:"Troubleshooting",permalink:"/cumulus/docs/next/category/troubleshooting"}},u={},c=[{value:"Context",id:"context",level:2},{value:"Replay SQS messages endpoint",id:"replay-sqs-messages-endpoint",level:2},{value:"Start replaying archived SQS messages",id:"start-replaying-archived-sqs-messages",level:2},{value:"Status tracking",id:"status-tracking",level:2}],d={toc:c},y="wrapper";function m(e){var t=e.components,a=(0,n.c)(e,i);return(0,s.yg)(y,(0,r.c)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"context"},"Context"),(0,s.yg)("p",null,"Cumulus archives all incoming SQS messages to S3 and removes messages once they have been processed. Unprocessed messages are archived at the path: ",(0,s.yg)("inlineCode",{parentName:"p"},"${stackName}/archived-incoming-messages/${queueName}/${messageId}")),(0,s.yg)("h2",{id:"replay-sqs-messages-endpoint"},"Replay SQS messages endpoint"),(0,s.yg)("p",null,"The Cumulus API has added a new endpoint, ",(0,s.yg)("inlineCode",{parentName:"p"},"/replays/sqs"),". This endpoint will allow you to start a replay operation to requeue all archived SQS messages by ",(0,s.yg)("inlineCode",{parentName:"p"},"queueName")," and returns an AsyncOperationId for operation status tracking."),(0,s.yg)("h2",{id:"start-replaying-archived-sqs-messages"},"Start replaying archived SQS messages"),(0,s.yg)("p",null,"In order to start a replay, you must perform a ",(0,s.yg)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,s.yg)("inlineCode",{parentName:"p"},"replays/sqs")," endpoint."),(0,s.yg)("p",null,"The required and optional fields that should be part of the body of this request are documented below."),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:null},"Field"),(0,s.yg)("th",{parentName:"tr",align:null},"Type"),(0,s.yg)("th",{parentName:"tr",align:null},"Description"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"queueName")),(0,s.yg)("td",{parentName:"tr",align:null},"string"),(0,s.yg)("td",{parentName:"tr",align:null},"Any valid SQS queue name (",(0,s.yg)("em",{parentName:"td"},"not")," ARN)")))),(0,s.yg)("h2",{id:"status-tracking"},"Status tracking"),(0,s.yg)("p",null,"A successful response from the ",(0,s.yg)("inlineCode",{parentName:"p"},"/replays/sqs")," endpoint will contain an ",(0,s.yg)("inlineCode",{parentName:"p"},"asyncOperationId")," field.\nUse this ID with the ",(0,s.yg)("inlineCode",{parentName:"p"},"/asyncOperations")," endpoint to track the status."))}m.isMDXComponent=!0}}]);