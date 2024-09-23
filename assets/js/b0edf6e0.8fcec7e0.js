"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[9093],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>c});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,c=d["".concat(s,".").concat(m)]||d[m]||g[m]||o;return t?n.createElement(c,i(i({ref:r},l),{},{components:t})):n.createElement(c,i({ref:r},l))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43334:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var n=t(58168),a=t(98587),o=(t(96540),t(15680)),i=["components"],p={id:"upgrade_tf_version_1.5.3",title:"Upgrade to TF version 1.5.3",hide_title:!1},s=void 0,u={unversionedId:"upgrade-notes/upgrade_tf_version_1.5.3",id:"version-v18.3.4/upgrade-notes/upgrade_tf_version_1.5.3",title:"Upgrade to TF version 1.5.3",description:"Background",source:"@site/versioned_docs/version-v18.3.4/upgrade-notes/upgrading-tf-version-1.5.3.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/upgrade_tf_version_1.5.3",permalink:"/cumulus/docs/v18.3.4/upgrade-notes/upgrade_tf_version_1.5.3",draft:!1,tags:[],version:"v18.3.4",lastUpdatedBy:"Paul Pilone",lastUpdatedAt:1724864606,formattedLastUpdatedAt:"Aug 28, 2024",frontMatter:{id:"upgrade_tf_version_1.5.3",title:"Upgrade to TF version 1.5.3",hide_title:!1},sidebar:"docs",previous:{title:"Upgrade to TF version 0.13.6",permalink:"/cumulus/docs/v18.3.4/upgrade-notes/upgrade_tf_version_0.13.6"},next:{title:"Upgrade to RDS release",permalink:"/cumulus/docs/v18.3.4/upgrade-notes/upgrade-rds"}},l={},d=[{value:"Background",id:"background",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Upgrade your deployment",id:"upgrade-your-deployment",level:3}],g={toc:d},m="wrapper";function c(e){var r=e.components,t=(0,a.A)(e,i);return(0,o.yg)(m,(0,n.A)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"background"},"Background"),(0,o.yg)("p",null,"Cumulus pins its support to a specific version of Terraform ",(0,o.yg)("a",{parentName:"p",href:"/cumulus/docs/v18.3.4/deployment/#install-terraform"},"see: deployment documentation"),". The reason for only supporting one specific Terraform version at a time is to avoid deployment errors than can be caused by deploying to the same target with different Terraform versions  as a rollback to a previous Terraform version is not possible."),(0,o.yg)("p",null,"Cumulus is upgrading its supported version of Terraform from ",(0,o.yg)("strong",{parentName:"p"},"0.13.6")," to ",(0,o.yg)("strong",{parentName:"p"},"1.5.3"),". This document contains instructions on how to perform the upgrade for your deployments."),(0,o.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Follow the ",(0,o.yg)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/language/upgrade-guides"},"Terraform guidance for what to do before upgrading"),", notably ensuring that you have no pending changes to your Cumulus deployments before proceeding.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"You should do a ",(0,o.yg)("inlineCode",{parentName:"li"},"terraform plan")," to see if you have any pending changes for your deployment (for the ",(0,o.yg)("inlineCode",{parentName:"li"},"data-persistence-tf"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"cumulus-tf")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"rds-cluster-tf")," modules), and if so, run a ",(0,o.yg)("inlineCode",{parentName:"li"},"terraform apply")," ",(0,o.yg)("strong",{parentName:"li"},"before doing the upgrade to Terraform 1.5.3")))),(0,o.yg)("li",{parentName:"ul"},"Review the ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform/blob/v1.5/CHANGELOG.md"},"Terraform v1.5 release notes")," to prepare for any breaking changes that may affect your custom deployment code. ",(0,o.yg)("strong",{parentName:"li"},"Cumulus' deployment code has already been updated for compatibility with version 1.5"),"."),(0,o.yg)("li",{parentName:"ul"},"Install Terraform version 1.5.3. We recommend using Terraform Version Manager ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/tfutils/tfenv"},"tfenv")," to manage your installed versons of Terraform, but this is not required.")),(0,o.yg)("h3",{id:"upgrade-your-deployment"},"Upgrade your deployment"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Ensure that you are running Terraform 1.5.3 by running ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform --version"),". If you are using ",(0,o.yg)("inlineCode",{parentName:"p"},"tfenv"),", you can switch versions by running ",(0,o.yg)("inlineCode",{parentName:"p"},"tfenv use 1.5.3"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"For the ",(0,o.yg)("inlineCode",{parentName:"p"},"data-persistence-tf")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus-tf")," directories (and ",(0,o.yg)("inlineCode",{parentName:"p"},"rds-cluster-tf")," if neccessary), take the following steps:"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform init --reconfigure"),". The ",(0,o.yg)("inlineCode",{parentName:"p"},"--reconfigure")," flag is required, otherwise you might see an error like:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-text"},'Error: Failed to decode current backend config\n\nThe backend configuration created by the most recent run of "terraform init"\ncould not be decoded: unsupported attribute "lock_table". The configuration\nmay have been initialized by an earlier version that used an incompatible\nconfiguration structure. Run "terraform init -reconfigure" to force\nre-initialization of the backend.\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform apply")," to perform a deployment."),(0,o.yg)("admonition",{parentName:"li",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Even if Terraform says that no resource changes are pending, running the ",(0,o.yg)("inlineCode",{parentName:"p"},"apply")," using Terraform version 1.5.3 will modify your backend state from version 0.13.6 to version 1.5.3 ",(0,o.yg)("strong",{parentName:"p"},"without requiring approval"),". Updating the backend state is a necessary part of the version 1.5.3 upgrade, but it is not completely transparent.")))))))}c.isMDXComponent=!0}}]);