"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[65507],{15680:(e,r,a)=>{a.d(r,{xA:()=>u,yg:()=>d});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),s=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),g=n,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||o;return a?t.createElement(d,i(i({ref:r},u),{},{components:a})):t.createElement(d,i({ref:r},u))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},94814:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var t=a(58168),n=a(98587),o=(a(96540),a(15680)),i=["components"],l={id:"task-configuration",title:"Configuration of Tasks",hide_title:!1},c=void 0,s={unversionedId:"configuration/task-configuration",id:"version-v18.2.0/configuration/task-configuration",title:"Configuration of Tasks",description:"The cumulus module exposes values for configuration for some of the provided archive and ingest tasks.   Currently the following are available as configurable variables:",source:"@site/versioned_docs/version-v18.2.0/configuration/task-configuration.md",sourceDirName:"configuration",slug:"/configuration/task-configuration",permalink:"/cumulus/docs/configuration/task-configuration",draft:!1,tags:[],version:"v18.2.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1707330127,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{id:"task-configuration",title:"Configuration of Tasks",hide_title:!1},sidebar:"docs",previous:{title:"Collection Cost Tracking and Storage Best Practices",permalink:"/cumulus/docs/configuration/collection-storage-best-practices"},next:{title:"Development",permalink:"/cumulus/docs/category/development"}},u={},m=[{value:"cmr_search_client_config",id:"cmr_search_client_config",level:2},{value:"Example",id:"example",level:3},{value:"elasticsearch_client_config",id:"elasticsearch_client_config",level:2},{value:"Example",id:"example-1",level:3},{value:"lambda_timeouts",id:"lambda_timeouts",level:2},{value:"Example",id:"example-2",level:3},{value:"lambda_memory_sizes",id:"lambda_memory_sizes",level:2},{value:"Example",id:"example-3",level:3}],p={toc:m},g="wrapper";function d(e){var r=e.components,a=(0,n.A)(e,i);return(0,o.yg)(g,(0,t.A)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus")," module exposes values for configuration for some of the provided archive and ingest tasks.   Currently the following are available as configurable variables:"),(0,o.yg)("h2",{id:"cmr_search_client_config"},"cmr_search_client_config"),(0,o.yg)("p",null,"Configuration parameters for CMR search client for cumulus archive module tasks in the form:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hcl"},"<lambda_identifier>_report_cmr_limit = <maximum number records can be returned from cmr-client search, this should be greater than cmr_page_size>\n<lambda_identifier>_report_cmr_page_size = <number of records for each page returned from CMR>\n  type = map(string)\n")),(0,o.yg)("p",null,"More information about cmr limit and cmr page_size can be found from ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/cmr-client/src/searchConcept.ts"},"@cumulus/cmr-client")," and ",(0,o.yg)("a",{parentName:"p",href:"https://cmr.earthdata.nasa.gov/search/site/docs/search/api.html#query-parameters"},"CMR Search API document"),"."),(0,o.yg)("p",null,"Currently the following values are supported:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"create_reconciliation_report_cmr_limit"),(0,o.yg)("li",{parentName:"ul"},"create_reconciliation_report_cmr_page_size")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tf"},"cmr_search_client_config = {\n  create_reconciliation_report_cmr_limit = 2500\n  create_reconciliation_report_cmr_page_size = 250\n}\n")),(0,o.yg)("h2",{id:"elasticsearch_client_config"},"elasticsearch_client_config"),(0,o.yg)("p",null,"Configuration parameters for Elasticsearch client for cumulus archive module tasks in the form:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hcl"},"<lambda_identifier>_es_scroll_duration = <duration>\n<lambda_identifier>_es_scroll_size = <size>\n  type = map(string)\n")),(0,o.yg)("p",null,"Currently the following values are supported:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"create_reconciliation_report_es_scroll_duration"),(0,o.yg)("li",{parentName:"ul"},"create_reconciliation_report_es_scroll_size")),(0,o.yg)("h3",{id:"example-1"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tf"},'elasticsearch_client_config = {\n  create_reconciliation_report_es_scroll_duration = "15m"\n  create_reconciliation_report_es_scroll_size = 2000\n}\n')),(0,o.yg)("h2",{id:"lambda_timeouts"},"lambda_timeouts"),(0,o.yg)("p",null,"An optional configurable map of timeouts (in seconds) for cumulus lambdas in the form:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hcl"},"lambda_timeouts = {\n  <lambda_name> = <timeout>\n}\n")),(0,o.yg)("h3",{id:"example-2"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tf"},"lambda_timeouts = {\n  sqsMessageRemover = 300\n}\n")),(0,o.yg)("h2",{id:"lambda_memory_sizes"},"lambda_memory_sizes"),(0,o.yg)("p",null,"An optional configurable map of memory sizes (in MBs) for cumulus lambdas in the form:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hcl"},"lambda_memory_sizes = {\n  <lambda_name> = <memory_size>\n}\n")),(0,o.yg)("h3",{id:"example-3"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tf"},"lambda_memory_sizes = {\n  SyncGranule = 1024\n}\n")))}d.isMDXComponent=!0}}]);