"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[78066],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>d});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),g=r,d=c["".concat(l,".").concat(g)]||c[g]||m[g]||s;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},60640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(45072),r=a(95656),s=(a(11504),a(95788)),o=["components"],i={id:"move_granules",title:"Move Granules",hide_title:!1},l=void 0,u={unversionedId:"workflow_tasks/move_granules",id:"version-v18.1.0/workflow_tasks/move_granules",title:"Move Granules",description:"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages.",source:"@site/versioned_docs/version-v18.1.0/workflow_tasks/move_granules.md",sourceDirName:"workflow_tasks",slug:"/workflow_tasks/move_granules",permalink:"/cumulus/docs/workflow_tasks/move_granules",draft:!1,tags:[],version:"v18.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1698355623,formattedLastUpdatedAt:"Oct 26, 2023",frontMatter:{id:"move_granules",title:"Move Granules",hide_title:!1},sidebar:"docs",previous:{title:"Files To Granules",permalink:"/cumulus/docs/workflow_tasks/files_to_granules"},next:{title:"Queue Granules",permalink:"/cumulus/docs/workflow_tasks/queue_granules"}},p={},c=[{value:"Summary",id:"summary",level:2},{value:"Task Inputs",id:"task-inputs",level:2},{value:"Input",id:"input",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Input",id:"input-1",level:3},{value:"Task Outputs",id:"task-outputs",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c},g="wrapper";function d(e){var t=e.components,a=(0,r.c)(e,o);return(0,s.yg)(g,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages."),(0,s.yg)("p",null,"Links to the npm package, task input, output and configuration schema definitions and more can be found on the auto-generated ",(0,s.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks")," page."),(0,s.yg)("h2",{id:"summary"},"Summary"),(0,s.yg)("p",null,"This task utilizes the incoming ",(0,s.yg)("inlineCode",{parentName:"p"},"event.input")," array of Cumulus ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/lib/schemas.js"},"granule")," objects to do the following:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"Move granules from their 'staging' location to the final location (as configured in the Sync Granules task)")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"Update the ",(0,s.yg)("inlineCode",{parentName:"p"},"event.input")," object with the new file locations.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"If the granule has a ECHO10/UMM CMR file(.cmr.xml or .cmr.json) file included in the ",(0,s.yg)("inlineCode",{parentName:"p"},"event.input"),":"),(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Update that file's access locations"),(0,s.yg)("li",{parentName:"ul"},"Add it to the appropriate access URL category for the CMR filetype as defined by granule CNM filetype."),(0,s.yg)("li",{parentName:"ul"},"Set the CMR file to 'metadata' in the output granules object and add it to  the granule files if it's not already present.")))),(0,s.yg)("admonition",{title:"invalid CNM type",type:"caution"},(0,s.yg)("p",{parentName:"admonition"},"Granules without a valid CNM type set in the granule file type field in ",(0,s.yg)("inlineCode",{parentName:"p"},"event.input"),' will be treated as "data" in the updated CMR metadata file.')),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Task then outputs an updated list of ",(0,s.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/blob/master/packages/api/lib/schemas.js"},"granule")," objects.")),(0,s.yg)("h2",{id:"task-inputs"},"Task Inputs"),(0,s.yg)("h3",{id:"input"},"Input"),(0,s.yg)("p",null,"This task expects an incoming input that contains a list of 'staged' S3 URIs to move to their final archive location.  If CMR metadata is to be updated for a granule, it must also be included in the input."),(0,s.yg)("p",null,"For the specifics, see the ",(0,s.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,s.yg)("h3",{id:"configuration"},"Configuration"),(0,s.yg)("p",null,"This task does expect values to be set in the ",(0,s.yg)("inlineCode",{parentName:"p"},"workflow_config")," CMA parameters for the workflows.  A schema exists that defines the requirements for the task."),(0,s.yg)("p",null,"For the most recent config.json schema, please see the ",(0,s.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,s.yg)("h3",{id:"input-1"},"Input"),(0,s.yg)("p",null,"This task expects event.input to provide an array of Cumulus ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/lib/schemas.js"},"granule")," objects.   The files listed for each granule represent the files to be acted upon as described in ",(0,s.yg)("a",{parentName:"p",href:"#summary"},"summary"),"."),(0,s.yg)("h2",{id:"task-outputs"},"Task Outputs"),(0,s.yg)("p",null,"This task outputs an assembled array of Cumulus ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/lib/schemas.js"},"granule")," objects  with post-move file locations as the payload for the next task, and returns only the expected payload for the next task.    If a CMR file has been specified for a granule object, the CMR resources related to the granule files  will be updated according to the updated granule file metadata."),(0,s.yg)("h2",{id:"examples"},"Examples"),(0,s.yg)("p",null,"See ",(0,s.yg)("a",{parentName:"p",href:"../data-cookbooks/sips-workflow"},"the SIPS workflow cookbook")," for an example of this task in a workflow."))}d.isMDXComponent=!0}}]);