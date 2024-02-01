"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[79908],{95788:(e,t,r)=>{r.d(t,{Iu:()=>g,yg:()=>c});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=i(r),y=a,c=p["".concat(u,".").concat(y)]||p[y]||m[y]||o;return r?n.createElement(c,l(l({ref:t},g),{},{components:r})):n.createElement(c,l({ref:t},g))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(45072),a=r(95656),o=(r(11504),r(95788)),l=["components"],s={id:"faqs",title:"Frequently Asked Questions",hide_title:!1},u=void 0,i={unversionedId:"faqs",id:"version-v9.0.0/faqs",title:"Frequently Asked Questions",description:"Below are some commonly asked questions that you may encounter that can assist you along the way when working with Cumulus.",source:"@site/versioned_docs/version-v9.0.0/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/cumulus/docs/v9.0.0/faqs",draft:!1,tags:[],version:"v9.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"faqs",title:"Frequently Asked Questions",hide_title:!1},sidebar:"docs",previous:{title:"Glossary",permalink:"/cumulus/docs/v9.0.0/glossary"},next:{title:"Architecture",permalink:"/cumulus/docs/v9.0.0/architecture"}},g={},p=[{value:"General",id:"general",level:3},{value:"Integrators &amp; Developers",id:"integrators--developers",level:3},{value:"Operators",id:"operators",level:3}],m={toc:p},y="wrapper";function c(e){var t=e.components,r=(0,a.c)(e,l);return(0,o.yg)(y,(0,n.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Below are some commonly asked questions that you may encounter that can assist you along the way when working with Cumulus."),(0,o.yg)("h3",{id:"general"},"General"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"How do I deploy a new instance in Cumulus?"),(0,o.yg)("p",null,"  Answer: For steps on the Cumulus deployment process go to ",(0,o.yg)("a",{parentName:"p",href:"deployment"},"How to Deploy Cumulus"),".")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What prerequisites are needed to setup Cumulus?"),(0,o.yg)("p",null,"  Answer: You will need access to the AWS console and an ",(0,o.yg)("a",{parentName:"p",href:"https://urs.earthdata.nasa.gov/"},"Earthdata login")," before you can deploy Cumulus.")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is the preferred web browser for the Cumulus environment?"),(0,o.yg)("p",null,"  Answer: Our preferred web browser is the latest version of ",(0,o.yg)("a",{parentName:"p",href:"https://www.google.com/chrome/"},"Google Chrome"),".")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"How do I quickly troubleshoot an issue in Cumulus?"),(0,o.yg)("p",null,"  Answer: To troubleshoot and fix issues in Cumulus reference our recommended solutions in ",(0,o.yg)("a",{parentName:"p",href:"troubleshooting"},"Troubleshooting Cumulus"),".")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Where can I get support help?"),(0,o.yg)("p",null,"  Answer: The following options are available for assistance:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Cumulus: Outside NASA users should file a GitHub issue and inside NASA users should file a JIRA issue."),(0,o.yg)("li",{parentName:"ul"},"AWS: You can create a case in the ",(0,o.yg)("a",{parentName:"li",href:"https://console.aws.amazon.com/support/home"},"AWS Support Center"),", accessible via your AWS Console."))),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"integrators--developers"},"Integrators & Developers"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is a Cumulus integrator?"),(0,o.yg)("p",null,"  Answer: Those who are working within Cumulus and AWS for deployments and to manage workflows. They may perform the following functions:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Configure and deploy Cumulus to the AWS environment"),(0,o.yg)("li",{parentName:"ul"},"Configure Cumulus workflows"),(0,o.yg)("li",{parentName:"ul"},"Write custom workflow tasks"))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What are the steps if I run into an issue during deployment?"),(0,o.yg)("p",null,"  Answer: If you encounter an issue with your deployment go to the ",(0,o.yg)("a",{parentName:"p",href:"../troubleshooting/troubleshooting-deployment"},"Troubleshooting Deployment")," guide.")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is a Cumulus workflow?"),(0,o.yg)("p",null,"  Answer: A workflow is a provider-configured set of steps that describe the process to ingest data. Workflows are defined using\xa0",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/index.html"},"AWS Step Functions"),". For more details, we suggest visiting\xa0",(0,o.yg)("a",{parentName:"p",href:"workflows"},"here"),".")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"How do I set up a Cumulus workflow?"),(0,o.yg)("p",null,"  Answer: You will need to create a provider, have an associated collection (add a new one), and generate a new rule first. Then you can set up a Cumulus workflow by following these steps ",(0,o.yg)("a",{parentName:"p",href:"workflows/developing-a-cumulus-workflow"},"here"),".")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What are the common use cases that a Cumulus integrator encounters?"),(0,o.yg)("p",null,"  Answer: The following are some examples of possible use cases you may see:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"configuration/data-management-types"},"Creating Cumulus Data Management Types")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"integrator-guide/workflow-add-new-lambda"},"Workflow: Add New Lambda")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"integrator-guide/workflow-ts-failed-step"},"Workflow: Troubleshoot Failed Step(s)")))),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"operators"},"Operators"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is a Cumulus operator?"),(0,o.yg)("p",null,"  Answer: Those that ingests, archives, and troubleshoots datasets (called collections in Cumulus). Your daily activities might include but not limited to the following:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Ingesting datasets"),(0,o.yg)("li",{parentName:"ul"},"Maintaining historical data ingest"),(0,o.yg)("li",{parentName:"ul"},"Starting and stopping data handlers"),(0,o.yg)("li",{parentName:"ul"},"Managing collections"),(0,o.yg)("li",{parentName:"ul"},"Managing provider definitions"),(0,o.yg)("li",{parentName:"ul"},"Creating, enabling, and disabling rules"),(0,o.yg)("li",{parentName:"ul"},"Investigating errors for granules and deleting or re-ingesting granules"),(0,o.yg)("li",{parentName:"ul"},"Investigating errors in executions and isolating failed workflow step(s)"))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What are the common use cases that a Cumulus operator encounters?"),(0,o.yg)("p",null,"  Answer: The following are some examples of possible use cases you may see:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"operator-docs/kinesis-stream-for-ingest"},"Kinesis Stream For Ingest")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"operator-docs/create-rule-in-cumulus"},"Create Rule In Cumulus")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"operator-docs/granule-workflows"},"Granule Workflows")))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Can you re-run a workflow execution in AWS?"),(0,o.yg)("p",null,"  Answer: Yes. For steps on how to re-run a workflow execution go to ",(0,o.yg)("a",{parentName:"p",href:"troubleshooting/rerunning-workflow-executions"},"Re-running workflow executions")," in the ",(0,o.yg)("a",{parentName:"p",href:"operator-docs/about-operator-docs"},"Cumulus Operator Docs"),".")))}c.isMDXComponent=!0}}]);