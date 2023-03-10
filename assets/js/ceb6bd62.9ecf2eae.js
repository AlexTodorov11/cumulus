"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[26858],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"update-task-file-schemas",title:"Updates to task granule file schemas",hide_title:!1},s=void 0,p={unversionedId:"upgrade-notes/update-task-file-schemas",id:"version-v14.1.0/upgrade-notes/update-task-file-schemas",title:"Updates to task granule file schemas",description:"Background",source:"@site/versioned_docs/version-v14.1.0/upgrade-notes/upgrade-task-file-schemas.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/update-task-file-schemas",permalink:"/cumulus/docs/upgrade-notes/update-task-file-schemas",draft:!1,tags:[],version:"v14.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"update-task-file-schemas",title:"Updates to task granule file schemas",hide_title:!1},sidebar:"docs",previous:{title:"Migrate from TEA deployment to Cumulus Distribution",permalink:"/cumulus/docs/upgrade-notes/cumulus_distribution_migration"},next:{title:"Upgrade to CMA 2.0.2",permalink:"/cumulus/docs/upgrade-notes/update-cma-2.0.2"}},u={},d=[{value:"Background",id:"background",level:2},{value:"Updated files schema",id:"updated-files-schema",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Bulk granule operations",id:"bulk-granule-operations",level:3},{value:"Upgrading your deployment",id:"upgrading-your-deployment",level:2},{value:"Upgrading your workflows",id:"upgrading-your-workflows",level:3},{value:"<code>update-granules-cmr-metadata-file-links</code>",id:"update-granules-cmr-metadata-file-links",level:3},{value:"<code>hyrax-metadata-updates</code>",id:"hyrax-metadata-updates",level:4},{value:"<code>post-to-cmr</code>",id:"post-to-cmr",level:4},{value:"Example workflow",id:"example-workflow",level:4},{value:"Optional - Integrate granuleDuplicates information",id:"optional---integrate-granuleduplicates-information",level:4},{value:"Updating collection URL path templates",id:"updating-collection-url-path-templates",level:3}],m={toc:d},c="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Most Cumulus workflow tasks expect as input a payload of granule(s) which contain the files for each granule. Most tasks also return this same granule structure as output."),(0,o.kt)("p",null,"However, up to this point, there was inconsistency in the schemas for the granule ",(0,o.kt)("inlineCode",{parentName:"p"},"files")," objects expected by each task. Furthermore, there was no guarantee of consistency between granule ",(0,o.kt)("inlineCode",{parentName:"p"},"files")," objects as stored in the database and the expectations of any given workflow task."),(0,o.kt)("p",null,"Thus, when performing bulk granule operations which pass granules from the database into a Cumulus workflow, it was possible for there to be schema validation failures depending on which task was used to start the workflow and its particular schema."),(0,o.kt)("p",null,"In order to rectify this situation, ",(0,o.kt)("a",{parentName:"p",href:"https://bugs.earthdata.nasa.gov/browse/CUMULUS-2388"},"CUMULUS-2388")," was filed and addressed to create a common granule files schema between nearly all of the Cumulus tasks (exceptions discussed below) and the Cumulus database. The following documentation explains the manual changes you need to make to your deployment in order to be compatible with the updated files schema."),(0,o.kt)("h2",{id:"updated-files-schema"},"Updated files schema"),(0,o.kt)("p",null,"The updated granule files schema ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/schemas/files.schema.json"},"can be found here"),"."),(0,o.kt)("p",null,"These former properties were deprecated (with notes about how to derive the same information from the updated schema, if possible):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filename")," - concatenate the ",(0,o.kt)("inlineCode",{parentName:"li"},"bucket")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," values with a directory separator (",(0,o.kt)("inlineCode",{parentName:"li"},"/"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - use ",(0,o.kt)("inlineCode",{parentName:"li"},"fileName")," property"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"etag")," - ETags are no longer provided as an individual file property. Instead, a separate ",(0,o.kt)("inlineCode",{parentName:"li"},"etags")," object mapping S3 URIs to ETag values is provided as output from the following workflow tasks (guidance on how to integrate this output with your workflows is provided in the ",(0,o.kt)("a",{parentName:"li",href:"#upgrading-your-workflows"},"Upgrading your workflows")," section below):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update-granules-cmr-metadata-file-links")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hyrax-metadata-updates")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fileStagingDir")," - no longer supported"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url_path")," - no longer supported"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"duplicate_found")," - This property is no longer supported, however ",(0,o.kt)("inlineCode",{parentName:"li"},"sync-granule")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"move-granules")," now produce a separate ",(0,o.kt)("inlineCode",{parentName:"li"},"granuleDuplicates")," object as part of their output. The ",(0,o.kt)("inlineCode",{parentName:"li"},"granuleDuplicates")," object is a map of granules by granule ID which includes the files that encountered duplicates during processing. ",(0,o.kt)("a",{parentName:"li",href:"#optional---integrate-granuleduplicates-information"},"Guidance on how to integrate ",(0,o.kt)("inlineCode",{parentName:"a"},"granuleDuplicates")," information into your workflow configuration is provided below"),".")),(0,o.kt)("h2",{id:"exceptions"},"Exceptions"),(0,o.kt)("p",null,"These workflow tasks did not have their schema for granule files updated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"discover-granules")," - no updates"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queue-granules")," - no updates"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parse-pdr")," - no updates"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sync-granule")," - input schema not updated, output schema was updated")),(0,o.kt)("p",null,"The reason that these task schemas were not updated is that all of these tasks start before the files have been ingested to S3, thus much of the information that is required in the updated files schema like ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"checksum")," is not yet known."),(0,o.kt)("h3",{id:"bulk-granule-operations"},"Bulk granule operations"),(0,o.kt)("p",null,"Since the input schema for the above tasks was not updated, that means you cannot run bulk granule operations against workflows ",(0,o.kt)("strong",{parentName:"p"},"if they start with any of those tasks"),". Bulk granule operations work by loading the specified granules from the database and sending them as input to a specified workflow, so if the specified workflow begins with a task whose input schema does not conform to what is coming out of the database, there will be schema errors."),(0,o.kt)("h2",{id:"upgrading-your-deployment"},"Upgrading your deployment"),(0,o.kt)("h3",{id:"upgrading-your-workflows"},"Upgrading your workflows"),(0,o.kt)("h3",{id:"update-granules-cmr-metadata-file-links"},(0,o.kt)("inlineCode",{parentName:"h3"},"update-granules-cmr-metadata-file-links")),(0,o.kt)("p",null,"For any workflows using the ",(0,o.kt)("inlineCode",{parentName:"p"},"update-granules-cmr-metadata-file-links")," task before the ",(0,o.kt)("inlineCode",{parentName:"p"},"hyrax-metadata-updates")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"post-to-cmr")," tasks, update the step definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"update-granules-cmr-metadata-file-links")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'    "UpdateGranulesCmrMetadataFileLinksStep": {\n      "Parameters": {\n        "cma": {\n          "event.$": "$",\n          "task_config": {\n            "buckets": "{$.meta.buckets}",\n            "distribution_endpoint": "{$.meta.distribution_endpoint}",\n            "cumulus_message": {\n              "outputs": [\n                {\n                  "source": "{$.etags}",\n                  "destination": "{$.meta.file_etags}"\n                },\n                {\n                  "source": "{$}",\n                  "destination": "{$.payload}"\n                }\n              ]\n            }\n          }\n        }\n      },\n      ...more configuration...\n')),(0,o.kt)("h4",{id:"hyrax-metadata-updates"},(0,o.kt)("inlineCode",{parentName:"h4"},"hyrax-metadata-updates")),(0,o.kt)("p",null,"For any workflows using the ",(0,o.kt)("inlineCode",{parentName:"p"},"hyrax-metadata-updates")," task before a ",(0,o.kt)("inlineCode",{parentName:"p"},"post-to-cmr")," task, update the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hyrax-metadata-updates")," step as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'    "HyraxMetadataUpdatesTask": {\n      "Parameters": {\n        "cma": {\n          "event.$": "$",\n          "ReplaceConfig": {\n            "FullMessage": true\n          },\n          "task_config": {\n            "bucket": "{$.meta.buckets.internal.name}",\n            "stack": "{$.meta.stack}",\n            "cmr": "{$.meta.cmr}",\n            "launchpad": "{$.meta.launchpad}",\n            "etags": "{$.meta.file_etags}",\n            "cumulus_message": {\n              "outputs": [\n                {\n                  "source": "{$.etags}",\n                  "destination": "{$.meta.file_etags}"\n                },\n                {\n                  "source": "{$}",\n                  "destination": "{$.payload}"\n                }\n              ]\n            }\n          }\n        }\n      },\n      ...more configuration...\n')),(0,o.kt)("h4",{id:"post-to-cmr"},(0,o.kt)("inlineCode",{parentName:"h4"},"post-to-cmr")),(0,o.kt)("p",null,"For any workflows using ",(0,o.kt)("inlineCode",{parentName:"p"},"post-to-cmr")," task after the ",(0,o.kt)("inlineCode",{parentName:"p"},"update-granules-cmr-metadata-file-links")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"hyrax-metadata-updates")," tasks, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"post-to-cmr")," step definition as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'    "CmrStep": {\n      "Parameters": {\n        "cma": {\n          "event.$": "$",\n          "ReplaceConfig": {\n            "FullMessage": true\n          },\n          "task_config": {\n            "bucket": "{$.meta.buckets.internal.name}",\n            "stack": "{$.meta.stack}",\n            "cmr": "{$.meta.cmr}",\n            "launchpad": "{$.meta.launchpad}",\n            "etags": "{$.meta.file_etags}"\n          }\n        }\n      },\n      ...more configuration...\n')),(0,o.kt)("h4",{id:"example-workflow"},"Example workflow"),(0,o.kt)("p",null,"For an example workflow integrating all of these changes, please see our example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/ingest_and_publish_granule_workflow.asl.json"},"ingest and publish workflow"),"."),(0,o.kt)("h4",{id:"optional---integrate-granuleduplicates-information"},"Optional - Integrate granuleDuplicates information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note")," that the ",(0,o.kt)("inlineCode",{parentName:"p"},"granuleDuplicates")," output is purely ",(0,o.kt)("strong",{parentName:"p"},"informational")," and does not have any bearing on the separate configuration for how duplicates should be handled."),(0,o.kt)("p",null,"You can include ",(0,o.kt)("inlineCode",{parentName:"p"},"granuleDuplicates")," output from the ",(0,o.kt)("inlineCode",{parentName:"p"},"sync-granule")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"move-granules")," tasks in your workflow messages like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'    "SyncGranule": {\n      "Parameters": {\n        "cma": {\n          "event.$": "$",\n          "task_config": {\n            ...other config...\n            "cumulus_message": {\n              "outputs": [\n                {\n                  "source": "{$.granuleDuplicates}",\n                  "destination": "{$.meta.sync_granule.granule_duplicates}"\n                },\n                {\n                  "source": "{$}",\n                  "destination": "{$.payload}"\n                }\n              ]\n            }\n          }\n        }\n      }\n      ...more configuration...\n')),(0,o.kt)("p",null,"The result of this configuration is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"granuleDuplicates")," output from ",(0,o.kt)("inlineCode",{parentName:"p"},"sync-granule")," would be placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"meta.sync_granule.granule_duplicates")," on the workflow message and remain there throughout the rest of the workflow. The same configuration could be replicated for the ",(0,o.kt)("inlineCode",{parentName:"p"},"move-granules")," task, but be sure to use a different ",(0,o.kt)("inlineCode",{parentName:"p"},"destination")," in the workflow message for the ",(0,o.kt)("inlineCode",{parentName:"p"},"granuleDuplicates")," output ."),(0,o.kt)("h3",{id:"updating-collection-url-path-templates"},"Updating collection URL path templates"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../workflows/workflow-configuration-how-to#using-a-template-for-file-placement"},"Collections can specify ",(0,o.kt)("inlineCode",{parentName:"a"},"url_path")," templates to dynamically generate the final location of files"),". As part of ",(0,o.kt)("inlineCode",{parentName:"p"},"url_path")," templates, file object properties can be interpolated to generate the file path. Thus, these ",(0,o.kt)("inlineCode",{parentName:"p"},"url_path")," templates need to be updated to ensure that they are compatible with the updated files schema and the properties that will actually be available on file objects."),(0,o.kt)("p",null,"See the notes on the ",(0,o.kt)("a",{parentName:"p",href:"#updated-files-schema"},"updated files schema")," to know which properties are available and which previously existing properties were deprecated."),(0,o.kt)("p",null,"As an example, you will want to update any ",(0,o.kt)("inlineCode",{parentName:"p"},"url_path")," properties in your collections to remove references to ",(0,o.kt)("inlineCode",{parentName:"p"},"file.name")," and replace them with references to ",(0,o.kt)("inlineCode",{parentName:"p"},"file.fileName")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- "url_path": "{cmrMetadata.CollectionReference.ShortName}___{cmrMetadata.CollectionReference.Version}/{substring(file.name, 0, 3)}",\n+ "url_path": "{cmrMetadata.CollectionReference.ShortName}___{cmrMetadata.CollectionReference.Version}/{substring(file.fileName, 0, 3)}",\n')))}h.isMDXComponent=!0}}]);