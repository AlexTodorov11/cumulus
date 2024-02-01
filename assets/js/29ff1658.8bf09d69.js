"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[2080],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>g});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,u=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||u;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=a.length,o=new Array(u);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<u;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(45072),r=a(95656),u=(a(11504),a(95788)),o=["components"],s={id:"update-cma-2.0.2",title:"Upgrade to CMA 2.0.2",hide_title:!1},l=void 0,i={unversionedId:"upgrade-notes/update-cma-2.0.2",id:"upgrade-notes/update-cma-2.0.2",title:"Upgrade to CMA 2.0.2",description:"Updating a Cumulus Deployment to CMA 2.0.2",source:"@site/../docs/upgrade-notes/update-cma-2.0.2.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/update-cma-2.0.2",permalink:"/cumulus/docs/next/upgrade-notes/update-cma-2.0.2",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1642007461,formattedLastUpdatedAt:"Jan 12, 2022",frontMatter:{id:"update-cma-2.0.2",title:"Upgrade to CMA 2.0.2",hide_title:!1},sidebar:"docs",previous:{title:"Updates to task granule file schemas",permalink:"/cumulus/docs/next/upgrade-notes/update-task-file-schemas"},next:{title:"Upgrade RDS Phase 3 Release",permalink:"/cumulus/docs/next/upgrade-notes/upgrade-rds-phase-3-release"}},p={},d=[{value:"Updating a Cumulus Deployment to CMA 2.0.2",id:"updating-a-cumulus-deployment-to-cma-202",level:2},{value:"Background",id:"background",level:3},{value:"Changes",id:"changes",level:3},{value:"Execution Record Update",id:"execution-record-update",level:4},{value:"Original",id:"original",level:4},{value:"New",id:"new",level:4},{value:"Actions Required",id:"actions-required",level:3}],c={toc:d},m="wrapper";function g(e){var t=e.components,a=(0,r.c)(e,o);return(0,u.yg)(m,(0,n.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,u.yg)("h2",{id:"updating-a-cumulus-deployment-to-cma-202"},"Updating a Cumulus Deployment to CMA 2.0.2"),(0,u.yg)("h3",{id:"background"},"Background"),(0,u.yg)("p",null,"The Cumulus Message Adapter has been updated in ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter/releases/tag/v2.0.2"},"release 2.0.2")," to no longer utilize the AWS step function API to look up the defined name of a step function task for population in meta.workflow_tasks, but instead use an incrementing integer field."),(0,u.yg)("p",null,"Additionally a bugfix was released in the form of v2.0.1/v2.0.2 following the initial 2.0.0 release, so all users should update to ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter/releases/tag/v2.0.2"},"release 2.0.2")),(0,u.yg)("p",null,(0,u.yg)("em",{parentName:"p"},"The update is not tied to a particular version of Core"),", however the update should be done across all task components in order to ensure consistent execution records."),(0,u.yg)("h3",{id:"changes"},"Changes"),(0,u.yg)("h4",{id:"execution-record-update"},"Execution Record Update"),(0,u.yg)("p",null,"This update functionally means that Cumulus tasks/activities using the CMA will now record a record that looks like the following in ",(0,u.yg)("inlineCode",{parentName:"p"},"meta.workflowtasks"),", and more importantly in the ",(0,u.yg)("inlineCode",{parentName:"p"},"tasks")," column for an ",(0,u.yg)("inlineCode",{parentName:"p"},"execution")," record:"),(0,u.yg)("h4",{id:"original"},"Original"),(0,u.yg)("pre",null,(0,u.yg)("code",{parentName:"pre",className:"language-json"},'      "DiscoverGranules": {\n        "name": "jk-tf-DiscoverGranules",\n        "version": "$LATEST",\n        "arn": "arn:aws:lambda:us-east-1:xxxxx:function:jk-tf-DiscoverGranules"\n      },\n      "QueueGranules": {\n        "name": "jk-tf-QueueGranules",\n        "version": "$LATEST",\n        "arn": "arn:aws:lambda:us-east-1:xxxx:function:jk-tf-QueueGranules"\n      }\n')),(0,u.yg)("h4",{id:"new"},"New"),(0,u.yg)("pre",null,(0,u.yg)("code",{parentName:"pre",className:"language-json"},'      "0": {\n        "name": "jk-tf-DiscoverGranules",\n        "version": "$LATEST",\n        "arn": "arn:aws:lambda:us-east-1:xxxxx:function:jk-tf-DiscoverGranules"\n      },\n      "1": {\n        "name": "jk-tf-QueueGranules",\n        "version": "$LATEST",\n        "arn": "arn:aws:lambda:us-east-1:xxxx:function:jk-tf-QueueGranules"\n      }\n')),(0,u.yg)("h3",{id:"actions-required"},"Actions Required"),(0,u.yg)("p",null,"The following should be done as part of a Cumulus stack update to utilize ",(0,u.yg)("inlineCode",{parentName:"p"},"cumulus message adapter")," > ",(0,u.yg)("inlineCode",{parentName:"p"},"2.0.2"),":"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"Python tasks that utilize ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter-python"},(0,u.yg)("inlineCode",{parentName:"a"},"cumulus-message-adapter-python"))," should be updated to use > ",(0,u.yg)("inlineCode",{parentName:"p"},"2.0.0"),", their lambdas rebuilt and Cumulus workflows reconfigured to use the updated version.")),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"Python activities that utilize ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-process-py"},(0,u.yg)("inlineCode",{parentName:"a"},"cumulus-process-py"))," should be rebuilt using > ",(0,u.yg)("inlineCode",{parentName:"p"},"1.0.0")," with updated dependencies, and have their images deployed/Cumulus configured to use the new version.")),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"The ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter"},(0,u.yg)("inlineCode",{parentName:"a"},"cumulus-message-adapter"))," v2.0.2 lambda layer should be made available in the deployment account, and the Cumulus deployment should be reconfigured to use it (via the ",(0,u.yg)("inlineCode",{parentName:"p"},"cumulus_message_adapter_lambda_layer_version_arn")," variable in the ",(0,u.yg)("inlineCode",{parentName:"p"},"cumulus")," module).  This should address all Core node.js tasks that utilize the CMA, and many contributed node.js/JAVA components."))),(0,u.yg)("p",null,"Once the above have been done, redeploy Cumulus to apply the configuration and the updates should be live."))}g.isMDXComponent=!0}}]);