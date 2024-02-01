"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[85064],{95788:(e,o,t)=>{t.d(o,{Iu:()=>m,yg:()=>f});var l=t(11504);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function u(e,o){if(null==e)return{};var t,l,n=function(e,o){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=l.createContext({}),i=function(e){var o=l.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},m=function(e){var o=i(e.components);return l.createElement(s.Provider,{value:o},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return l.createElement(l.Fragment,{},o)}},d=l.forwardRef((function(e,o){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=i(t),d=n,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return t?l.createElement(f,a(a({ref:o},m),{},{components:t})):l.createElement(f,a({ref:o},m))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=t.length,a=new Array(r);a[0]=d;var u={};for(var s in o)hasOwnProperty.call(o,s)&&(u[s]=o[s]);u.originalType=e,u[p]="string"==typeof e?e:n,a[1]=u;for(var i=2;i<r;i++)a[i]=t[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7028:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var l=t(45072),n=t(95656),r=(t(11504),t(95788)),a=["components"],u={id:"developing-a-cumulus-workflow",title:"Creating a Cumulus Workflow",hide_title:!1},s=void 0,i={unversionedId:"workflows/developing-a-cumulus-workflow",id:"version-v17.0.0/workflows/developing-a-cumulus-workflow",title:"Creating a Cumulus Workflow",description:"The Cumulus workflow module",source:"@site/versioned_docs/version-v17.0.0/workflows/developing-a-cumulus-workflow.md",sourceDirName:"workflows",slug:"/workflows/developing-a-cumulus-workflow",permalink:"/cumulus/docs/v17.0.0/workflows/developing-a-cumulus-workflow",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1692022753,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"developing-a-cumulus-workflow",title:"Creating a Cumulus Workflow",hide_title:!1},sidebar:"docs",previous:{title:"Development",permalink:"/cumulus/docs/v17.0.0/category/development"},next:{title:"Developing Workflow Tasks",permalink:"/cumulus/docs/v17.0.0/workflows/developing-workflow-tasks"}},m={},p=[{value:"The Cumulus workflow module",id:"the-cumulus-workflow-module",level:2},{value:"Adding a new Cumulus workflow to your deployment",id:"adding-a-new-cumulus-workflow-to-your-deployment",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function f(e){var o=e.components,t=(0,n.c)(e,a);return(0,r.yg)(d,(0,l.c)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"the-cumulus-workflow-module"},"The Cumulus workflow module"),(0,r.yg)("p",null,"To facilitate adding a workflows to your deployment Cumulus provides a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/workflow"},"workflow module"),"."),(0,r.yg)("p",null,"In combination with the ",(0,r.yg)("a",{parentName:"p",href:"cumulus-task-message-flow"},"Cumulus message"),", the workflow module provides a way to easily turn a Step Function definition into a Cumulus workflow, complete with:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cloudwatch/index.html"},"AWS CloudWatch events")," that handle database updates for Cumulus objects (e.g. ",(0,r.yg)("inlineCode",{parentName:"li"},"executions"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"granules"),", etc)"),(0,r.yg)("li",{parentName:"ul"},"Built-in integration with our ",(0,r.yg)("a",{parentName:"li",href:"../data-cookbooks/throttling-queued-executions"},"throttling")," feature")),(0,r.yg)("p",null,"Using the module also ensures that your workflows will continue to be compatible with future versions of Cumulus."),(0,r.yg)("p",null,"For more on the full set of current available options for the module, please consult the module ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/workflow/README.md"},"README"),"."),(0,r.yg)("h2",{id:"adding-a-new-cumulus-workflow-to-your-deployment"},"Adding a new Cumulus workflow to your deployment"),(0,r.yg)("p",null,"To add a new Cumulus workflow to your deployment that is using the ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus")," module, add a new workflow resource to your deployment directory, either in a new ",(0,r.yg)("inlineCode",{parentName:"p"},".tf")," file, or to an existing file."),(0,r.yg)("p",null,"The workflow should follow a syntax similar to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},'module "my_workflow" {\n  source = "https://github.com/nasa/cumulus/releases/download/vx.x.x/terraform-aws-cumulus-workflow.zip"\n\n  prefix = "my-prefix"\n  name   = "MyWorkflowName"\n  system_bucket = "my-internal-bucket"\n\n  workflow_config = module.cumulus.workflow_config\n\n  tags = { Deployment = var.prefix }\n\n  state_machine_definition = <<JSON\n{}\nJSON\n}\n')),(0,r.yg)("p",null,"In the above example, you would add your ",(0,r.yg)("inlineCode",{parentName:"p"},"state_machine_definition")," using the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html"},"Amazon States Language"),", using ",(0,r.yg)("a",{parentName:"p",href:"developing-workflow-tasks"},"tasks you've developed")," and ",(0,r.yg)("a",{parentName:"p",href:"../tasks"},"Cumulus core tasks")," that are made available as part of the ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus")," terraform module."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Cumulus follows the convention of tagging resources with the ",(0,r.yg)("inlineCode",{parentName:"p"},"prefix")," variable ",(0,r.yg)("inlineCode",{parentName:"p"},"{ Deployment = var.prefix }")," that you pass to the ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus")," module.   For resources defined outside of Core, it's recommended that you adopt this convention as it makes resources and/or deployment recovery scenarios much easier to manage.")),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"For a functional example of a basic workflow, please take a look at the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy/blob/master/cumulus-tf/hello_world_workflow.tf"},"hello_world_workflow"),"."),(0,r.yg)("p",null,"For more complete/advanced examples, please read the following cookbook entries/topics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../data-cookbooks/hello-world"},"HelloWorld workflow")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../data-cookbooks/sips-workflow"},"SIPS workflow")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../data-cookbooks/cnm-workflow"},"CNM workflow"))))}f.isMDXComponent=!0}}]);