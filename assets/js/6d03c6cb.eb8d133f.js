"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[27167],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>_});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,_=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return o?n.createElement(_,i(i({ref:t},d),{},{components:o})):n.createElement(_,i({ref:t},d))}));function _(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,i=new Array(l);i[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var c=2;c<l;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},63452:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>_,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=o(87462),a=o(63366),l=(o(67294),o(3905)),i=["components"],r={id:"execution_payload_retention",title:"Execution Payload Retention",hide_title:!1},u=void 0,c={unversionedId:"features/execution_payload_retention",id:"version-v10.1.0/features/execution_payload_retention",title:"Execution Payload Retention",description:"In addition to CloudWatch logs and AWS StepFunction API records, Cumulus automatically stores the initial and 'final' (the last update to the execution record) payload values as part of the Execution record in DynamoDB and Elasticsearch.",source:"@site/versioned_docs/version-v10.1.0/features/execution_payload_retention.md",sourceDirName:"features",slug:"/features/execution_payload_retention",permalink:"/cumulus/docs/v10.1.0/features/execution_payload_retention",draft:!1,tags:[],version:"v10.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"execution_payload_retention",title:"Execution Payload Retention",hide_title:!1},sidebar:"docs",previous:{title:"Cumulus Dead Letter Archive",permalink:"/cumulus/docs/v10.1.0/features/dead_letter_archive"},next:{title:"Reconciliation Reports",permalink:"/cumulus/docs/v10.1.0/features/reports"}},d={},p=[{value:"Payload record cleanup",id:"payload-record-cleanup",level:2},{value:"Configuration",id:"configuration",level:3},{value:"daily<em>execution_payload_cleanup_schedule_expression </em>(string)_",id:"dailyexecution_payload_cleanup_schedule_expression-string_",level:4},{value:"complete<em>execution_payload_timeout_disable </em>(bool)_",id:"completeexecution_payload_timeout_disable-bool_",level:4},{value:"complete<em>execution_payload_timeout </em>(number)_",id:"completeexecution_payload_timeout-number_",level:4},{value:"non<em>complete_execution_payload_timeout_disable </em>(bool)_",id:"noncomplete_execution_payload_timeout_disable-bool_",level:4},{value:"non<em>complete_execution_payload_timeout </em>(number)_",id:"noncomplete_execution_payload_timeout-number_",level:4}],s={toc:p},m="wrapper";function _(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)(m,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In addition to CloudWatch logs and AWS StepFunction API records, Cumulus automatically stores the initial and 'final' (the last update to the execution record) payload values as part of the Execution record in DynamoDB and Elasticsearch."),(0,l.kt)("p",null,'This allows access via the API (or optionally direct DB/Elasticsearch querying) for debugging/reporting purposes.    The data is stored in the "originalPayload" and "finalPayload" fields.'),(0,l.kt)("h2",{id:"payload-record-cleanup"},"Payload record cleanup"),(0,l.kt)("p",null,"To reduce storage requirements, a CloudWatch rule (",(0,l.kt)("inlineCode",{parentName:"p"},"{stack-name}-dailyExecutionPayloadCleanupRule"),") triggering a daily run of the provided cleanExecutions lambda has been added.  This lambda will remove all 'completed' and 'non-completed' payload records in the database that are older than the specified configuration."),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The following configuration flags have been made available in the ",(0,l.kt)("inlineCode",{parentName:"p"},"cumulus")," module.   They may be overridden in your deployment's instance of the ",(0,l.kt)("inlineCode",{parentName:"p"},"cumulus")," module by adding the following configuration options:"),(0,l.kt)("h4",{id:"dailyexecution_payload_cleanup_schedule_expression-string_"},"daily",(0,l.kt)("em",{parentName:"h4"},"execution_payload_cleanup_schedule_expression "),"(string)_"),(0,l.kt)("p",null,"This configuration option sets the execution times for this Lambda to run, using a Cloudwatch cron expression."),(0,l.kt)("p",null,"Default value is ",(0,l.kt)("inlineCode",{parentName:"p"},'"cron(0 4 * * ? *)"'),"."),(0,l.kt)("h4",{id:"completeexecution_payload_timeout_disable-bool_"},"complete",(0,l.kt)("em",{parentName:"h4"},"execution_payload_timeout_disable "),"(bool)_"),(0,l.kt)("p",null,"This configuration option, when set to true, will disable all cleanup of ",(0,l.kt)("inlineCode",{parentName:"p"},"completed")," execution payloads."),(0,l.kt)("p",null,"Default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h4",{id:"completeexecution_payload_timeout-number_"},"complete",(0,l.kt)("em",{parentName:"h4"},"execution_payload_timeout "),"(number)_"),(0,l.kt)("p",null,"This flag defines the cleanup threshold for executions with a 'completed' status in days.   Records with ",(0,l.kt)("inlineCode",{parentName:"p"},"updatedAt")," values older than this with payload information  will have that information removed."),(0,l.kt)("p",null,"Default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,l.kt)("h4",{id:"noncomplete_execution_payload_timeout_disable-bool_"},"non",(0,l.kt)("em",{parentName:"h4"},"complete_execution_payload_timeout_disable "),"(bool)_"),(0,l.kt)("p",null,'This configuration option, when set to true, will disable all cleanup of "non-complete" (any status ',(0,l.kt)("em",{parentName:"p"},"other")," than ",(0,l.kt)("inlineCode",{parentName:"p"},"completed"),") execution payloads."),(0,l.kt)("p",null,"Default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h4",{id:"noncomplete_execution_payload_timeout-number_"},"non",(0,l.kt)("em",{parentName:"h4"},"complete_execution_payload_timeout "),"(number)_"),(0,l.kt)("p",null,"This flag defines the cleanup threshold for executions with a status other than 'complete' in days.   Records with updateTime values older than this with payload information  will have that information removed."),(0,l.kt)("p",null,"Default value is 30 days."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"complete_execution_payload_disable/non_complete_execution_payload_disable")),(0,l.kt)("p",null,"These flags (true/false) determine if the cleanup script's logic for 'complete' and 'non-complete' executions will run.   Default value is false for both."))}_.isMDXComponent=!0}}]);