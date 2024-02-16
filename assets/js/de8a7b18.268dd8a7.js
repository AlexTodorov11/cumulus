"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[67407],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>_});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),g=n,_=m["".concat(c,".").concat(g)]||m[g]||p[g]||i;return r?a.createElement(_,l(l({ref:t},s),{},{components:r})):a.createElement(_,l({ref:t},s))}));function _(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},26436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>_,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=r(58168),n=r(98587),i=(r(96540),r(15680)),l=["components"],o={id:"task-configuration",title:"Configuration of Tasks",hide_title:!1},c=void 0,u={unversionedId:"configuration/task-configuration",id:"version-v11.1.0/configuration/task-configuration",title:"Configuration of Tasks",description:"The cumulus module exposes values for configuration for some of the provided archive and ingest tasks.   Currently the following are available as configurable variables:",source:"@site/versioned_docs/version-v11.1.0/configuration/task-configuration.md",sourceDirName:"configuration",slug:"/configuration/task-configuration",permalink:"/cumulus/docs/v11.1.0/configuration/task-configuration",draft:!1,tags:[],version:"v11.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"task-configuration",title:"Configuration of Tasks",hide_title:!1},sidebar:"docs",previous:{title:"Collection Cost Tracking and Storage Best Practices",permalink:"/cumulus/docs/v11.1.0/configuration/collection-storage-best-practices"},next:{title:"Creating a Cumulus Workflow",permalink:"/cumulus/docs/v11.1.0/workflows/developing-a-cumulus-workflow"}},s={},m=[{value:"cmr_search_client_config",id:"cmr_search_client_config",level:2},{value:"Example",id:"example",level:3},{value:"elasticsearch_client_config",id:"elasticsearch_client_config",level:2},{value:"Example",id:"example-1",level:3},{value:"lambda_timeouts",id:"lambda_timeouts",level:2},{value:"Example",id:"example-2",level:3}],p={toc:m},g="wrapper";function _(e){var t=e.components,r=(0,n.A)(e,l);return(0,i.yg)(g,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"cumulus")," module exposes values for configuration for some of the provided archive and ingest tasks.   Currently the following are available as configurable variables:"),(0,i.yg)("h2",{id:"cmr_search_client_config"},"cmr_search_client_config"),(0,i.yg)("p",null,"Configuration parameters for CMR search client for cumulus archive module tasks in the form:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hcl"},"<lambda_identifier>_report_cmr_limit = <maximum number records can be returned from cmr-client search, this should be greater than cmr_page_size>\n<lambda_identifier>_report_cmr_page_size = <number of records for each page returned from CMR>\n  type = map(string)\n")),(0,i.yg)("p",null,"More information about cmr limit and cmr page_size can be found from ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/cmr-client/src/searchConcept.ts"},"@cumulus/cmr-client")," and ",(0,i.yg)("a",{parentName:"p",href:"https://cmr.earthdata.nasa.gov/search/site/docs/search/api.html#query-parameters"},"CMR Search API document"),"."),(0,i.yg)("p",null,"Currently the following values are supported:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"create_reconciliation_report_cmr_limit"),(0,i.yg)("li",{parentName:"ul"},"create_reconciliation_report_cmr_page_size")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tf"},"cmr_search_client_config = {\n  create_reconciliation_report_cmr_limit = 2500\n  create_reconciliation_report_cmr_page_size = 250\n}\n")),(0,i.yg)("h2",{id:"elasticsearch_client_config"},"elasticsearch_client_config"),(0,i.yg)("p",null,"Configuration parameters for Elasticsearch client for cumulus archive module tasks in the form:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hcl"},"<lambda_identifier>_es_scroll_duration = <duration>\n<lambda_identifier>_es_scroll_size = <size>\n  type = map(string)\n")),(0,i.yg)("p",null,"Currently the following values are supported:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"create_reconciliation_report_es_scroll_duration"),(0,i.yg)("li",{parentName:"ul"},"create_reconciliation_report_es_scroll_size")),(0,i.yg)("h3",{id:"example-1"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tf"},'elasticsearch_client_config = {\n  create_reconciliation_report_es_scroll_duration = "15m"\n  create_reconciliation_report_es_scroll_size = 2000\n}\n')),(0,i.yg)("h2",{id:"lambda_timeouts"},"lambda_timeouts"),(0,i.yg)("p",null,"A configurable map of timeouts (in seconds) for cumulus ingest module task lambdas in the form:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hcl"},"<lambda_identifier>_timeout: <timeout>\n  type = map(string)\n")),(0,i.yg)("p",null,"Currently the following values are supported:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"discover_granules_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"discover_pdrs_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"hyrax_metadata_update_tasks_timeout"),(0,i.yg)("li",{parentName:"ul"},"lzards_backup_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"move_granules_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"parse_pdr_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"pdr_status_check_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"post_to_cmr_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"queue_granules_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"queue_pdrs_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"queue_workflow_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"sync_granule_task_timeout"),(0,i.yg)("li",{parentName:"ul"},"update_granules_cmr_metadata_file_links_task_timeout")),(0,i.yg)("h3",{id:"example-2"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tf"},"lambda_timeouts = {\n  discover_granules_task_timeout = 300\n}\n")))}_.isMDXComponent=!0}}]);