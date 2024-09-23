"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[21350],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(t),y=i,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=y;var r={};for(var u in n)hasOwnProperty.call(n,u)&&(r[u]=n[u]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},53591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(58168),i=t(98587),o=(t(96540),t(15680)),l=["components"],r={id:"execution_payload_retention",title:"Execution Payload Retention",hide_title:!1},u=void 0,s={unversionedId:"features/execution_payload_retention",id:"version-v18.4.0/features/execution_payload_retention",title:"Execution Payload Retention",description:"In addition to CloudWatch logs and AWS StepFunction API records, Cumulus automatically stores the initial and 'final' (the last update to the execution record) payload values as part of the Execution record in your RDS database and Elasticsearch.",source:"@site/versioned_docs/version-v18.4.0/features/execution_payload_retention.md",sourceDirName:"features",slug:"/features/execution_payload_retention",permalink:"/cumulus/docs/v18.4.0/features/execution_payload_retention",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"execution_payload_retention",title:"Execution Payload Retention",hide_title:!1},sidebar:"docs",previous:{title:"Cumulus Dead Letter Archive",permalink:"/cumulus/docs/v18.4.0/features/dead_letter_archive"},next:{title:"Reconciliation Reports",permalink:"/cumulus/docs/v18.4.0/features/reports"}},c={},d=[{value:"Payload record cleanup",id:"payload-record-cleanup",level:2},{value:"Asynchronous es task",id:"asynchronous-es-task",level:3},{value:"Execution backlog cleanup",id:"execution-backlog-cleanup",level:2},{value:"Configuration",id:"configuration",level:3},{value:"daily<em>execution_payload_cleanup_schedule_expression </em>(string)_",id:"dailyexecution_payload_cleanup_schedule_expression-string_",level:4},{value:"cleanup<em>running </em>(bool)_",id:"cleanuprunning-bool_",level:4},{value:"cleanup<em>non_running </em>(bool)_",id:"cleanupnon_running-bool_",level:4},{value:"payload<em>timeout </em>(number)_",id:"payloadtimeout-number_",level:4},{value:"update<em>limit </em>(number)_",id:"updatelimit-number_",level:4},{value:"es<em>index </em>(string)_",id:"esindex-string_",level:4}],p={toc:d},y="wrapper";function m(e){var n=e.components,t=(0,i.A)(e,l);return(0,o.yg)(y,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In addition to CloudWatch logs and AWS StepFunction API records, Cumulus automatically stores the initial and 'final' (the last update to the execution record) payload values as part of the Execution record in your RDS database and Elasticsearch."),(0,o.yg)("p",null,'This allows access via the API (or optionally direct DB/Elasticsearch querying) for debugging/reporting purposes.    The data is stored in the "originalPayload" and "finalPayload" fields.'),(0,o.yg)("h2",{id:"payload-record-cleanup"},"Payload record cleanup"),(0,o.yg)("p",null,"To reduce storage requirements, a CloudWatch rule (",(0,o.yg)("inlineCode",{parentName:"p"},"{stack-name}-dailyExecutionPayloadCleanupRule"),") triggering a daily run of the provided cleanExecutions lambda has been added.  This lambda will remove a batch of payload records in elasticsearch that are older than the specified configuration."),(0,o.yg)("h3",{id:"asynchronous-es-task"},"Asynchronous es task"),(0,o.yg)("p",null,"The cleanExecutions lambda launches an asynchronous elasticsearch cleanup task which can be monitored from outside of the lambda function."),(0,o.yg)("p",null,"To poll the task's current status use"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},' > curl --request GET ${es_endpoint}/_tasks/${task_id}\n\n #{"completed":false,"task":{"node":"pmXVVuVLTDmkv5NWhQeoLg","id":3231161,"type":"transport","action":"indices:data/write/update/byquery","status":{"total":300000,"updated":12000,"created":0,"deleted":0,"batches":13,"version_conflicts":0,"noops":0,"retries":{"bulk":0,"search":0},"throttled_millis":0,"requests_per_second":-1.0,"throttled_until_millis":0},"description":"update-by-query [cumulus][execution] updated with Script{type=inline, lang=\'painless\', idOrCode=\'ctx._source.remove(\'finalPayload\'); ctx._source.remove(\'originalPayload\')\', options={}, params={}}","start_time_in_millis":1721400177604,"running_time_in_nanos":11020601675,"cancellable":true}}\n \n')),(0,o.yg)("p",null,"to cancel the task use"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},' > curl --request POST ${es_endpoint}/_tasks/${task_id}/_cancel\n \n #{"nodes":{"pmXVVuVLTDmkv5NWhQeoLg":{"name":"pmXVVuV","roles":["master","data","ingest"],"tasks":{"pmXVVuVLTDmkv5NWhQeoLg:3231161":{"node":"pmXVVuVLTDmkv5NWhQeoLg","id":3231161,"type":"transport","action":"indices:data/write/update/byquery","start_time_in_millis":1721400177604,"running_time_in_nanos":58473690222,"cancellable":true}}}}}\n \n')),(0,o.yg)("p",null,"Upon launch of this elasticsearch task, the cleanExecutions lambda will log (accessible from CloudWatch) the task_id needed above, along with its best guess (subject to change if you are ssh tunnelling to the es cluster etc.) of the es_endpoint and formatted curl commands"),(0,o.yg)("h2",{id:"execution-backlog-cleanup"},"Execution backlog cleanup"),(0,o.yg)("p",null,"To facilitate removing payloads for a large quantity of executions, this lambda specifies an update_limit configuration to avoid overwhelming elasticsearch.\nFor cleanup of existing execution payloads the following is recommended:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"set the daily_execution_payload_cleanup_schedule_expression to run this hourly: ",(0,o.yg)("inlineCode",{parentName:"li"},'"cron(0 * * * ? *)"')),(0,o.yg)("li",{parentName:"ul"},"a conservative update_limit is 1,000,000: this has been tested to be workable on a 1 node t2.small.search cluster")),(0,o.yg)("p",null,"Starting with this configuration, 24 million Elasticsearch records per day can be cleaned up. A more aggressive schedule is likely possible, but will need testing in SIT/UAT to ensure compatibility with cluster configuration.\nOnce the older executions have been taken care of, a similar configuration should be able to run once per day and keep up with ingest rate"),(0,o.yg)("h3",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"The following configuration flags have been made available in the ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus")," module. They may be overridden in your deployment's instance of the ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus")," module by adding the following configuration options:"),(0,o.yg)("h4",{id:"dailyexecution_payload_cleanup_schedule_expression-string_"},"daily",(0,o.yg)("em",{parentName:"h4"},"execution_payload_cleanup_schedule_expression "),"(string)_"),(0,o.yg)("p",null,"This configuration option sets the execution times for this Lambda to run, using a Cloudwatch cron expression."),(0,o.yg)("p",null,"Default value is ",(0,o.yg)("inlineCode",{parentName:"p"},'"cron(0 4 * * ? *)"'),"."),(0,o.yg)("h4",{id:"cleanuprunning-bool_"},"cleanup",(0,o.yg)("em",{parentName:"h4"},"running "),"(bool)_"),(0,o.yg)("p",null,"This configuration option, when set to true, will enable cleanup of ",(0,o.yg)("inlineCode",{parentName:"p"},"running")," execution payloads."),(0,o.yg)("p",null,"Default value is ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("h4",{id:"cleanupnon_running-bool_"},"cleanup",(0,o.yg)("em",{parentName:"h4"},"non_running "),"(bool)_"),(0,o.yg)("p",null,"This configuration option, when set to true, will enable cleanup of non-running (any status ",(0,o.yg)("em",{parentName:"p"},"other")," than ",(0,o.yg)("inlineCode",{parentName:"p"},"running"),") execution payloads."),(0,o.yg)("p",null,"Default value is ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,o.yg)("h4",{id:"payloadtimeout-number_"},"payload",(0,o.yg)("em",{parentName:"h4"},"timeout "),"(number)_"),(0,o.yg)("p",null,"This configuration defines the number of days after which an execution record will be slated for cleanup by this script."),(0,o.yg)("p",null,"Default value is 10"),(0,o.yg)("h4",{id:"updatelimit-number_"},"update",(0,o.yg)("em",{parentName:"h4"},"limit "),"(number)_"),(0,o.yg)("p",null,"This configuration defines the maximum number of executions to clean up in one run."),(0,o.yg)("p",null,"default value is 10,000"),(0,o.yg)("h4",{id:"esindex-string_"},"es",(0,o.yg)("em",{parentName:"h4"},"index "),"(string)_"),(0,o.yg)("p",null,"this configuration defines the elasticsearch index to search in for elasticsearch executions to clean up"),(0,o.yg)("p",null,"Default value is ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus")))}m.isMDXComponent=!0}}]);