"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[92900],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,k=c["".concat(s,".").concat(p)]||c[p]||_[p]||l;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"task-configuration",title:"Configuration of Tasks",hide_title:!1},s=void 0,u={unversionedId:"configuration/task-configuration",id:"version-v16.0.0/configuration/task-configuration",title:"Configuration of Tasks",description:"The cumulus module exposes values for configuration for some of the provided archive and ingest tasks.   Currently the following are available as configurable variables:",source:"@site/versioned_docs/version-v16.0.0/configuration/task-configuration.md",sourceDirName:"configuration",slug:"/configuration/task-configuration",permalink:"/cumulus/docs/configuration/task-configuration",draft:!1,tags:[],version:"v16.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1684426651,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{id:"task-configuration",title:"Configuration of Tasks",hide_title:!1},sidebar:"docs",previous:{title:"Collection Cost Tracking and Storage Best Practices",permalink:"/cumulus/docs/configuration/collection-storage-best-practices"},next:{title:"Development",permalink:"/cumulus/docs/category/development"}},m={},c=[{value:"cmr_search_client_config",id:"cmr_search_client_config",level:2},{value:"Example",id:"example",level:3},{value:"elasticsearch_client_config",id:"elasticsearch_client_config",level:2},{value:"Example",id:"example-1",level:3},{value:"lambda_timeouts",id:"lambda_timeouts",level:2},{value:"Example",id:"example-2",level:3},{value:"lambda_memory_sizes",id:"lambda_memory_sizes",level:2},{value:"Example",id:"example-3",level:3}],_={toc:c},p="wrapper";function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)(p,(0,r.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"cumulus")," module exposes values for configuration for some of the provided archive and ingest tasks.   Currently the following are available as configurable variables:"),(0,l.kt)("h2",{id:"cmr_search_client_config"},"cmr_search_client_config"),(0,l.kt)("p",null,"Configuration parameters for CMR search client for cumulus archive module tasks in the form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},"<lambda_identifier>_report_cmr_limit = <maximum number records can be returned from cmr-client search, this should be greater than cmr_page_size>\n<lambda_identifier>_report_cmr_page_size = <number of records for each page returned from CMR>\n  type = map(string)\n")),(0,l.kt)("p",null,"More information about cmr limit and cmr page_size can be found from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/cmr-client/src/searchConcept.ts"},"@cumulus/cmr-client")," and ",(0,l.kt)("a",{parentName:"p",href:"https://cmr.earthdata.nasa.gov/search/site/docs/search/api.html#query-parameters"},"CMR Search API document"),"."),(0,l.kt)("p",null,"Currently the following values are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create_reconciliation_report_cmr_limit"),(0,l.kt)("li",{parentName:"ul"},"create_reconciliation_report_cmr_page_size")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tf"},"cmr_search_client_config = {\n  create_reconciliation_report_cmr_limit = 2500\n  create_reconciliation_report_cmr_page_size = 250\n}\n")),(0,l.kt)("h2",{id:"elasticsearch_client_config"},"elasticsearch_client_config"),(0,l.kt)("p",null,"Configuration parameters for Elasticsearch client for cumulus archive module tasks in the form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},"<lambda_identifier>_es_scroll_duration = <duration>\n<lambda_identifier>_es_scroll_size = <size>\n  type = map(string)\n")),(0,l.kt)("p",null,"Currently the following values are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create_reconciliation_report_es_scroll_duration"),(0,l.kt)("li",{parentName:"ul"},"create_reconciliation_report_es_scroll_size")),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tf"},'elasticsearch_client_config = {\n  create_reconciliation_report_es_scroll_duration = "15m"\n  create_reconciliation_report_es_scroll_size = 2000\n}\n')),(0,l.kt)("h2",{id:"lambda_timeouts"},"lambda_timeouts"),(0,l.kt)("p",null,"A configurable map of timeouts (in seconds) for cumulus ingest module task lambdas in the form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},"<lambda_identifier>_timeout: <timeout>\n  type = map(string)\n")),(0,l.kt)("p",null,"Currently the following values are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add_missing_file_checksums_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"discover_granules_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"discover_pdrs_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"fake_processing_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"files_to_granules_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"hello_world_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"hyrax_metadata_update_tasks_timeout"),(0,l.kt)("li",{parentName:"ul"},"lzards_backup_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"move_granules_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"parse_pdr_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"pdr_status_check_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"post_to_cmr_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"queue_granules_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"queue_pdrs_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"queue_workflow_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"sf_sqs_report_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"sync_granule_task_timeout"),(0,l.kt)("li",{parentName:"ul"},"update_granules_cmr_metadata_file_links_task_timeout")),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tf"},"lambda_timeouts = {\n  discover_granules_task_timeout = 300\n}\n")),(0,l.kt)("h2",{id:"lambda_memory_sizes"},"lambda_memory_sizes"),(0,l.kt)("p",null,"A configurable map of memory sizes (in MBs) for cumulus ingest module task lambdas in the form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},"<lambda_identifier>_memory_size: <memory_size>\n  type = map(string)\n")),(0,l.kt)("p",null,"Currently the following values are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add_missing_file_checksums_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"discover_granules_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"discover_pdrs_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"fake_processing_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"hyrax_metadata_updates_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"lzards_backup_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"move_granules_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"parse_pdr_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"pdr_status_check_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"post_to_cmr_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"queue_granules_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"queue_pdrs_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"queue_workflow_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"sf_sqs_report_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"sync_granule_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"update_cmr_acess_constraints_task_memory_size"),(0,l.kt)("li",{parentName:"ul"},"update_granules_cmr_metadata_file_links_task_memory_size")),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tf"},"lambda_memory_sizes = {\n  queue_granules_task_memory_size = 1036\n}\n")))}k.isMDXComponent=!0}}]);