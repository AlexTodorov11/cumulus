"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[1692],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),c=n,m=d["".concat(p,".").concat(c)]||d[c]||g[c]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},92693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(58168),n=r(98587),o=(r(96540),r(15680)),s=["components"],i={id:"upgrade-rds-cluster-tf-postgres-13",title:"Upgrade Database Cluster to PostgreSQL v13",hide_title:!1},p=void 0,l={unversionedId:"upgrade-notes/upgrade-rds-cluster-tf-postgres-13",id:"version-v18.4.0/upgrade-notes/upgrade-rds-cluster-tf-postgres-13",title:"Upgrade Database Cluster to PostgreSQL v13",description:"Cumulus Core as of version > 18.1.0 now supports and is tested against Aurora Postgres v13.   All users should update their datastores to this version as part of an upgrade process upon upgrading to release version 18.2.0.",source:"@site/versioned_docs/version-v18.4.0/upgrade-notes/upgrade-rds-cluster-tf-postgres-13.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/upgrade-rds-cluster-tf-postgres-13",permalink:"/cumulus/docs/v18.4.0/upgrade-notes/upgrade-rds-cluster-tf-postgres-13",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"upgrade-rds-cluster-tf-postgres-13",title:"Upgrade Database Cluster to PostgreSQL v13",hide_title:!1},sidebar:"docs",previous:{title:"Data Integrity & Migration Guidance (RDS Phase 3 Upgrade)",permalink:"/cumulus/docs/v18.4.0/upgrade-notes/rds-phase-3-data-migration-guidance"},next:{title:"Update Cumulus_id Type and Indexes",permalink:"/cumulus/docs/v18.4.0/upgrade-notes/update-cumulus_id-type-indexes-CUMULUS-3449"}},u={},d=[{value:"Users utilizing the <code>cumulus-rds-tf</code> module",id:"users-utilizing-the-cumulus-rds-tf-module",level:2}],g={toc:d},c="wrapper";function m(e){var t=e.components,r=(0,n.A)(e,s);return(0,o.yg)(c,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Cumulus Core as of version > 18.1.0** now supports and is tested against Aurora Postgres v13.   All users should update their datastores to this version as part of an upgrade process upon upgrading to release version 18.2.0."),(0,o.yg)("p",null,"**This update was also backported to the 16.1.x release chain starting with v16.1.3."),(0,o.yg)("p",null,"We recommend stopping all ingest rules if database downtime is required (e.g. you do not have a blue-green database solution or are using serverless V1) for the update  as any unavailability of the database may result in unexpected database write failures (resulting in records in the Dead Letter Archive), workflow failures or other unexpected failures."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"It is also recommended that users test/evaluate the upgrade prior to performing it on their primary datastore in order to determine expected downtime and/or other related issues for their particular configuration.")),(0,o.yg)("h2",{id:"users-utilizing-the-cumulus-rds-tf-module"},"Users utilizing the ",(0,o.yg)("inlineCode",{parentName:"h2"},"cumulus-rds-tf")," module"),(0,o.yg)("p",null,"It is recommended that users manually backup and/or consider cloning their datastore in order to recover the datastore if an upgrade goes awry."),(0,o.yg)("p",null,"Upgrading the Aurora Serverless v1 cluster will be completed via AWS console in this document and require manual steps to complete the upgrade:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Ensure a supported version (> 18.1.0 ",(0,o.yg)("em",{parentName:"p"},"or")," 16.1.4 or a later patch version) is deployed.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Deploy the newest version of the ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus-rds-tf")," module, ensuring ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_upgrade")," is set to false.   This will ",(0,o.yg)("em",{parentName:"p"},"only")," deploy a ",(0,o.yg)("inlineCode",{parentName:"p"},"v13")," version of your current parameter group configuration, named ",(0,o.yg)("inlineCode",{parentName:"p"},"<prefix>-cluster-parameter-group-v13"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Shut down all ingest and other usage of the database cluster by 3rd party applications if appropriate.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Once this is done, utilize the AWS RDS console to ",(0,o.yg)("inlineCode",{parentName:"p"},"modify")," the database cluster, and update the following settings:"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Set ",(0,o.yg)("inlineCode",{parentName:"li"},"Engine Version"),"  to the currently available Serverless v1 Postgres v13 engine (PostgreSQL 13.12 as of this instruction set\u2019s authoring)"),(0,o.yg)("li",{parentName:"ul"},"Ensure the min/max capacity settings match expected values and have not changed"),(0,o.yg)("li",{parentName:"ul"},"DB cluster parameter group - utilize the newly created parameter group from step #2 for the update."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Once you have completed the modifications, click ",(0,o.yg)("inlineCode",{parentName:"p"},"Continue")," and verify the ",(0,o.yg)("inlineCode",{parentName:"p"},"Summary of modifications")," has the engine version and modified parameter group.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Important:")," Update the ",(0,o.yg)("inlineCode",{parentName:"p"},"Schedule modifications")," to apply the change immediately."),(0,o.yg)("p",{parentName:"li"},"  Once this is done, apply the updates. The database upgrade will begin, and the database will shutdown/restart repeatedly.    You can monitor progress in the database cluster\u2019s ",(0,o.yg)("inlineCode",{parentName:"p"},"Logs & events")," tab."),(0,o.yg)("p",{parentName:"li"},"  Upon completion you should expect to see output similar to:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-text"},"Database cluster engine major version has been upgraded.\nUpdated to use DBClusterParameterGroup : <prefix>-cluster-parameter-group-v13. The DB cluster will scale to apply database parameters.\nScaling DB cluster from 4 capacity units to 4 capacity units for this reason: Apply database parameters.\n"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"On update completion, validate database cluster appears to have restarted with the expected configuration, non-cumulus databases, etc.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Update the ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_upgrade")," ",(0,o.yg)("inlineCode",{parentName:"p"},"rds-cluster-tf")," module variable to ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", and run ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform init")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform apply")," to ensure the postgres v11 compatible parameter group is cleaned up. This should be the only change so double-check the changeset or run ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform plan")," to be sure.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Resume use of the database cluster."))))}m.isMDXComponent=!0}}]);