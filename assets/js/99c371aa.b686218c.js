"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[38445],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||s;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(58168),n=r(98587),s=(r(96540),r(15680)),o=["components"],i={id:"dead_letter_archive",title:"Cumulus Dead Letter Archive",hide_title:!1},u=void 0,l={unversionedId:"features/dead_letter_archive",id:"version-v14.1.0/features/dead_letter_archive",title:"Cumulus Dead Letter Archive",description:"This documentation explains the Cumulus dead letter archive and associated functionality.",source:"@site/versioned_docs/version-v14.1.0/features/dead_letter_archive.md",sourceDirName:"features",slug:"/features/dead_letter_archive",permalink:"/cumulus/docs/v14.1.0/features/dead_letter_archive",draft:!1,tags:[],version:"v14.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"dead_letter_archive",title:"Cumulus Dead Letter Archive",hide_title:!1},sidebar:"docs",previous:{title:"Dead Letter Queues",permalink:"/cumulus/docs/v14.1.0/features/dead_letter_queues"},next:{title:"Execution Payload Retention",permalink:"/cumulus/docs/v14.1.0/features/execution_payload_retention"}},d={},c=[{value:"DB Records DLQ Archive",id:"db-records-dlq-archive",level:2},{value:"Dead Letter Archive recovery",id:"dead-letter-archive-recovery",level:2}],p={toc:c},m="wrapper";function f(e){var t=e.components,r=(0,n.A)(e,o);return(0,s.yg)(m,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This documentation explains the Cumulus dead letter archive and associated functionality."),(0,s.yg)("h2",{id:"db-records-dlq-archive"},"DB Records DLQ Archive"),(0,s.yg)("p",null,"The Cumulus system contains a number of ",(0,s.yg)("a",{parentName:"p",href:"/cumulus/docs/v14.1.0/features/dead_letter_queues"},"dead letter queues"),". Perhaps the most important system lambda function supported by a DLQ is the ",(0,s.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecords")," lambda function which parses Cumulus messages from workflow executions to generate and write database records to the Cumulus database."),(0,s.yg)("p",null,"As of Cumulus v9+, the dead letter queue for this lambda (named ",(0,s.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecordsDeadLetterQueue"),") has been updated with a consumer lambda that will automatically write any incoming records to the S3 system bucket, under the path ",(0,s.yg)("inlineCode",{parentName:"p"},"<stackName>/dead-letter-archive/sqs/"),". This will allow integrators and operators engaged in debugging missing records to inspect any Cumulus messages which failed to process and did not result in the successful creation of database records."),(0,s.yg)("h2",{id:"dead-letter-archive-recovery"},"Dead Letter Archive recovery"),(0,s.yg)("p",null,"In addition to the above, as of Cumulus v9+, the Cumulus API also contains a new endpoint at ",(0,s.yg)("inlineCode",{parentName:"p"},"/deadLetterArchive/recoverCumulusMessages"),"."),(0,s.yg)("p",null,"Sending a POST request to this endpoint will trigger a Cumulus AsyncOperation that will attempt to reprocess (and if successful delete) all Cumulus messages in the dead letter archive, using the same underlying logic as the existing ",(0,s.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecords"),". Otherwise, all Cumulus messages that fail to be reprocessed will be moved to a new archive location under the path ",(0,s.yg)("inlineCode",{parentName:"p"},"<stackName>/dead-letter-archive/failed-sqs/<YYYY-MM-DD>"),"."),(0,s.yg)("p",null,"This endpoint may prove particularly useful when recovering from extended or unexpected database outage, where messages failed to process due to external outage and there is no essential malformation of each Cumulus message."))}f.isMDXComponent=!0}}]);