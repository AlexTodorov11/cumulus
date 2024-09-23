"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[54354],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,u=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||u;return t?n.createElement(g,o(o({ref:a},p),{},{components:t})):n.createElement(g,o({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var u=t.length,o=new Array(u);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<u;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97867:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(58168),r=t(98587),u=(t(96540),t(15680)),o=["components"],s={id:"update-cma-2.0.2",title:"Upgrade to CMA 2.0.2",hide_title:!1},l=void 0,i={unversionedId:"upgrade-notes/update-cma-2.0.2",id:"version-v19.0.0/upgrade-notes/update-cma-2.0.2",title:"Upgrade to CMA 2.0.2",description:"Updating a Cumulus Deployment to CMA 2.0.2",source:"@site/versioned_docs/version-v19.0.0/upgrade-notes/update-cma-2.0.2.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/update-cma-2.0.2",permalink:"/cumulus/docs/upgrade-notes/update-cma-2.0.2",draft:!1,tags:[],version:"v19.0.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724951961,formattedLastUpdatedAt:"Aug 29, 2024",frontMatter:{id:"update-cma-2.0.2",title:"Upgrade to CMA 2.0.2",hide_title:!1},sidebar:"docs",previous:{title:"Updates to task granule file schemas",permalink:"/cumulus/docs/upgrade-notes/update-task-file-schemas"},next:{title:"Upgrade RDS Phase 3 Release",permalink:"/cumulus/docs/upgrade-notes/upgrade-rds-phase-3-release"}},p={},d=[{value:"Updating a Cumulus Deployment to CMA 2.0.2",id:"updating-a-cumulus-deployment-to-cma-202",level:2},{value:"Background",id:"background",level:3},{value:"Changes",id:"changes",level:3},{value:"Execution Record Update",id:"execution-record-update",level:4},{value:"Original",id:"original",level:4},{value:"New",id:"new",level:4},{value:"Actions Required",id:"actions-required",level:3}],c={toc:d},m="wrapper";function g(e){var a=e.components,t=(0,r.A)(e,o);return(0,u.yg)(m,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,u.yg)("h2",{id:"updating-a-cumulus-deployment-to-cma-202"},"Updating a Cumulus Deployment to CMA 2.0.2"),(0,u.yg)("h3",{id:"background"},"Background"),(0,u.yg)("p",null,"The Cumulus Message Adapter has been updated in ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter/releases/tag/v2.0.2"},"release 2.0.2")," to no longer utilize the AWS step function API to look up the defined name of a step function task for population in meta.workflow_tasks, but instead use an incrementing integer field."),(0,u.yg)("p",null,"Additionally a bugfix was released in the form of v2.0.1/v2.0.2 following the initial 2.0.0 release, so all users should update to ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter/releases/tag/v2.0.2"},"release 2.0.2")),(0,u.yg)("p",null,(0,u.yg)("em",{parentName:"p"},"The update is not tied to a particular version of Core"),", however the update should be done across all task components in order to ensure consistent execution records."),(0,u.yg)("h3",{id:"changes"},"Changes"),(0,u.yg)("h4",{id:"execution-record-update"},"Execution Record Update"),(0,u.yg)("p",null,"This update functionally means that Cumulus tasks/activities using the CMA will now record a record that looks like the following in ",(0,u.yg)("inlineCode",{parentName:"p"},"meta.workflowtasks"),", and more importantly in the ",(0,u.yg)("inlineCode",{parentName:"p"},"tasks")," column for an ",(0,u.yg)("inlineCode",{parentName:"p"},"execution")," record:"),(0,u.yg)("h4",{id:"original"},"Original"),(0,u.yg)("pre",null,(0,u.yg)("code",{parentName:"pre",className:"language-json"},'      "DiscoverGranules": {\n        "name": "jk-tf-DiscoverGranules",\n        "version": "$LATEST",\n        "arn": "arn:aws:lambda:us-east-1:xxxxx:function:jk-tf-DiscoverGranules"\n      },\n      "QueueGranules": {\n        "name": "jk-tf-QueueGranules",\n        "version": "$LATEST",\n        "arn": "arn:aws:lambda:us-east-1:xxxx:function:jk-tf-QueueGranules"\n      }\n')),(0,u.yg)("h4",{id:"new"},"New"),(0,u.yg)("pre",null,(0,u.yg)("code",{parentName:"pre",className:"language-json"},'      "0": {\n        "name": "jk-tf-DiscoverGranules",\n        "version": "$LATEST",\n        "arn": "arn:aws:lambda:us-east-1:xxxxx:function:jk-tf-DiscoverGranules"\n      },\n      "1": {\n        "name": "jk-tf-QueueGranules",\n        "version": "$LATEST",\n        "arn": "arn:aws:lambda:us-east-1:xxxx:function:jk-tf-QueueGranules"\n      }\n')),(0,u.yg)("h3",{id:"actions-required"},"Actions Required"),(0,u.yg)("p",null,"The following should be done as part of a Cumulus stack update to utilize ",(0,u.yg)("inlineCode",{parentName:"p"},"cumulus message adapter")," > ",(0,u.yg)("inlineCode",{parentName:"p"},"2.0.2"),":"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"Python tasks that utilize ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter-python"},(0,u.yg)("inlineCode",{parentName:"a"},"cumulus-message-adapter-python"))," should be updated to use > ",(0,u.yg)("inlineCode",{parentName:"p"},"2.0.0"),", their lambdas rebuilt and Cumulus workflows reconfigured to use the updated version.")),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"Python activities that utilize ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-process-py"},(0,u.yg)("inlineCode",{parentName:"a"},"cumulus-process-py"))," should be rebuilt using > ",(0,u.yg)("inlineCode",{parentName:"p"},"1.0.0")," with updated dependencies, and have their images deployed/Cumulus configured to use the new version.")),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("p",{parentName:"li"},"The ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter"},(0,u.yg)("inlineCode",{parentName:"a"},"cumulus-message-adapter"))," v2.0.2 lambda layer should be made available in the deployment account, and the Cumulus deployment should be reconfigured to use it (via the ",(0,u.yg)("inlineCode",{parentName:"p"},"cumulus_message_adapter_lambda_layer_version_arn")," variable in the ",(0,u.yg)("inlineCode",{parentName:"p"},"cumulus")," module).  This should address all Core node.js tasks that utilize the CMA, and many contributed node.js/JAVA components."))),(0,u.yg)("p",null,"Once the above have been done, redeploy Cumulus to apply the configuration and the updates should be live."))}g.isMDXComponent=!0}}]);