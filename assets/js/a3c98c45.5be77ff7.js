"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[98753],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},11317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var o=n(58168),a=n(98587),i=(n(96540),n(15680)),r=["components"],s={id:"discover_granules",title:"Discover Granules",hide_title:!1},l=void 0,u={unversionedId:"workflow_tasks/discover_granules",id:"version-v11.1.0/workflow_tasks/discover_granules",title:"Discover Granules",description:"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages.",source:"@site/versioned_docs/version-v11.1.0/workflow_tasks/discover_granules.md",sourceDirName:"workflow_tasks",slug:"/workflow_tasks/discover_granules",permalink:"/cumulus/docs/v11.1.0/workflow_tasks/discover_granules",draft:!1,tags:[],version:"v11.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"discover_granules",title:"Discover Granules",hide_title:!1},sidebar:"docs",previous:{title:"Cumulus Tasks",permalink:"/cumulus/docs/v11.1.0/tasks"},next:{title:"Files To Granules",permalink:"/cumulus/docs/v11.1.0/workflow_tasks/files_to_granules"}},c={},p=[{value:"Summary",id:"summary",level:2},{value:"Task Inputs",id:"task-inputs",level:2},{value:"Input",id:"input",level:3},{value:"Cumulus Configuration",id:"cumulus-configuration",level:3},{value:"Provider",id:"provider",level:4},{value:"Buckets",id:"buckets",level:4},{value:"Collection",id:"collection",level:4},{value:"DuplicateGranuleHandling",id:"duplicategranulehandling",level:4},{value:"Ignore Files Configuration (<code>ignoreFilesConfigForDiscovery</code>)",id:"ignore-files-configuration-ignorefilesconfigfordiscovery",level:4},{value:"Concurrency",id:"concurrency",level:4},{value:"Task Outputs",id:"task-outputs",level:2}],d={toc:p},g="wrapper";function f(e){var t=e.components,n=(0,a.A)(e,r);return(0,i.yg)(g,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages."),(0,i.yg)("p",null,"Links to the npm package, task input, output and configuration schema definitions, and more can be found on the auto-generated ",(0,i.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks")," page."),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("p",null,"The purpose of this task is to facilitate ingest of data that does not conform to either a PDR/",(0,i.yg)("a",{parentName:"p",href:"../data-cookbooks/sips-workflow"},"SIPS")," discovery mechanism, a ",(0,i.yg)("a",{parentName:"p",href:"../data-cookbooks/cnm-workflow"},"CNM Workflow")," or direct injection of workflow triggering events into Cumulus core components."),(0,i.yg)("p",null,"The task utilizes a defined ",(0,i.yg)("a",{parentName:"p",href:"../configuration/data-management-types#collections"},"collection")," in concert with a defined ",(0,i.yg)("a",{parentName:"p",href:"../configuration/data-management-types#providers"},"provider")," to scan a location for files matching the defined collection configuration, assemble those files into groupings by granule, and passes the constructed granules object as an output."),(0,i.yg)("p",null,"The constructed granules object is defined by the collection passed in the configuration, and has impacts to other provided core ",(0,i.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks"),"."),(0,i.yg)("p",null,"Users of this task in a workflow are encouraged to carefully consider their configuration  in context of downstream tasks and workflows."),(0,i.yg)("h2",{id:"task-inputs"},"Task Inputs"),(0,i.yg)("p",null,"Each of the following sections are a high-level discussion of the intent of the various input/output/config values."),(0,i.yg)("p",null,"For the most recent config.json schema, please see the ",(0,i.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,i.yg)("h3",{id:"input"},"Input"),(0,i.yg)("p",null,"This task does not expect an incoming payload."),(0,i.yg)("h3",{id:"cumulus-configuration"},"Cumulus Configuration"),(0,i.yg)("p",null,"This task does expect values to be set in the ",(0,i.yg)("inlineCode",{parentName:"p"},"task_config")," CMA parameters for the workflows.  A schema exists that defines the requirements for the task."),(0,i.yg)("p",null,"For the most recent config.json schema, please see the ",(0,i.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,i.yg)("p",null,"Below are expanded descriptions of selected config keys:"),(0,i.yg)("h4",{id:"provider"},"Provider"),(0,i.yg)("p",null,"A Cumulus ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"provider")," object.  Used to define connection information for a location to scan for granule discovery."),(0,i.yg)("h4",{id:"buckets"},"Buckets"),(0,i.yg)("p",null,"A list of buckets with types that will be used to assign bucket targets based on the collection configuration."),(0,i.yg)("h4",{id:"collection"},"Collection"),(0,i.yg)("p",null,"A Cumulus ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"collection")," object.    Used to define granule file groupings and granule metadata for discovered files.   The collection object utilizes the collection type key to generate types in the output object on discovery."),(0,i.yg)("h4",{id:"duplicategranulehandling"},"DuplicateGranuleHandling"),(0,i.yg)("p",null,"A string configuration that configures the step to filter the granules discovered:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"skip:               Duplicates will be filtered from the granules object"),(0,i.yg)("li",{parentName:"ul"},"error:              Duplicates encountered will result the step throwing an error"),(0,i.yg)("li",{parentName:"ul"},"replace, version:   Duplicates will be included in the granules object")),(0,i.yg)("p",null,"The possible values match the ",(0,i.yg)("inlineCode",{parentName:"p"},"collection.duplicateHandling")," and the task configuration can be set to use the ",(0,i.yg)("inlineCode",{parentName:"p"},"collection.duplicateHandling")," by configuring this value to: ",(0,i.yg)("inlineCode",{parentName:"p"},'"duplicateGranuleHandling": "{$.meta.collection.duplicateHandling}"'),"."),(0,i.yg)("h4",{id:"ignore-files-configuration-ignorefilesconfigfordiscovery"},"Ignore Files Configuration (",(0,i.yg)("inlineCode",{parentName:"h4"},"ignoreFilesConfigForDiscovery"),")"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")," property ",(0,i.yg)("inlineCode",{parentName:"p"},"ignoreFilesConfigForDiscovery")," indicates whether or not\nto ignore the ",(0,i.yg)("inlineCode",{parentName:"p"},"files")," configuration for a collection during granule discovery."),(0,i.yg)("p",null,"By default, this property is ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),", meaning that during discovery, a\ncollection's ",(0,i.yg)("inlineCode",{parentName:"p"},"files")," configuration is used to select which files to include in\na granule's file list, such that only files with names that match one of the\nregular expressions specified in the collection's ",(0,i.yg)("inlineCode",{parentName:"p"},"files")," configuration are\nadded to the granule's file list."),(0,i.yg)("p",null,"This property supports cases where such file filtering is ",(0,i.yg)("em",{parentName:"p"},"not")," desired\nduring the discovery phase.  By setting this property to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", a collection's\n",(0,i.yg)("inlineCode",{parentName:"p"},"files")," configuration is ignored, such that ",(0,i.yg)("em",{parentName:"p"},"all")," files for a granule are\nincluded in a granule's file list.  That is, no such filtering based on\nfilename occurs as described above."),(0,i.yg)("p",null,"When set on the task configuration, the value applies to all collections during\ndiscovery.  Otherwise, this property may be set on individual collections."),(0,i.yg)("h4",{id:"concurrency"},"Concurrency"),(0,i.yg)("p",null,"A number property that determines the level of concurrency with which granule duplicate checks are performed when ",(0,i.yg)("inlineCode",{parentName:"p"},"duplicateGranuleHandling")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"skip")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"error"),"."),(0,i.yg)("p",null,"Limiting concurrency helps to avoid throttling by the AWS Lambda API and helps to avoid encountering account Lambda concurrency limitations."),(0,i.yg)("p",null,"We do not recommend increasing this value unless you are seeing Lambda.Timeout errors when discover-granules discovers a large number of granules with ",(0,i.yg)("inlineCode",{parentName:"p"},"skip")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"error")," duplicate handling. However, as increasing the concurrency may lead to Lambda API or Lambda concurrency throttling errors, you may wish to consider converting the discover-granules task to an ECS activity, which does not face similar runtime constraints."),(0,i.yg)("p",null,"The default value is 3."),(0,i.yg)("h2",{id:"task-outputs"},"Task Outputs"),(0,i.yg)("p",null,"This task outputs an assembled array of Cumulus ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"granule")," objects as the payload for the next task, and returns only the expected payload for the next task."))}f.isMDXComponent=!0}}]);