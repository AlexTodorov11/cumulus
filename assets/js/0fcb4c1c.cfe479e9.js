"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[42409],{15680:(e,o,t)=>{t.d(o,{xA:()=>p,yg:()=>g});var n=t(96540);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var o=n.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},p=function(e){var o=u(e.components);return n.createElement(i.Provider,{value:o},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return t?n.createElement(g,l(l({ref:o},p),{},{components:t})):n.createElement(g,l({ref:o},p))}));function g(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var i in o)hasOwnProperty.call(o,i)&&(s[i]=o[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38178:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=t(58168),r=t(98587),a=(t(96540),t(15680)),l=["components"],s={id:"sips-workflow",title:"Science Investigator-led Processing Systems (SIPS)",hide_title:!1},i=void 0,u={unversionedId:"data-cookbooks/sips-workflow",id:"version-v18.2.0/data-cookbooks/sips-workflow",title:"Science Investigator-led Processing Systems (SIPS)",description:"The Cumulus ingest workflow supports the SIPS workflow. In the following document, we'll discuss what a SIPS workflow is and how to set one up in a Cumulus instance.",source:"@site/versioned_docs/version-v18.2.0/data-cookbooks/sips-workflow.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/sips-workflow",permalink:"/cumulus/docs/v18.2.0/data-cookbooks/sips-workflow",draft:!1,tags:[],version:"v18.2.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1707330127,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{id:"sips-workflow",title:"Science Investigator-led Processing Systems (SIPS)",hide_title:!1},sidebar:"docs",previous:{title:"Ingest Notification in Workflows",permalink:"/cumulus/docs/v18.2.0/data-cookbooks/ingest-notifications"},next:{title:"CNM Workflow",permalink:"/cumulus/docs/v18.2.0/data-cookbooks/cnm-workflow"}},p={},d=[{value:"Setup",id:"setup",level:2},{value:"Provider",id:"provider",level:3},{value:"Collection",id:"collection",level:3},{value:"Rule",id:"rule",level:3},{value:"DiscoverAndQueuePdrs Workflow",id:"discoverandqueuepdrs-workflow",level:2},{value:"ParsePdr Workflow",id:"parsepdr-workflow",level:2},{value:"IngestGranule Workflow",id:"ingestgranule-workflow",level:2},{value:"Summary",id:"summary",level:2}],c={toc:d},m="wrapper";function g(e){var o=e.components,s=(0,r.A)(e,l);return(0,a.yg)(m,(0,n.A)({},c,s,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Cumulus ingest workflow supports the SIPS workflow. In the following document, we'll discuss what a SIPS workflow is and how to set one up in a Cumulus instance."),(0,a.yg)("p",null,"In this document, we assume the user already has a provider endpoint configured and ready with some data to ingest. We'll be using an S3 provider and ingesting from a MOD09GQ collection."),(0,a.yg)("h2",{id:"setup"},"Setup"),(0,a.yg)("h3",{id:"provider"},"Provider"),(0,a.yg)("p",null,"We need to have a ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v18.2.0/configuration/data-management-types#providers"},"provider")," from whom data can be ingested. Our provider is an S3 provider hosted in the ",(0,a.yg)("inlineCode",{parentName:"p"},"cumulus-test-internal")," bucket."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of Cumulus dashboard screen for configuring an S3 provider",src:t(64744).A,width:"1075",height:"602"})),(0,a.yg)("h3",{id:"collection"},"Collection"),(0,a.yg)("p",null,"We need to build a collection. Details on collections can be found\n",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v18.2.0/configuration/data-management-types#collections"},"here"),". The following collection will have\n",(0,a.yg)("inlineCode",{parentName:"p"},"MOD09GQ")," as a collection name, ",(0,a.yg)("inlineCode",{parentName:"p"},"006")," as a version."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MOD09GQ",\n  "version": "006",\n  "process": "modis",\n  "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n  "granuleIdExtraction": "(MOD09GQ\\\\..*)(\\\\.hdf|\\\\.cmr|_ndvi\\\\.jpg)",\n  "granuleId": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}$",\n  "files": [\n    {\n      "bucket": "protected",\n      "regex": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}\\\\.hdf$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n      "url_path": "{cmrMetadata.Granule.Collection.ShortName}/{extractYear(cmrMetadata.Granule.Temporal.RangeDateTime.BeginningDateTime)}/{substring(file.fileName, 0, 3)}"\n    },\n    {\n      "bucket": "private",\n      "regex": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}\\\\.hdf\\\\.met$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf.met"\n    },\n    {\n      "bucket": "protected-2",\n      "regex": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}\\\\.cmr\\\\.xml$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.cmr.xml"\n    },\n    {\n      "bucket": "public",\n      "regex": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}_ndvi\\\\.jpg$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104_ndvi.jpg"\n    }\n  ],\n  "duplicateHandling": "replace",\n  "url_path": "{cmrMetadata.Granule.Collection.ShortName}/{substring(file.fileName, 0, 3)}",\n}\n')),(0,a.yg)("h3",{id:"rule"},"Rule"),(0,a.yg)("p",null,"Finally, let's create a ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v18.2.0/configuration/data-management-types#rules"},"rule"),". In this example\nwe're just going to create a ",(0,a.yg)("inlineCode",{parentName:"p"},"onetime")," throw-away rule that will be easy to test\nwith. This rule will kick off the ",(0,a.yg)("inlineCode",{parentName:"p"},"DiscoverAndQueuePdrs")," workflow, which is the\nbeginning of a Cumulus SIPS workflow:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of a Cumulus rule configuration",src:t(22613).A,width:"2448",height:"1784"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},'A list of configured workflows exists under the "Workflows" in the navigation bar on the Cumulus dashboard. Additionally, one can find a list of executions and their respective status in the "Executions" tab in the navigation bar.')),(0,a.yg)("h2",{id:"discoverandqueuepdrs-workflow"},"DiscoverAndQueuePdrs Workflow"),(0,a.yg)("p",null,"This workflow will discover PDRs and queue them to be processed. Duplicate PDRs will be dealt with according to the configured duplicate handling setting in the collection.   The lambdas below are included in the ",(0,a.yg)("inlineCode",{parentName:"p"},"cumulus")," terraform module for use in your workflows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"DiscoverPdrs - ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/discover-pdrs"},"source")),(0,a.yg)("li",{parentName:"ol"},"QueuePdrs - ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-pdrs"},"source"))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of execution graph for discover and queue PDRs workflow in the AWS Step Functions console",src:t(94227).A,width:"312",height:"411"})),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"An example workflow module configuration can be viewed in the Cumulus source for the ",(0,a.yg)("a",{parentName:"em",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/discover_and_queue_pdrs_workflow.tf"},"discover_and_queue_pdrs_workflow"),".")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"To use this example workflow module as a template for a new workflow in your deployment the ",(0,a.yg)("inlineCode",{parentName:"p"},"source")," key for the workflow module would need to point to a release of the cumulus-workflow (terraform-aws-cumulus-workflow.zip) module on our ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"release")," page, as all of the provided Cumulus workflows are internally self-referential.")),(0,a.yg)("h2",{id:"parsepdr-workflow"},"ParsePdr Workflow"),(0,a.yg)("p",null,"The ParsePdr workflow will parse a PDR, queue the specified granules (duplicates are handled according to the duplicate handling setting) and periodically check the status of those queued granules. This workflow will not succeed until all the granules included in the PDR are successfully ingested. If one of those fails, the ParsePdr workflow will fail. ",(0,a.yg)("strong",{parentName:"p"},"NOTE")," that ParsePdr may spin up multiple IngestGranule workflows in parallel, depending on the granules included in the PDR."),(0,a.yg)("p",null,"The lambdas below are included in the ",(0,a.yg)("inlineCode",{parentName:"p"},"cumulus")," terraform module for use in your workflows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"ParsePdr - ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/parse-pdr"},"source")),(0,a.yg)("li",{parentName:"ol"},"QueueGranules - ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/queue-granules"},"source")),(0,a.yg)("li",{parentName:"ol"},"CheckStatus - ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/pdr-status-check"},"source"))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of execution graph for SIPS Parse PDR workflow in AWS Step Functions console",src:t(22207).A,width:"682",height:"562"})),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"An example workflow module configuration can be viewed in the Cumulus source for the ",(0,a.yg)("a",{parentName:"em",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/parse_pdr_workflow.tf"},"parse_pdr_workflow"),".")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"To use this example workflow module as a template for a new workflow in your deployment the ",(0,a.yg)("inlineCode",{parentName:"p"},"source")," key for the workflow module would need to point to a release of the cumulus-workflow (terraform-aws-cumulus-workflow.zip) module on our ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"release")," page, as all of the provided Cumulus workflows are internally self-referential.")),(0,a.yg)("h2",{id:"ingestgranule-workflow"},"IngestGranule Workflow"),(0,a.yg)("p",null,"The IngestGranule workflow processes and ingests a granule and posts the granule metadata to CMR."),(0,a.yg)("p",null,"The lambdas below are included in the ",(0,a.yg)("inlineCode",{parentName:"p"},"cumulus")," terraform module for use in your workflows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"SyncGranule - ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/sync-granule"},"source"),"."),(0,a.yg)("li",{parentName:"ol"},"CmrStep - ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tasks/post-to-cmr"},"source"))),(0,a.yg)("p",null,"Additionally this workflow requires a processing step you must provide. The ProcessingStep step in the workflow picture below is an example of a custom processing step."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Using the CmrStep is not required and can be left out of the processing trajectory if desired (for example, in testing situations).")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of execution graph for SIPS IngestGranule workflow in AWS Step Functions console",src:t(86778).A,width:"482",height:"559"})),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"An example workflow module configuration can be viewed in the Cumulus source for the ",(0,a.yg)("a",{parentName:"em",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/ingest_and_publish_granule_workflow.tf"},"ingest_and_publish_granule_workflow"),".")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"To use this example workflow module as a template for a new workflow in your deployment the ",(0,a.yg)("inlineCode",{parentName:"p"},"source")," key for the workflow module would need to point to a release of the cumulus-workflow (terraform-aws-cumulus-workflow.zip) module on our ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"release")," page, as all of the provided Cumulus workflows are internally self-referential.")),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"In this cookbook we went over setting up a collection, rule, and provider for a SIPS workflow. Once we had the setup completed, we looked over the Cumulus workflows that participate in parsing PDRs, ingesting and processing granules, and updating CMR."))}g.isMDXComponent=!0},22613:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/add_rule-39d552773bdb983a8e9fd3a55206b251.png"},94227:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/sips-discover-and-queue-pdrs-execution-c0e1700ee15ad88dab703e18a7567652.png"},86778:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/sips-ingest-granule-210e4cd5620a4959e9200e1de6a91b13.png"},22207:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/sips-parse-pdr-a8b1649e0c226d9552b36f8c790f8059.png"},64744:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/sips-provider-7f4b6505a7be7748ebac8acdb03f730f.png"}}]);