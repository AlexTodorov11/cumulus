"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[63905],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>c});var r=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)o=u[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)o=u[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),d=i(o),m=a,c=d["".concat(s,".").concat(m)]||d[m]||g[m]||u;return o?r.createElement(c,l(l({ref:t},p),{},{components:o})):r.createElement(c,l({ref:t},p))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=o.length,l=new Array(u);l[0]=m;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[d]="string"==typeof e?e:a,l[1]=n;for(var i=2;i<u;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},28361:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=o(58168),a=o(98587),u=(o(96540),o(15680)),l=["components"],n={id:"getting-started",title:"Getting Started",hide_title:!1},s=void 0,i={unversionedId:"getting-started",id:"version-v18.4.0/getting-started",title:"Getting Started",description:"Overview | Quick Tutorials | Helpful Tips",source:"@site/versioned_docs/version-v18.4.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/cumulus/docs/getting-started",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"getting-started",title:"Getting Started",hide_title:!1},sidebar:"docs",previous:{title:"Introduction",permalink:"/cumulus/docs/"},next:{title:"Glossary",permalink:"/cumulus/docs/glossary"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"What is Cumulus",id:"what-is-cumulus",level:3},{value:"Who uses Cumulus",id:"who-uses-cumulus",level:3},{value:"Cumulus Roles",id:"cumulus-roles",level:3},{value:"Integrator/Developer",id:"integratordeveloper",level:4},{value:"Operator",id:"operator",level:4},{value:"Role Guides",id:"role-guides",level:4},{value:"What is a Cumulus Data Type",id:"what-is-a-cumulus-data-type",level:3},{value:"Quick Tutorials",id:"quick-tutorials",level:2},{value:"Deployment &amp; Configuration",id:"deployment--configuration",level:3},{value:"1. Set up Git Secrets",id:"1-set-up-git-secrets",level:3},{value:"2. Deploy Cumulus Core and Cumulus Dashboard to AWS",id:"2-deploy-cumulus-core-and-cumulus-dashboard-to-aws",level:3},{value:"3. Configure and Run the HelloWorld Workflow",id:"3-configure-and-run-the-helloworld-workflow",level:3},{value:"4. Configure a Custom Workflow",id:"4-configure-a-custom-workflow",level:3},{value:"Helpful Tips",id:"helpful-tips",level:2},{value:"Integrator/Developer",id:"integratordeveloper-1",level:3},{value:"Operator",id:"operator-1",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Resources",id:"resources",level:3}],g={toc:d},m="wrapper";function c(e){var t=e.components,o=(0,a.A)(e,l);return(0,u.yg)(m,(0,r.A)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,u.yg)("p",null,(0,u.yg)("a",{parentName:"p",href:"#overview"},"Overview")," | ",(0,u.yg)("a",{parentName:"p",href:"#quick-tutorials"},"Quick Tutorials")," | ",(0,u.yg)("a",{parentName:"p",href:"#helpful-tips"},"Helpful Tips")),(0,u.yg)("h2",{id:"overview"},"Overview"),(0,u.yg)("p",null,"This serves as a guide for new Cumulus users to deploy and learn how to use Cumulus. Here you will learn what you need in order to complete any prerequisites, what Cumulus is and how it works, and how to successfully navigate and deploy a Cumulus environment."),(0,u.yg)("h3",{id:"what-is-cumulus"},"What is Cumulus"),(0,u.yg)("p",null,"Cumulus is an open source set of components for creating cloud-based data ingest, archive, distribution and management designed for NASA's future Earth Science data streams."),(0,u.yg)("h3",{id:"who-uses-cumulus"},"Who uses Cumulus"),(0,u.yg)("p",null,"Data integrators/developers and operators across projects not limited to NASA use Cumulus for their daily work functions."),(0,u.yg)("h3",{id:"cumulus-roles"},"Cumulus Roles"),(0,u.yg)("h4",{id:"integratordeveloper"},"Integrator/Developer"),(0,u.yg)("p",null,"Cumulus integrators/developers are those who work within Cumulus and AWS for deployments and to manage workflows."),(0,u.yg)("h4",{id:"operator"},"Operator"),(0,u.yg)("p",null,"Cumulus operators are those who work within Cumulus to ingest/archive data and manage collections."),(0,u.yg)("h4",{id:"role-guides"},"Role Guides"),(0,u.yg)("p",null,"As a developer, integrator, or operator, you will need to set up your environments to work in Cumulus. The following docs can get you started in your role specific activities."),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("a",{parentName:"li",href:"https://wiki.earthdata.nasa.gov/display/CUMULUS/Cumulus+Developer+Onboarding+Overview"},"Developers")," - Cumulus Team Dev"),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("a",{parentName:"li",href:"integrator-guide/about-int-guide"},"Integrators")),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("a",{parentName:"li",href:"operator-docs/about-operator-docs"},"Operators"))),(0,u.yg)("h3",{id:"what-is-a-cumulus-data-type"},"What is a Cumulus Data Type"),(0,u.yg)("p",null,"In Cumulus, we have the following types of data that you can create and manage:"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},"Collections"),(0,u.yg)("li",{parentName:"ul"},"Granules"),(0,u.yg)("li",{parentName:"ul"},"Providers"),(0,u.yg)("li",{parentName:"ul"},"Rules"),(0,u.yg)("li",{parentName:"ul"},"Workflows"),(0,u.yg)("li",{parentName:"ul"},"Executions"),(0,u.yg)("li",{parentName:"ul"},"Reports")),(0,u.yg)("p",null,"For details on how to create or manage data types go to ",(0,u.yg)("a",{parentName:"p",href:"configuration/data-management-types"},"Data Management Types"),"."),(0,u.yg)("hr",null),(0,u.yg)("h2",{id:"quick-tutorials"},"Quick Tutorials"),(0,u.yg)("h3",{id:"deployment--configuration"},"Deployment & Configuration"),(0,u.yg)("p",null,"Cumulus is deployed to an AWS account, so you must have access to deploy resources to an AWS account to get started."),(0,u.yg)("h3",{id:"1-set-up-git-secrets"},"1. Set up Git Secrets"),(0,u.yg)("p",null,"To ensure your AWS access keys and passwords are protected as you submit commits we recommend setting up ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/awslabs/git-secrets"},"Git Secrets"),"."),(0,u.yg)("h3",{id:"2-deploy-cumulus-core-and-cumulus-dashboard-to-aws"},"2. Deploy Cumulus Core and Cumulus Dashboard to AWS"),(0,u.yg)("p",null,"Follow the ",(0,u.yg)("a",{parentName:"p",href:"deployment"},"deployment instructions")," to deploy Cumulus to your AWS account."),(0,u.yg)("h3",{id:"3-configure-and-run-the-helloworld-workflow"},"3. Configure and Run the HelloWorld Workflow"),(0,u.yg)("p",null,"If you have deployed using the ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy"},"cumulus-template-deploy repository"),", you have a ",(0,u.yg)("inlineCode",{parentName:"p"},"HelloWorld")," workflow deployed to your Cumulus backend."),(0,u.yg)("p",null,"You can see your deployed workflows on the ",(0,u.yg)("inlineCode",{parentName:"p"},"Workflows")," page of your Cumulus dashboard."),(0,u.yg)("p",null,"Configure a collection and provider using the ",(0,u.yg)("a",{parentName:"p",href:"data-cookbooks/about-cookbooks#setup"},"setup guidance")," on the Cumulus dashboard."),(0,u.yg)("p",null,"Then ",(0,u.yg)("a",{parentName:"p",href:"operator-docs/create-rule-in-cumulus"},"create a rule")," to trigger your HelloWorld workflow. You can select a rule type of ",(0,u.yg)("inlineCode",{parentName:"p"},"one time"),"."),(0,u.yg)("p",null,"Navigate to the ",(0,u.yg)("inlineCode",{parentName:"p"},"Executions")," page of the dashboard to check the status of your workflow execution."),(0,u.yg)("h3",{id:"4-configure-a-custom-workflow"},"4. Configure a Custom Workflow"),(0,u.yg)("p",null,"See ",(0,u.yg)("a",{parentName:"p",href:"workflows/developing-a-cumulus-workflow"},"Developing a custom workflow")," documentation for adding a new workflow to your deployment."),(0,u.yg)("p",null,"There are plenty of workflow examples using Cumulus tasks ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/example/cumulus-tf"},"here"),". The ",(0,u.yg)("a",{parentName:"p",href:"data-cookbooks/about-cookbooks"},"Data Cookbooks")," provide a more in-depth look at some of these more advanced workflows and their configurations."),(0,u.yg)("p",null,"There is a list of Cumulus tasks already included in your deployment ",(0,u.yg)("a",{parentName:"p",href:"tasks"},"here"),"."),(0,u.yg)("p",null,"After configuring your workflow and redeploying, you can configure and run your workflow using the same steps as in step 2."),(0,u.yg)("hr",null),(0,u.yg)("h2",{id:"helpful-tips"},"Helpful Tips"),(0,u.yg)("p",null,"Here are some useful tips to keep in mind when deploying or working in Cumulus."),(0,u.yg)("h3",{id:"integratordeveloper-1"},"Integrator/Developer"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/blob/master/docs/development/release.md"},"Versioning and Releases"),": This documentation gives information on our global versioning approach. We suggest upgrading to the supported version for Cumulus, Cumulus dashboard, and Thin Egress App (TEA)."),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus#cumulus-framework"},"Cumulus Developer Documentation"),": We suggest that you read through and reference this resource for development best practices in Cumulus."),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("a",{parentName:"li",href:"deployment"},"Cumulus Deployment"),": We will guide you on how to manually deploy a new instance of Cumulus. In this reference, you will learn how to install Terraform, create an AWS S3 bucket, configure a compatible database, and create a Lambda layer."),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("a",{parentName:"li",href:"deployment/terraform-best-practices"},"Terraform Best Practices"),": This will help guide you through your Terraform configuration and Cumulus deployment. For an introduction about Terraform, go to ",(0,u.yg)("a",{parentName:"li",href:"https://www.terraform.io/intro/index.html"},"Terraform's official site"),"."),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("a",{parentName:"li",href:"integrator-guide/int-common-use-cases"},"Integrator Common Use Cases"),": Scenarios to help integrators along in the Cumulus environment.")),(0,u.yg)("h3",{id:"operator-1"},"Operator"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("a",{parentName:"li",href:"operator-docs/ops-common-use-cases"},"Operator Common Use Cases"),": Scenarios to help operators along in the Cumulus environment.")),(0,u.yg)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,u.yg)("p",null,(0,u.yg)("a",{parentName:"p",href:"troubleshooting"},"Troubleshooting"),": Some suggestions to help you troubleshoot and solve issues you may encounter."),(0,u.yg)("h3",{id:"resources"},"Resources"),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},"Glossary - ",(0,u.yg)("a",{parentName:"li",href:"glossary"},"here")),(0,u.yg)("li",{parentName:"ul"},"FAQs - ",(0,u.yg)("a",{parentName:"li",href:"faqs"},"here"))))}c.isMDXComponent=!0}}]);