"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[9749],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>h});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),i=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=i(e.components);return r.createElement(u.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=i(t),y=n,h=c["".concat(u,".").concat(y)]||c[y]||d[y]||s;return t?r.createElement(h,l(l({ref:a},p),{},{components:t})):r.createElement(h,l({ref:a},p))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=y;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var i=2;i<s;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},48749:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),n=t(98587),s=(t(96540),t(15680)),l=["components"],o={id:"lzards_backup",title:"LZARDS Backup",hide_title:!1},u=void 0,i={unversionedId:"workflow_tasks/lzards_backup",id:"version-v10.0.0/workflow_tasks/lzards_backup",title:"LZARDS Backup",description:"The LZARDS backup task takes an array of granules and initiates backup requests to the LZARDS API, which will be handled asynchronously by LZARDS.",source:"@site/versioned_docs/version-v10.0.0/workflow_tasks/lzards_backup.md",sourceDirName:"workflow_tasks",slug:"/workflow_tasks/lzards_backup",permalink:"/cumulus/docs/v10.0.0/workflow_tasks/lzards_backup",draft:!1,tags:[],version:"v10.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"lzards_backup",title:"LZARDS Backup",hide_title:!1},sidebar:"docs",previous:{title:"Files To Granules",permalink:"/cumulus/docs/v10.0.0/workflow_tasks/files_to_granules"},next:{title:"Move Granules",permalink:"/cumulus/docs/v10.0.0/workflow_tasks/move_granules"}},p={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Task Inputs",id:"task-inputs",level:2},{value:"Input",id:"input",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Task Outputs",id:"task-outputs",level:2},{value:"Output",id:"output",level:3}],d={toc:c},y="wrapper";function h(e){var a=e.components,t=(0,n.A)(e,l);return(0,s.yg)(y,(0,r.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"The LZARDS backup task takes an array of granules and initiates backup requests to the LZARDS API, which will be handled asynchronously by LZARDS."),(0,s.yg)("h2",{id:"deployment"},"Deployment"),(0,s.yg)("p",null,"The LZARDS backup task is not automatically deployed with Cumulus. To deploy the task through the Cumulus module, first you must specify a ",(0,s.yg)("inlineCode",{parentName:"p"},"lzards_launchpad_passphrase")," in your terraform variables (e.g. ",(0,s.yg)("inlineCode",{parentName:"p"},"variables.tf"),") like so:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-hcl"},'variable "lzards_launchpad_passphrase" {\n  type    = string\n  default = ""\n}\n')),(0,s.yg)("p",null,"Then you can specify a value for your ",(0,s.yg)("inlineCode",{parentName:"p"},"lzards_launchpad_passphrase")," in ",(0,s.yg)("inlineCode",{parentName:"p"},"terraform.tfvars")," like so:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-hcl"},"lzards_launchpad_passphrase = your-passphrase\n")),(0,s.yg)("p",null,"Lastly, you need to make sure that the ",(0,s.yg)("inlineCode",{parentName:"p"},"lzards_launchpad_passphrase")," is passed into the Cumulus module (in ",(0,s.yg)("inlineCode",{parentName:"p"},"main.tf"),") like so:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-hcl"},"lzards_launchpad_passphrase  = var.lzards_launchpad_passphrase\n")),(0,s.yg)("p",null,"In short, deploying the LZARDS task requires configuring a passphrase variable and ensuring that your TF configuration passes that variable into the Cumulus module."),(0,s.yg)("p",null,"Additional terraform configuration for the LZARDS task can be found in the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/cumulus/variables.tf"},(0,s.yg)("inlineCode",{parentName:"a"},"cumulus")," module's ",(0,s.yg)("inlineCode",{parentName:"a"},"variables.tf")," file,")," where the the relevant variables are prefixed with ",(0,s.yg)("inlineCode",{parentName:"p"},"lzards_"),". You can add these variables to your deployment using the same process outlined above for ",(0,s.yg)("inlineCode",{parentName:"p"},"lzards_launchpad_passphrase"),"."),(0,s.yg)("h2",{id:"task-inputs"},"Task Inputs"),(0,s.yg)("h3",{id:"input"},"Input"),(0,s.yg)("p",null,"This task expects an array of granules as input."),(0,s.yg)("p",null,"For the specifics, see the ",(0,s.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,s.yg)("h3",{id:"configuration"},"Configuration"),(0,s.yg)("p",null,"This task does expect values to be set in the ",(0,s.yg)("inlineCode",{parentName:"p"},"workflow_config")," CMA parameters for the workflows.  A schema exists that defines the requirements for the task."),(0,s.yg)("p",null,"For the most recent config.json schema, please see the ",(0,s.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,s.yg)("h2",{id:"task-outputs"},"Task Outputs"),(0,s.yg)("h3",{id:"output"},"Output"),(0,s.yg)("p",null,"The LZARDS task outputs a composite object containing:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"the input ",(0,s.yg)("inlineCode",{parentName:"li"},"granules")," array, and"),(0,s.yg)("li",{parentName:"ul"},"a ",(0,s.yg)("inlineCode",{parentName:"li"},"backupResults")," object that describes the results of LZARDS backup attempts.")),(0,s.yg)("p",null,"For the specifics, see the ",(0,s.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."))}h.isMDXComponent=!0}}]);