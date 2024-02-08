"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[88752],{95788:(e,r,t)=>{t.d(r,{Iu:()=>s,yg:()=>c});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),g=o,c=d["".concat(u,".").concat(g)]||d[g]||m[g]||a;return t?n.createElement(c,i(i({ref:r},s),{},{components:t})):n.createElement(c,i({ref:r},s))}));function c(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},26284:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=t(45072),o=t(95656),a=(t(11504),t(95788)),i=["components"],p={id:"upgrade_tf_version_0.13.6",title:"Upgrade to TF version 0.13.6",hide_title:!1},u=void 0,l={unversionedId:"upgrade-notes/upgrade_tf_version_0.13.6",id:"version-v18.2.0/upgrade-notes/upgrade_tf_version_0.13.6",title:"Upgrade to TF version 0.13.6",description:"Background",source:"@site/versioned_docs/version-v18.2.0/upgrade-notes/upgrading-tf-version-0.13.6.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/upgrade_tf_version_0.13.6",permalink:"/cumulus/docs/upgrade-notes/upgrade_tf_version_0.13.6",draft:!1,tags:[],version:"v18.2.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1707330127,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{id:"upgrade_tf_version_0.13.6",title:"Upgrade to TF version 0.13.6",hide_title:!1},sidebar:"docs",previous:{title:"Migrate TEA deployment to standalone module",permalink:"/cumulus/docs/upgrade-notes/migrate_tea_standalone"},next:{title:"Upgrade to TF version 1.5.3",permalink:"/cumulus/docs/upgrade-notes/upgrade_tf_version_1.5.3"}},s={},d=[{value:"Background",id:"background",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Upgrade your deployment code",id:"upgrade-your-deployment-code",level:3},{value:"Upgrade your deployment",id:"upgrade-your-deployment",level:3}],m={toc:d},g="wrapper";function c(e){var r=e.components,t=(0,o.c)(e,i);return(0,a.yg)(g,(0,n.c)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"background"},"Background"),(0,a.yg)("p",null,"Cumulus pins its support to a specific version of Terraform ",(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/deployment/#install-terraform"},"see: deployment documentation"),". The reason for only supporting one specific Terraform version at a time is to avoid deployment errors than can be caused by deploying to the same target with different Terraform versions."),(0,a.yg)("p",null,"Cumulus is upgrading its supported version of Terraform from ",(0,a.yg)("strong",{parentName:"p"},"0.12.12")," to ",(0,a.yg)("strong",{parentName:"p"},"0.13.6"),". This document contains instructions on how to perform the upgrade for your deployments."),(0,a.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Follow the ",(0,a.yg)("a",{parentName:"li",href:"https://www.terraform.io/upgrade-guides/0-13.html#before-you-upgrade"},"Terraform guidance for what to do before upgrading"),", notably ensuring that you have no pending changes to your Cumulus deployments before proceeding.",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"You should do a ",(0,a.yg)("inlineCode",{parentName:"li"},"terraform plan")," to see if you have any pending changes for your deployment (for both the ",(0,a.yg)("inlineCode",{parentName:"li"},"data-persistence-tf")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"cumulus-tf")," modules), and if so, run a ",(0,a.yg)("inlineCode",{parentName:"li"},"terraform apply")," ",(0,a.yg)("strong",{parentName:"li"},"before doing the upgrade to Terraform 0.13.6")))),(0,a.yg)("li",{parentName:"ul"},"Review the ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform/blob/v0.13/CHANGELOG.md"},"Terraform v0.13 release notes")," to prepare for any breaking changes that may affect your custom deployment code. ",(0,a.yg)("strong",{parentName:"li"},"Cumulus' deployment code has already been updated for compatibility with version 0.13"),"."),(0,a.yg)("li",{parentName:"ul"},"Install Terraform version 0.13.6. We recommend using Terraform Version Manager ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/tfutils/tfenv"},"tfenv")," to manage your installed versons of Terraform, but this is not required.")),(0,a.yg)("h3",{id:"upgrade-your-deployment-code"},"Upgrade your deployment code"),(0,a.yg)("p",null,"Terraform 0.13 does not support some of the syntax from previous Terraform versions, so you need to upgrade your deployment code for compatibility."),(0,a.yg)("p",null,"Terraform provides a ",(0,a.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/commands/0.13upgrade.html"},(0,a.yg)("inlineCode",{parentName:"a"},"0.13upgrade")," command")," as part of version 0.13 to handle automatically upgrading your code. ",(0,a.yg)("strong",{parentName:"p"},"Make sure to check out the ",(0,a.yg)("a",{parentName:"strong",href:"https://www.terraform.io/docs/commands/0.13upgrade.html#batch-usage"},"documentation on batch usage of ",(0,a.yg)("inlineCode",{parentName:"a"},"0.13upgrade")),", which will allow you to upgrade all of your Terraform code with one command"),"."),(0,a.yg)("p",null,"Run the ",(0,a.yg)("inlineCode",{parentName:"p"},"0.13upgrade")," command until you have no more necessary updates to your deployment code."),(0,a.yg)("h3",{id:"upgrade-your-deployment"},"Upgrade your deployment"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Ensure that you are running Terraform 0.13.6 by running ",(0,a.yg)("inlineCode",{parentName:"p"},"terraform --version"),". If you are using ",(0,a.yg)("inlineCode",{parentName:"p"},"tfenv"),", you can switch versions by running ",(0,a.yg)("inlineCode",{parentName:"p"},"tfenv use 0.13.6"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"For the ",(0,a.yg)("inlineCode",{parentName:"p"},"data-persistence-tf")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"cumulus-tf")," directories, take the following steps:"),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"terraform init --reconfigure"),". The ",(0,a.yg)("inlineCode",{parentName:"p"},"--reconfigure")," flag is required, otherwise you might see an error like:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-text"},'Error: Failed to decode current backend config\n\nThe backend configuration created by the most recent run of "terraform init"\ncould not be decoded: unsupported attribute "lock_table". The configuration\nmay have been initialized by an earlier version that used an incompatible\nconfiguration structure. Run "terraform init -reconfigure" to force\nre-initialization of the backend.\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"terraform apply")," to perform a deployment."),(0,a.yg)("admonition",{parentName:"li",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Even if Terraform says that no resource changes are pending, running the ",(0,a.yg)("inlineCode",{parentName:"p"},"apply")," using Terraform version 0.13.6 will modify your backend state from version 0.12.12 to version 0.13.6 ",(0,a.yg)("strong",{parentName:"p"},"without requiring approval"),". Updating the backend state is a necessary part of the version 0.13.6 upgrade, but it is not completely transparent.")))))))}c.isMDXComponent=!0}}]);