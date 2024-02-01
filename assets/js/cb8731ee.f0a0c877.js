"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[74508],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>f});var a=n(11504);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),g=s,f=c["".concat(l,".").concat(g)]||c[g]||d[g]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},29676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(45072),s=n(95656),r=(n(11504),n(95788)),o=["components"],i={id:"files_to_granules",title:"Files To Granules",hide_title:!1},l=void 0,u={unversionedId:"workflow_tasks/files_to_granules",id:"version-v16.0.0/workflow_tasks/files_to_granules",title:"Files To Granules",description:"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages.",source:"@site/versioned_docs/version-v16.0.0/workflow_tasks/files_to_granules.md",sourceDirName:"workflow_tasks",slug:"/workflow_tasks/files_to_granules",permalink:"/cumulus/docs/v16.0.0/workflow_tasks/files_to_granules",draft:!1,tags:[],version:"v16.0.0",lastUpdatedBy:"Nate Pauzenga",lastUpdatedAt:1689363144,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"files_to_granules",title:"Files To Granules",hide_title:!1},sidebar:"docs",previous:{title:"Discover Granules",permalink:"/cumulus/docs/v16.0.0/workflow_tasks/discover_granules"},next:{title:"Move Granules",permalink:"/cumulus/docs/v16.0.0/workflow_tasks/move_granules"}},p={},c=[{value:"Summary",id:"summary",level:2},{value:"Task Inputs",id:"task-inputs",level:2},{value:"Input",id:"input",level:3},{value:"Configuration",id:"configuration",level:3},{value:"inputGranules",id:"inputgranules",level:4},{value:"Task Outputs",id:"task-outputs",level:2}],d={toc:c},g="wrapper";function f(e){var t=e.components,n=(0,s.c)(e,o);return(0,r.yg)(g,(0,a.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages."),(0,r.yg)("p",null,"Links to the npm package, task input, output and configuration schema definitions and more can be found on the auto-generated ",(0,r.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks")," page."),(0,r.yg)("h2",{id:"summary"},"Summary"),(0,r.yg)("p",null,"This task utilizes the incoming ",(0,r.yg)("inlineCode",{parentName:"p"},"config.inputGranules")," and the task input list of s3 URIs along with the rest of the configuration objects to take the list of incoming files and sort them into a list of granule objects."),(0,r.yg)("p",null,"  ",(0,r.yg)("strong",{parentName:"p"},"Please note")," Files passed in without metadata defined previously for ",(0,r.yg)("inlineCode",{parentName:"p"},"config.inputGranules")," will be added with the following keys:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"size"),(0,r.yg)("li",{parentName:"ul"},"bucket"),(0,r.yg)("li",{parentName:"ul"},"key"),(0,r.yg)("li",{parentName:"ul"},"fileName")),(0,r.yg)("p",null,"It is primarily intended to support compatibility with the standard output of a processing task, and convert that output into a granule object accepted as input by the majority of other Cumulus tasks."),(0,r.yg)("h2",{id:"task-inputs"},"Task Inputs"),(0,r.yg)("h3",{id:"input"},"Input"),(0,r.yg)("p",null,"This task expects an incoming input that contains an array  of 'staged' S3 URIs to move to their final archive location."),(0,r.yg)("p",null,"For the specifics, see the ",(0,r.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"This task does expect values to be set in the ",(0,r.yg)("inlineCode",{parentName:"p"},"workflow_config")," CMA parameters for the workflows.  A schema exists that defines the requirements for the task."),(0,r.yg)("p",null,"For the most recent config.json schema, please see the ",(0,r.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,r.yg)("p",null,"Below are expanded descriptions of selected config keys:"),(0,r.yg)("h4",{id:"inputgranules"},"inputGranules"),(0,r.yg)("p",null,"An array of Cumulus ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"granule")," objects."),(0,r.yg)("p",null,"This object will be used to define metadata values for the move granules task, and is the basis for the updated object that will be added to the output."),(0,r.yg)("h2",{id:"task-outputs"},"Task Outputs"),(0,r.yg)("p",null,"This task outputs an assembled array of Cumulus ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"granule")," objects as the payload for the next task, and returns only the expected payload for the next task."))}f.isMDXComponent=!0}}]);