"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[73576],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"parse_pdr",title:"Parse PDR",hide_title:!1},l=void 0,u={unversionedId:"workflow_tasks/parse_pdr",id:"version-v16.0.0/workflow_tasks/parse_pdr",title:"Parse PDR",description:"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages.",source:"@site/versioned_docs/version-v16.0.0/workflow_tasks/parse_pdr.md",sourceDirName:"workflow_tasks",slug:"/workflow_tasks/parse_pdr",permalink:"/cumulus/docs/workflow_tasks/parse_pdr",draft:!1,tags:[],version:"v16.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1684426651,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{id:"parse_pdr",title:"Parse PDR",hide_title:!1},sidebar:"docs",previous:{title:"LZARDS Backup",permalink:"/cumulus/docs/workflow_tasks/lzards_backup"},next:{title:"Features",permalink:"/cumulus/docs/category/features"}},p={},c=[{value:"Summary",id:"summary",level:2},{value:"Task Inputs",id:"task-inputs",level:2},{value:"Input",id:"input",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Provider",id:"provider",level:4},{value:"Bucket",id:"bucket",level:4},{value:"Collection",id:"collection",level:4},{value:"Task Outputs",id:"task-outputs",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c},m="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages."),(0,o.kt)("p",null,"Links to the npm package, task input, output and configuration schema definitions and more can be found on the auto-generated ",(0,o.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks")," page."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The purpose of this task is to do the following with the incoming PDR object:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Stage it to an internal S3 bucket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Parse the PDR")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Archive the PDR and remove the staged file if successful")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Outputs a payload object containing metadata about the parsed PDR (e.g. total size of all files, files counts, etc) and a granules object"))),(0,o.kt)("p",null,"The constructed granules object is created using PDR metadata to determine values like data type and version, collection definitions to determine a file storage location based on the extracted data type and version number."),(0,o.kt)("p",null,"Granule file types are converted from the PDR spec types to CNM types according to the following translation table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"  HDF: 'data',\n  HDF-EOS: 'data',\n  SCIENCE: 'data',\n  BROWSE: 'browse',\n  METADATA: 'metadata',\n  BROWSE_METADATA: 'metadata',\n  QA_METADATA: 'metadata',\n  PRODHIST: 'qa',\n  QA: 'metadata',\n  TGZ: 'data',\n  LINKAGE: 'data'\n")),(0,o.kt)("p",null,"Files missing file types will have none assigned, files with invalid types will result in a PDR parse failure."),(0,o.kt)("h2",{id:"task-inputs"},"Task Inputs"),(0,o.kt)("h3",{id:"input"},"Input"),(0,o.kt)("p",null,"This task expects an incoming input that contains name and path information about the PDR to be parsed.   For the specifics, see the ",(0,o.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This task does expect values to be set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow_config")," CMA parameters for the workflows.  A schema exists that defines the requirements for the task."),(0,o.kt)("p",null,"For the most recent config.json schema, please see the ",(0,o.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,o.kt)("p",null,"Below are expanded descriptions of selected config keys:"),(0,o.kt)("h4",{id:"provider"},"Provider"),(0,o.kt)("p",null,"A Cumulus ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"provider")," object.  Used to define connection information for retrieving the PDR."),(0,o.kt)("h4",{id:"bucket"},"Bucket"),(0,o.kt)("p",null,"Defines the bucket where the 'pdrs' folder for parsed PDRs will be stored."),(0,o.kt)("h4",{id:"collection"},"Collection"),(0,o.kt)("p",null,"A Cumulus ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"collection")," object.    Used to define granule file groupings and granule metadata for discovered files."),(0,o.kt)("h2",{id:"task-outputs"},"Task Outputs"),(0,o.kt)("p",null,"This task outputs a single payload output object containing metadata about the parsed PDR (e.g. filesCount, totalSize, etc), a pdr object with information for later steps and a the generated array of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"granule")," objects."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../data-cookbooks/sips-workflow"},"the SIPS workflow cookbook")," for an example of this task in a workflow"))}f.isMDXComponent=!0}}]);