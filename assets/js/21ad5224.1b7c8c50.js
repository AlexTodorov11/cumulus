"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[40836],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,f=p["".concat(i,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var n=r(58168),a=r(98587),o=(r(96540),r(15680)),l=["components"],s={id:"components",title:"Component-based Cumulus Deployment",hide_title:!1},i=void 0,m={unversionedId:"deployment/components",id:"version-v10.1.0/deployment/components",title:"Component-based Cumulus Deployment",description:"Cumulus is now released in a modular architecture, which will allow users to",source:"@site/versioned_docs/version-v10.1.0/deployment/components.md",sourceDirName:"deployment",slug:"/deployment/components",permalink:"/cumulus/docs/v10.1.0/deployment/components",draft:!1,tags:[],version:"v10.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"components",title:"Component-based Cumulus Deployment",hide_title:!1},sidebar:"docs",previous:{title:"PostgreSQL Database Deployment",permalink:"/cumulus/docs/v10.1.0/deployment/postgres_database_deployment"},next:{title:"Using the Thin Egress App for Cumulus distribution",permalink:"/cumulus/docs/v10.1.0/deployment/thin_egress_app"}},u={},p=[{value:"Available Cumulus Components",id:"available-cumulus-components",level:2},{value:"Adding components to your Terraform deployment",id:"adding-components-to-your-terraform-deployment",level:2},{value:"Remote State",id:"remote-state",level:2}],c={toc:p},d="wrapper";function f(e){var t=e.components,r=(0,a.A)(e,l);return(0,o.yg)(d,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Cumulus is now released in a modular architecture, which will allow users to\npick and choose the individual components that they want to deploy. These\ncomponents will be made available as ",(0,o.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/modules/index.html"},"Terraform modules"),"."),(0,o.yg)("p",null,"Cumulus users will be able to add those individual components to their\ndeployment and link them together using Terraform. In addition, users will be\nable to make use of the large number of publicly available modules on the ",(0,o.yg)("a",{parentName:"p",href:"https://registry.terraform.io/"},"Terraform Module Registry"),"."),(0,o.yg)("h2",{id:"available-cumulus-components"},"Available Cumulus Components"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/cumulus"},"Cumulus")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/data-persistence"},"Data persistence")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/cumulus-ecs-service"},"ECS service")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/distribution"},"Distribution")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"./thin_egress_app"},"Thin Egress App")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"./cumulus_distribution"},"Cumulus Distribution App")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/workflow"},"Workflow"))),(0,o.yg)("h2",{id:"adding-components-to-your-terraform-deployment"},"Adding components to your Terraform deployment"),(0,o.yg)("p",null,"Although Terraform components can be configured using a single file, it is recommended to\nadd the following files to your deployment:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"variables.tf")," - ",(0,o.yg)("a",{parentName:"li",href:"https://www.terraform.io/docs/configuration/variables.html"},"input variables"),"\nused in your Terraform configuration"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"main.tf")," - the contents of your deployment, mostly made up of\n",(0,o.yg)("a",{parentName:"li",href:"https://www.terraform.io/docs/configuration/modules.html#calling-a-child-module"},"module"),"\nstatements and a\n",(0,o.yg)("a",{parentName:"li",href:"https://www.terraform.io/docs/configuration/providers.html#provider-configuration"},"provider configuration block"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"outputs.tf")," - any ",(0,o.yg)("a",{parentName:"li",href:"https://www.terraform.io/docs/configuration/outputs.html"},"output values"),"\nto be returned by your deployment"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"terraform.tf")," - contains ",(0,o.yg)("a",{parentName:"li",href:"#remote-state"},"remote state")," configuration, and\nany other configuration of Terraform itself"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"terraform.tfvars")," -\n",(0,o.yg)("a",{parentName:"li",href:"https://www.terraform.io/docs/configuration/variables.html#variable-definitions-tfvars-files"},"variable definitions"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"variables.tf"),", ",(0,o.yg)("strong",{parentName:"p"},"main.tf"),", and ",(0,o.yg)("strong",{parentName:"p"},"outputs.tf")," should be stored in version\ncontrol, as they will be constant no matter what environment you are deploying\nto."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"terraform.tfvars")," is going to contain environment-specific (and possibly\nsensitive) values, so it should be added to ",(0,o.yg)("strong",{parentName:"p"},".gitignore"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"terraform.tf")," is home to your\n",(0,o.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/configuration/terraform.html"},"Terraform-specific settings"),".\nThis file will contain environment-specific values, so it should be added to\n",(0,o.yg)("strong",{parentName:"p"},".gitignore"),". Unfortunately, ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform")," blocks\n",(0,o.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/configuration/terraform.html#terraform-block-syntax"},"can only contain constant values"),";\nthey cannot reference variables defined in ",(0,o.yg)("strong",{parentName:"p"},"terraform.tfvars"),"."),(0,o.yg)("p",null,"An example of using Terraform to deploy components can be found in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/example"},(0,o.yg)("inlineCode",{parentName:"a"},"example")," directory"),"\nof the Cumulus repo."),(0,o.yg)("h2",{id:"remote-state"},"Remote State"),(0,o.yg)("p",null,"From Terraform's ",(0,o.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/state/remote.html"},"Remote State"),"\ndocumentation:"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"By default, Terraform stores state locally in a file named ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform.tfstate"),".\nWhen working with Terraform in a team, use of a local file makes Terraform\nusage complicated because each user must make sure they always have the latest\nstate data before running Terraform and make sure that nobody else runs\nTerraform at the same time."),(0,o.yg)("p",{parentName:"blockquote"},"With remote state, Terraform writes the state data to a remote data store,\nwhich can then be shared between all members of a team.")),(0,o.yg)("p",null,"The recommended approach for handling remote state with Cumulus is to use the ",(0,o.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/backends/types/s3.html"},"S3 backend"),".\nThis backend stores state in S3 and uses a DynamoDB table for locking."),(0,o.yg)("p",null,"See the deployment documentation for a ",(0,o.yg)("a",{parentName:"p",href:"/cumulus/docs/v10.1.0/#create-resources-for-terraform-state"},"walk-through of creating resources for your remote state using an S3 backend"),"."))}f.isMDXComponent=!0}}]);