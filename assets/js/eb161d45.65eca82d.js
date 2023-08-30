"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[3713],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=n,m=c["".concat(u,".").concat(k)]||c[k]||d[k]||s;return a?r.createElement(m,l(l({ref:t},i),{},{components:a})):r.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},82471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),l=["components"],o={id:"lzards_backup",title:"LZARDS Backup",hide_title:!1},u=void 0,p={unversionedId:"workflow_tasks/lzards_backup",id:"version-v18.0.0/workflow_tasks/lzards_backup",title:"LZARDS Backup",description:"The LZARDS backup task takes an array of granules and initiates backup requests to the LZARDS API, which will be handled asynchronously by LZARDS.",source:"@site/versioned_docs/version-v18.0.0/workflow_tasks/lzards_backup.md",sourceDirName:"workflow_tasks",slug:"/workflow_tasks/lzards_backup",permalink:"/cumulus/docs/workflow_tasks/lzards_backup",draft:!1,tags:[],version:"v18.0.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1693332308,formattedLastUpdatedAt:"Aug 29, 2023",frontMatter:{id:"lzards_backup",title:"LZARDS Backup",hide_title:!1},sidebar:"docs",previous:{title:"Queue Granules",permalink:"/cumulus/docs/workflow_tasks/queue_granules"},next:{title:"Parse PDR",permalink:"/cumulus/docs/workflow_tasks/parse_pdr"}},i={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Task Inputs",id:"task-inputs",level:2},{value:"Input",id:"input",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Task Outputs",id:"task-outputs",level:2},{value:"Output",id:"output",level:3}],d={toc:c},k="wrapper";function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,s.kt)(k,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The LZARDS backup task takes an array of granules and initiates backup requests to the LZARDS API, which will be handled asynchronously by LZARDS."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"For more information about LZARDS and the backup process go to the ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.earthdata.nasa.gov/display/LZARDS/LZARDS+Home"},"LZARDS Overview"),".")),(0,s.kt)("h2",{id:"deployment"},"Deployment"),(0,s.kt)("p",null,"The LZARDS backup task is not automatically deployed with Cumulus. To deploy the task through the Cumulus module, first you must specify a ",(0,s.kt)("inlineCode",{parentName:"p"},"lzards_launchpad_passphrase")," in your terraform variables (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"variables.tf"),") like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'variable "lzards_launchpad_passphrase" {\n  type    = string\n  default = ""\n}\n')),(0,s.kt)("p",null,"Then you can specify a value for your ",(0,s.kt)("inlineCode",{parentName:"p"},"lzards_launchpad_passphrase")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},"lzards_launchpad_passphrase = your-passphrase\n")),(0,s.kt)("p",null,"Lastly, you need to make sure that the ",(0,s.kt)("inlineCode",{parentName:"p"},"lzards_launchpad_passphrase")," is passed into the Cumulus module (in ",(0,s.kt)("inlineCode",{parentName:"p"},"main.tf"),") like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},"lzards_launchpad_passphrase  = var.lzards_launchpad_passphrase\n")),(0,s.kt)("p",null,"In short, deploying the LZARDS task requires configuring a passphrase variable and ensuring that your TF configuration passes that variable into the Cumulus module."),(0,s.kt)("p",null,"Additional terraform configuration for the LZARDS task can be found in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/cumulus/variables.tf"},(0,s.kt)("inlineCode",{parentName:"a"},"cumulus")," module's ",(0,s.kt)("inlineCode",{parentName:"a"},"variables.tf")," file,")," where the the relevant variables are prefixed with ",(0,s.kt)("inlineCode",{parentName:"p"},"lzards_"),". You can add these variables to your deployment using the same process outlined above for ",(0,s.kt)("inlineCode",{parentName:"p"},"lzards_launchpad_passphrase"),"."),(0,s.kt)("h2",{id:"task-inputs"},"Task Inputs"),(0,s.kt)("h3",{id:"input"},"Input"),(0,s.kt)("p",null,"This task expects an array of granules as input."),(0,s.kt)("p",null,"For the specifics, see the ",(0,s.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"This task does expect values to be set in the ",(0,s.kt)("inlineCode",{parentName:"p"},"workflow_config")," CMA parameters for the workflows.  A schema exists that defines the requirements for the task."),(0,s.kt)("p",null,"For the most recent config.json schema, please see the ",(0,s.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,s.kt)("h2",{id:"task-outputs"},"Task Outputs"),(0,s.kt)("h3",{id:"output"},"Output"),(0,s.kt)("p",null,"The LZARDS task outputs a composite object containing:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the input ",(0,s.kt)("inlineCode",{parentName:"li"},"granules")," array, and"),(0,s.kt)("li",{parentName:"ul"},"a ",(0,s.kt)("inlineCode",{parentName:"li"},"backupResults")," object that describes the results of LZARDS backup attempts.")),(0,s.kt)("p",null,"For the specifics, see the ",(0,s.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."))}m.isMDXComponent=!0}}]);