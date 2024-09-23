"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[95356],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,f=u["".concat(d,".").concat(g)]||u[g]||s[g]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},87222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(58168),n=r(98587),o=(r(96540),r(15680)),l=["components"],i={id:"trigger-workflow",title:"Trigger a Workflow Execution",hide_title:!1},d=void 0,c={unversionedId:"operator-docs/trigger-workflow",id:"version-v18.4.0/operator-docs/trigger-workflow",title:"Trigger a Workflow Execution",description:"To trigger a workflow, you need to create a rule. To trigger an ingest workflow, one that requires discovering and ingesting data, you will also need to configure the collection and provider and associate those to a rule.",source:"@site/versioned_docs/version-v18.4.0/operator-docs/trigger-workflow.md",sourceDirName:"operator-docs",slug:"/operator-docs/trigger-workflow",permalink:"/cumulus/docs/v18.4.0/operator-docs/trigger-workflow",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"trigger-workflow",title:"Trigger a Workflow Execution",hide_title:!1},sidebar:"docs",previous:{title:"Granule Workflows",permalink:"/cumulus/docs/v18.4.0/operator-docs/granule-workflows"}},p={},u=[{value:"Trigger a HelloWorld Workflow",id:"trigger-a-helloworld-workflow",level:2},{value:"Trigger an Ingest Workflow",id:"trigger-an-ingest-workflow",level:2},{value:"Example: Ingest data from S3",id:"example-ingest-data-from-s3",level:3},{value:"Setup",id:"setup",level:4},{value:"Create a provider",id:"create-a-provider",level:4},{value:"Create a collection",id:"create-a-collection",level:4},{value:"Create a rule",id:"create-a-rule",level:4}],s={toc:u},g="wrapper";function f(e){var t=e.components,i=(0,n.A)(e,l);return(0,o.yg)(g,(0,a.A)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"To trigger a workflow, you need to ",(0,o.yg)("a",{parentName:"p",href:"../configuration/data-management-types#create-a-rule"},"create a rule"),". To trigger an ingest workflow, one that requires discovering and ingesting data, you will also need to configure the collection and provider and associate those to a rule."),(0,o.yg)("h2",{id:"trigger-a-helloworld-workflow"},"Trigger a HelloWorld Workflow"),(0,o.yg)("p",null,"To trigger a ",(0,o.yg)("a",{parentName:"p",href:"../data-cookbooks/hello-world"},"HelloWorld workflow")," that does not need to discover or archive data, you just need to ",(0,o.yg)("a",{parentName:"p",href:"../configuration/data-management-types#create-a-rule"},"create a rule"),"."),(0,o.yg)("p",null,"You can leave the provider and collection blank and do not need any additional metadata. If you create a ",(0,o.yg)("inlineCode",{parentName:"p"},"onetime")," rule, the workflow execution will start momentarily and you can view its status on the Executions page unless it was created with a ",(0,o.yg)("inlineCode",{parentName:"p"},"DISABLED")," state."),(0,o.yg)("h2",{id:"trigger-an-ingest-workflow"},"Trigger an Ingest Workflow"),(0,o.yg)("p",null,"To ingest data, you will need a provider and collection configured to tell your workflow where to discover data and where to archive the data respectively."),(0,o.yg)("p",null,"Follow the instructions to ",(0,o.yg)("a",{parentName:"p",href:"../configuration/data-management-types#create-a-provider"},"create a provider")," and ",(0,o.yg)("a",{parentName:"p",href:"../configuration/data-management-types#create-a-collection"},"create a collection")," and ",(0,o.yg)("a",{parentName:"p",href:"../configuration/data-management-types#configuration-fields"},"configure their fields")," for your data ingest."),(0,o.yg)("p",null,"In the rule's additional metadata you can specify a ",(0,o.yg)("inlineCode",{parentName:"p"},"provider_path")," from which to get the data from the provider."),(0,o.yg)("h3",{id:"example-ingest-data-from-s3"},"Example: Ingest data from S3"),(0,o.yg)("h4",{id:"setup"},"Setup"),(0,o.yg)("p",null,"Assume there are 2 files to be ingested in an S3 bucket called ",(0,o.yg)("inlineCode",{parentName:"p"},"discovery-bucket"),", located in the ",(0,o.yg)("inlineCode",{parentName:"p"},"test-data")," folder:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"GRANULE.A2017025.jpg"),(0,o.yg)("li",{parentName:"ul"},"GRANULE.A2017025.hdf")),(0,o.yg)("p",null,"Archive buckets should already be created and mapped to public / private / protected in the Cumulus deployment."),(0,o.yg)("p",null,"For example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'buckets = {\n  private = {\n    name = "discovery-bucket"\n    type = "private"\n  },\n  protected = {\n    name = "archive-protected"\n    type = "protected"\n  }\n  public = {\n    name = "archive-public"\n    type = "public"\n  }\n}\n')),(0,o.yg)("h4",{id:"create-a-provider"},"Create a provider"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"../configuration/data-management-types#create-a-provider"},"Create a new provider"),". Set ",(0,o.yg)("inlineCode",{parentName:"p"},"protocol")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"S3")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Host")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"discovery-bucket"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot of adding a sample S3 provider",src:r(56654).A,width:"1968",height:"866"})),(0,o.yg)("h4",{id:"create-a-collection"},"Create a collection"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"../configuration/data-management-types#create-a-collection"},"Create a new collection"),". Configure the collection to extract the granule id from the filenames and configure where to store the granule files."),(0,o.yg)("p",null,"The configuration below will store hdf files in the protected bucket and jpg files in the private bucket. The bucket types are"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "test-collection",\n  "version": "001",\n  "granuleId": "^GRANULE\\\\.A[\\\\d]{7}$",\n  "granuleIdExtraction": "(GRANULE\\\\..*)(\\\\.hdf|\\\\.jpg)",\n  "reportToEms": false,\n  "sampleFileName": "GRANULE.A2017025.hdf",\n  "files": [\n    {\n      "bucket": "protected",\n      "regex": "^GRANULE\\\\.A[\\\\d]{7}\\\\.hdf$",\n      "sampleFileName": "GRANULE.A2017025.hdf"\n    },\n    {\n      "bucket": "public",\n      "regex": "^GRANULE\\\\.A[\\\\d]{7}\\\\.jpg$",\n      "sampleFileName": "GRANULE.A2017025.jpg"\n    }\n  ]\n}\n')),(0,o.yg)("h4",{id:"create-a-rule"},"Create a rule"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"../configuration/data-management-types#create-a-rule"},"Create a rule")," to trigger the workflow to discover your granule data and ingest your granule."),(0,o.yg)("p",null,"Select the previously created provider and collection. See the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/discover_granules_workflow.tf"},"Cumulus Discover Granules workflow")," for a workflow example of using Cumulus tasks to discover and queue data for ingest."),(0,o.yg)("p",null,"In the rule meta, set the ",(0,o.yg)("inlineCode",{parentName:"p"},"provider_path")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"test-data"),", so the ",(0,o.yg)("inlineCode",{parentName:"p"},"test-data")," folder will be used to discover new granules."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot of adding a Discover Granules rule",src:r(68346).A,width:"2102",height:"1258"})),(0,o.yg)("p",null,"A ",(0,o.yg)("inlineCode",{parentName:"p"},"onetime")," rule will run your workflow on-demand and you can view it on the dashboard Executions page unless it has a ",(0,o.yg)("inlineCode",{parentName:"p"},"DISABLED")," state. In order to run a workflow with a ",(0,o.yg)("inlineCode",{parentName:"p"},"onetime")," ",(0,o.yg)("inlineCode",{parentName:"p"},"DISABLED")," rule, please change the rule state to ",(0,o.yg)("inlineCode",{parentName:"p"},"ENABLED")," and re-run. The Cumulus Discover Granules workflow will trigger an ingest workflow and your ingested granules will be visible on the dashboard Granules page."))}f.isMDXComponent=!0},68346:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/cd_add_discover_rule_form-66955e5972520c985dff16bf84829370.png"},56654:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/cd_add_s3_provider_form-60923a7887dc4449518e5254d8de5558.png"}}]);