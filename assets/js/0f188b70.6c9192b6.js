"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[40401],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=u(a),c=r,h=g["".concat(l,".").concat(c)]||g[c]||p[c]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47426:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>g});var n=a(58168),r=a(98587),i=(a(96540),a(15680)),s=["components"],o={id:"rds-phase-3-data-migration-guidance",title:"Data Integrity & Migration Guidance (RDS Phase 3 Upgrade)",hide_title:!1},l=void 0,u={unversionedId:"upgrade-notes/rds-phase-3-data-migration-guidance",id:"version-v16.0.0/upgrade-notes/rds-phase-3-data-migration-guidance",title:"Data Integrity & Migration Guidance (RDS Phase 3 Upgrade)",description:"A few issues were identied as part of the RDS Phase 2 release. These issues could impact Granule data-integrity and are described below along with recommended actions and guidance going forward.",source:"@site/versioned_docs/version-v16.0.0/upgrade-notes/rds-phase-3-data-migration-guidance.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/rds-phase-3-data-migration-guidance",permalink:"/cumulus/docs/v16.0.0/upgrade-notes/rds-phase-3-data-migration-guidance",draft:!1,tags:[],version:"v16.0.0",lastUpdatedBy:"Nate Pauzenga",lastUpdatedAt:1689363144,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"rds-phase-3-data-migration-guidance",title:"Data Integrity & Migration Guidance (RDS Phase 3 Upgrade)",hide_title:!1},sidebar:"docs",previous:{title:"Upgrade RDS Phase 3 Release",permalink:"/cumulus/docs/v16.0.0/upgrade-notes/upgrade-rds-phase-3-release"},next:{title:"External Contributions",permalink:"/cumulus/docs/v16.0.0/category/external-contributions"}},d={},g=[{value:"Issue Descriptions",id:"issue-descriptions",level:2},{value:"Issue 1",id:"issue-1",level:3},{value:"Issue 2",id:"issue-2",level:3},{value:"Issue 3",id:"issue-3",level:3},{value:"Issue 4",id:"issue-4",level:3},{value:"Issue 5",id:"issue-5",level:3},{value:"Immediate Actions",id:"immediate-actions",level:2},{value:"Guidance Going Forward",id:"guidance-going-forward",level:2},{value:"Running a Granule Migration",id:"running-a-granule-migration",level:2}],p={toc:g},c="wrapper";function h(e){var t=e.components,a=(0,r.A)(e,s);return(0,i.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"A few issues were identied as part of the RDS Phase 2 release. These issues could impact Granule data-integrity and are described below along with recommended actions and guidance going forward."),(0,i.yg)("h2",{id:"issue-descriptions"},"Issue Descriptions"),(0,i.yg)("h3",{id:"issue-1"},"Issue 1"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://bugs.earthdata.nasa.gov/browse/CUMULUS-3019"},"Relevant ticket: CUMULUS-3019")),(0,i.yg)("p",null,"Ingesting granules will delete unrelated files from the Files Postgres table. This is due to an issue in our logic to remove excess files when writing granules and fixed in Cumulus versions 13.2.1, 12.0.2, 11.1.5"),(0,i.yg)("p",null,"With this bug we believe the data in Dynamo is the most reliable and Postgres is out-of-sync."),(0,i.yg)("h3",{id:"issue-2"},"Issue 2"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://bugs.earthdata.nasa.gov/browse/CUMULUS-3024"},"Relevant ticket: CUMULUS-3024")),(0,i.yg)("p",null,"Updating an existing granule either via API or Workflow could result in datastores becoming out-of-sync if a partial granule record is provided. Our update logic operates differently in Postgres and Dynamo/Elastic. If a partial object is provided in an update payload the Postgres record will delete/nullify fields not present in the payload. Dynamo/Elastic will retain existing values and not delete/nullify."),(0,i.yg)("p",null,"With this bug it\u2019s possible that either Dynamo or PG could be the source of truth. It\u2019s likely that it\u2019s still Dynamo."),(0,i.yg)("h3",{id:"issue-3"},"Issue 3"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://bugs.earthdata.nasa.gov/browse/CUMULUS-3024"},"Relevant ticket: CUMULUS-3024")),(0,i.yg)("p",null,"Updating an existing granule with an empty files array in the update payload results in datastores becoming out-of-sync. If an empty array is provided, existing files in Dynamo and Elastic will be removed. Existing files in Postgres will be retained."),(0,i.yg)("p",null,"With this bug Postgres is the source of truth. Files are retained in PG and incorrectly removed in Dynamo/Elastic."),(0,i.yg)("h3",{id:"issue-4"},"Issue 4"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://bugs.earthdata.nasa.gov/browse/CUMULUS-3017"},"Relevant ticket: CUMULUS-3017")),(0,i.yg)("p",null,"Updating/putting a granule via framework writes that duplicates a granuleId but has a different collection results in overwrite of the DynamoDB granule but a ",(0,i.yg)("em",{parentName:"p"},"new")," granule record for Postgres.  This ",(0,i.yg)("em",{parentName:"p"},"intended")," post RDS transition, however should not be happening now."),(0,i.yg)("p",null,"With this bug we believe Dynamo is the source of truth, and \u2018excess\u2019 older granules will be left in postgres.     This should be detectable with tooling/query to detect duplicate granuleIds in the granules table."),(0,i.yg)("h3",{id:"issue-5"},"Issue 5"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://bugs.earthdata.nasa.gov/browse/CUMULUS-3024"},"Relevant ticket: CUMULUS-3024")),(0,i.yg)("p",null,"This is a sub-issue of issue 2 above - due to the way we assign a PDR name to a record, if the ",(0,i.yg)("inlineCode",{parentName:"p"},"pdr")," field is missing from the final payload for a granule as part of a workflow message write, the final granule record will not link the PDR to the granule properly in postgres, however the dynamo record ",(0,i.yg)("em",{parentName:"p"},"will")," have the linked PDR.       This ",(0,i.yg)("em",{parentName:"p"},"can")," happen in situations where the granule is written prior to completion with the PDR in the payload, but then downstream only the granule object is included, particularly in multi-workflow ingest scenarios and/or bulk update situations."),(0,i.yg)("h2",{id:"immediate-actions"},"Immediate Actions"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Re-review the issues described above"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"GHRC was able to scope the affected granules to specific collections, which makes the recovery process much easier. This may not be an option for all DAACs."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"If you have not ingested granules or performed partial granule updates on affected Cumulus versions (questions 1 and 2 on the survey), no action is required. You may update to the latest version of Cumulus.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"One option to ensure your Postgres data matches Dynamo is running the data-migration lambda (see below for instructions) before updating to the latest Cumulus version if both of the following are true:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"you have ingested granules using an affected Cumulus version"),(0,i.yg)("li",{parentName:"ul"},"your DAAC has not had any operations that updated an existing granule with an empty files array (granule.files = [])"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"A second option for DAACs that have ingested data using an affected Cumulus version is to use your DAAC\u2019s recovery tools or reingest the affected granules. This is likely the most certain method for ensuring Postgres contains the correct data but may be infeasible depending on the size of data holdings, etc.."))),(0,i.yg)("h2",{id:"guidance-going-forward"},"Guidance Going Forward"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Before updating to Cumulus version 16.x and beyond, take a snapshot of your DynamoDB instance. The v16 update removes the DynamoDB tables. This snapshot would be for use in unexpected data recovery scenarios only.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Cumulus recommends that you establish and follow a database backup/disaster recovery protocol for your RDS database, which should include periodic backups.  The frequency will depend on each DAAC\u2019s database architecture, comfort level, datastore size, and time available. ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html"},"Relevant AWS Docs"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Invest future development effort in data validation/integrity tools and procedures. Each DAAC has different requirements here. Each DAAC should maintain procedures for validating their Cumulus datastore against their holdings."))),(0,i.yg)("h2",{id:"running-a-granule-migration"},"Running a Granule Migration"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/cumulus/docs/v16.0.0/upgrade-notes/upgrade-rds#5-run-the-second-data-migration"},"Instructions for running the data-migration operation to sync Granules from DynamoDB to PostgreSQL")),(0,i.yg)("p",null,"The data-migration2 Lambda (which is invoked asynchronously using ",(0,i.yg)("inlineCode",{parentName:"p"},"${PREFIX}-postgres-migration-async-operation)")," uses Cumulus' Granule upsert logic to write granules from DynamoDB to PostgreSQL. This is particularly notable because granules with a running or queued status will only migrate a subset of their fields:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"status"),(0,i.yg)("li",{parentName:"ul"},"timestamp"),(0,i.yg)("li",{parentName:"ul"},"updated_at"),(0,i.yg)("li",{parentName:"ul"},"created_at")),(0,i.yg)("p",null,"It is recommended that users ensure their granules are in a final state (",(0,i.yg)("inlineCode",{parentName:"p"},"running"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"completed"),") before running this data migration. If there are Granules with an incomplete status, it may impact the data migration."),(0,i.yg)("p",null,"For example, if a Granule in the running status is updated by a workflow or API call (containing an updated status) and fails, that granule will have the original running status, not the intended/updated status. Failed Granule writes/updates should be evaluated and resolved prior to this data migration."),(0,i.yg)("p",null,"Cumulus provides the Cumulus Dead Letter Archive which is populated by the Dead Letter Queue for the sfEventSqsToDbRecords Lambda, which is responsible for Cumulus message writes to PostgreSQL. This may not catch all write failures depending on where the failure happened and workflow configuration but may be a useful tool."),(0,i.yg)("p",null,"If a Granule record is correct except for the status, Cumulus provides an API to update specific granule fields."))}h.isMDXComponent=!0}}]);