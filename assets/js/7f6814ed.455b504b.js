"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[65294],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return n?o.createElement(y,i(i({ref:t},d),{},{components:n})):o.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var o=n(58168),a=n(98587),l=(n(96540),n(15680)),i=["components"],r={id:"execution_payload_retention",title:"Execution Payload Retention",hide_title:!1},u=void 0,c={unversionedId:"features/execution_payload_retention",id:"version-v9.0.0/features/execution_payload_retention",title:"Execution Payload Retention",description:"In addition to CloudWatch logs and AWS StepFunction API records, Cumulus automatically stores the initial and 'final' (the last update to the execution record) payload values as part of the Execution record in DynamoDB and Elasticsearch.",source:"@site/versioned_docs/version-v9.0.0/features/execution_payload_retention.md",sourceDirName:"features",slug:"/features/execution_payload_retention",permalink:"/cumulus/docs/v9.0.0/features/execution_payload_retention",draft:!1,tags:[],version:"v9.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"execution_payload_retention",title:"Execution Payload Retention",hide_title:!1},sidebar:"docs",previous:{title:"EMS Reporting",permalink:"/cumulus/docs/v9.0.0/features/ems_reporting"},next:{title:"Reconciliation Reports",permalink:"/cumulus/docs/v9.0.0/features/reports"}},d={},p=[{value:"Payload record cleanup",id:"payload-record-cleanup",level:2},{value:"Configuration",id:"configuration",level:3},{value:"daily<em>execution_payload_cleanup_schedule_expression </em>(string)_",id:"dailyexecution_payload_cleanup_schedule_expression-string_",level:4},{value:"complete<em>execution_payload_timeout_disable </em>(bool)_",id:"completeexecution_payload_timeout_disable-bool_",level:4},{value:"complete<em>execution_payload_timeout </em>(number)_",id:"completeexecution_payload_timeout-number_",level:4},{value:"non<em>complete_execution_payload_timeout_disable </em>(bool)_",id:"noncomplete_execution_payload_timeout_disable-bool_",level:4},{value:"non<em>complete_execution_payload_timeout </em>(number)_",id:"noncomplete_execution_payload_timeout-number_",level:4}],s={toc:p},m="wrapper";function y(e){var t=e.components,n=(0,a.A)(e,i);return(0,l.yg)(m,(0,o.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"In addition to CloudWatch logs and AWS StepFunction API records, Cumulus automatically stores the initial and 'final' (the last update to the execution record) payload values as part of the Execution record in DynamoDB and Elasticsearch."),(0,l.yg)("p",null,'This allows access via the API (or optionally direct DB/Elasticsearch querying) for debugging/reporting purposes.    The data is stored in the "originalPayload" and "finalPayload" fields.'),(0,l.yg)("h2",{id:"payload-record-cleanup"},"Payload record cleanup"),(0,l.yg)("p",null,"To reduce storage requirements, a CloudWatch rule (",(0,l.yg)("inlineCode",{parentName:"p"},"{stack-name}-dailyExecutionPayloadCleanupRule"),") triggering a daily run of the provided cleanExecutions lambda has been added.  This lambda will remove all 'completed' and 'non-completed' payload records in the database that are older than the specified configuration."),(0,l.yg)("h3",{id:"configuration"},"Configuration"),(0,l.yg)("p",null,"The following configuration flags have been made available in the ",(0,l.yg)("inlineCode",{parentName:"p"},"cumulus")," module.   They may be overridden in your deployment's instance of the ",(0,l.yg)("inlineCode",{parentName:"p"},"cumulus")," module by adding the following configuration options:"),(0,l.yg)("h4",{id:"dailyexecution_payload_cleanup_schedule_expression-string_"},"daily",(0,l.yg)("em",{parentName:"h4"},"execution_payload_cleanup_schedule_expression "),"(string)_"),(0,l.yg)("p",null,"This configuration option sets the execution times for this Lambda to run, using a Cloudwatch cron expression."),(0,l.yg)("p",null,"Default value is ",(0,l.yg)("inlineCode",{parentName:"p"},'"cron(0 4 * * ? *)"'),"."),(0,l.yg)("h4",{id:"completeexecution_payload_timeout_disable-bool_"},"complete",(0,l.yg)("em",{parentName:"h4"},"execution_payload_timeout_disable "),"(bool)_"),(0,l.yg)("p",null,"This configuration option, when set to true, will disable all cleanup of ",(0,l.yg)("inlineCode",{parentName:"p"},"completed")," execution payloads."),(0,l.yg)("p",null,"Default value is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h4",{id:"completeexecution_payload_timeout-number_"},"complete",(0,l.yg)("em",{parentName:"h4"},"execution_payload_timeout "),"(number)_"),(0,l.yg)("p",null,"This flag defines the cleanup threshold for executions with a 'completed' status in days.   Records with ",(0,l.yg)("inlineCode",{parentName:"p"},"updatedAt")," values older than this with payload information  will have that information removed."),(0,l.yg)("p",null,"Default value is ",(0,l.yg)("inlineCode",{parentName:"p"},"10"),"."),(0,l.yg)("h4",{id:"noncomplete_execution_payload_timeout_disable-bool_"},"non",(0,l.yg)("em",{parentName:"h4"},"complete_execution_payload_timeout_disable "),"(bool)_"),(0,l.yg)("p",null,'This configuration option, when set to true, will disable all cleanup of "non-complete" (any status ',(0,l.yg)("em",{parentName:"p"},"other")," than ",(0,l.yg)("inlineCode",{parentName:"p"},"completed"),") execution payloads."),(0,l.yg)("p",null,"Default value is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h4",{id:"noncomplete_execution_payload_timeout-number_"},"non",(0,l.yg)("em",{parentName:"h4"},"complete_execution_payload_timeout "),"(number)_"),(0,l.yg)("p",null,"This flag defines the cleanup threshold for executions with a status other than 'complete' in days.   Records with updateTime values older than this with payload information  will have that information removed."),(0,l.yg)("p",null,"Default value is 30 days."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"complete_execution_payload_disable/non_complete_execution_payload_disable")),(0,l.yg)("p",null,"These flags (true/false) determine if the cleanup script's logic for 'complete' and 'non-complete' executions will run.   Default value is false for both."))}y.isMDXComponent=!0}}]);