"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[75030],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>c});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),g=a,c=m["".concat(l,".").concat(g)]||m[g]||d[g]||o;return r?n.createElement(c,i(i({ref:t},p),{},{components:r})):n.createElement(c,i({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},30562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=r(58168),a=r(98587),o=(r(96540),r(15680)),i=["components"],s={id:"upgrade-readme",title:"Upgrading Cumulus",hide_title:!1},l=void 0,u={unversionedId:"deployment/upgrade-readme",id:"version-v15.0.2/deployment/upgrade-readme",title:"Upgrading Cumulus",description:"After the initial deployment, any future updates to the Cumulus deployment from configuration files, Terraform files (*.tf), or modules from a new version of Cumulus can be deployed and will update the appropriate portions of the stack as needed.",source:"@site/versioned_docs/version-v15.0.2/deployment/upgrade.md",sourceDirName:"deployment",slug:"/deployment/upgrade-readme",permalink:"/cumulus/docs/v15.0.2/deployment/upgrade-readme",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"upgrade-readme",title:"Upgrading Cumulus",hide_title:!1},sidebar:"docs",previous:{title:"Configure Cloudwatch Logs Delivery",permalink:"/cumulus/docs/v15.0.2/deployment/cloudwatch-logs-delivery"},next:{title:"Cumulus Data Management Types",permalink:"/cumulus/docs/v15.0.2/configuration/data-management-types"}},p={},m=[{value:"Cumulus Versioning",id:"cumulus-versioning",level:2},{value:"Migrating to a New Version",id:"migrating-to-a-new-version",level:2},{value:"Updating Cumulus Version",id:"updating-cumulus-version",level:2},{value:"Update Data Persistence Resources",id:"update-data-persistence-resources",level:2},{value:"Update Cumulus Resources",id:"update-cumulus-resources",level:2},{value:"Update Cumulus Dashboard",id:"update-cumulus-dashboard",level:2}],d={toc:m},g="wrapper";function c(e){var t=e.components,r=(0,a.A)(e,i);return(0,o.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"After the initial deployment, any future updates to the Cumulus deployment from configuration files, Terraform files (",(0,o.yg)("inlineCode",{parentName:"p"},"*.tf"),"), or modules from a new version of Cumulus can be deployed and will update the appropriate portions of the stack as needed."),(0,o.yg)("h2",{id:"cumulus-versioning"},"Cumulus Versioning"),(0,o.yg)("p",null,"Cumulus uses a global versioning approach, meaning version numbers are consistent across all Terraform modules, and semantic versioning to track major, minor, and patch version (e.g., 1.0.0)."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"IMPORTANT:")," By convention, Cumulus minor version releases introduce breaking changes (e.g., 1.13.x -> 1.14.0), so it is critical that you consult the release notes for migration steps.  Carefully read each BREAKING CHANGES and MIGRATION STEPS sections within the ",(0,o.yg)("inlineCode",{parentName:"p"},"CHANGELOG.md")," file, following all steps, starting with the oldest release after your currently installed release, and progressing through them chronologically.")),(0,o.yg)("p",null,"To view the released module artifacts for each Cumulus Core version, see the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"Cumulus Releases")," page."),(0,o.yg)("h2",{id:"migrating-to-a-new-version"},"Migrating to a New Version"),(0,o.yg)("p",null,"When breaking changes have been introduced, the Cumulus Core team will publish instructions on migrating from one version to another.  Detailed release notes with migration instructions (if any) for each release can be found on the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"Cumulus Releases")," page."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Use consistent Cumulus versions:")," All Terraform modules must be updated to the same Cumulus version number (see below). In addition, your workflow Lambdas that utilize published Cumulus Core npm modules should always match your deployed Cumulus version to ensure compatibility. ",(0,o.yg)("strong",{parentName:"li"},"Check the CHANGELOG for deprecation/breaking change notices.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Follow all intervening steps:")," When skipping over versions, you ",(0,o.yg)("strong",{parentName:"li"},"must perform all intervening migration steps"),".  For example, if going from version 1.1.0 to 1.3.0, upgrade from 1.1.0 to 1.2.0 and then to 1.3.0.  This is critical because each release that contains migration steps provide instructions ",(0,o.yg)("em",{parentName:"li"},"only")," for migrating from the ",(0,o.yg)("em",{parentName:"li"},"immediately")," previous release, but you must follow ",(0,o.yg)("em",{parentName:"li"},"all")," migration steps between your currently installed release and ",(0,o.yg)("em",{parentName:"li"},"every release")," through the release that you wish to migrate to."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Migrate lower environments first:"),' Migrate your "lowest" environment first and test it to ensure correctness before performing migration steps in each successively higher environment.  For example, update Sandbox, then UAT, then SIT, and finally Prod.'),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Conduct smoke tests:")," In each environment, perform smoke tests that give you confidence that the upgrade was successful, prior to moving on to the next environment. Since deployments can vary widely, it is up to you to determine tests that might be specific to your deployment, but here are some general tests you might wish to perform:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Confirm the Cumulus API is running and reachable by hitting the ",(0,o.yg)("inlineCode",{parentName:"li"},"/version")," endpoint"),(0,o.yg)("li",{parentName:"ul"},"Run a workflow and confirm its operation (taking care in Production)"),(0,o.yg)("li",{parentName:"ul"},"Confirm distribution works"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Migrate during appropriate times:")," Choose a time to migrate when support is more likely to be available in case you encounter problems, such as when you are most likely to be able to obtain support relatively promptly.  Prefer earlier in the week over later in the week (particularly avoiding Fridays, if possible).")),(0,o.yg)("h2",{id:"updating-cumulus-version"},"Updating Cumulus Version"),(0,o.yg)("p",null,"To update your Cumulus version:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Find the desired release on the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"Cumulus Releases")," page")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Update the ",(0,o.yg)("inlineCode",{parentName:"p"},"source")," in your Terraform deployment files ",(0,o.yg)("strong",{parentName:"p"},"for each of ",(0,o.yg)("a",{parentName:"strong",href:"/cumulus/docs/v15.0.2/deployment/components#available-cumulus-components"},"your Cumulus components"))," by replacing ",(0,o.yg)("inlineCode",{parentName:"p"},"vx.x.x")," with the desired version of Cumulus.  For example, here's the\nentry from the ",(0,o.yg)("inlineCode",{parentName:"p"},"data-persistence")," module:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'`source = "https://github.com/nasa/cumulus/releases/download/vx.x.x/terraform.zip//tf-modules/data-persistence"`\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"terraform init")," to get the latest copies of your updated modules"))),(0,o.yg)("h2",{id:"update-data-persistence-resources"},"Update Data Persistence Resources"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Reminder:")," Remember to ",(0,o.yg)("a",{parentName:"p",href:"/cumulus/docs/v15.0.2/deployment/#initialize-terraform"},"initialize Terraform"),", if necessary."),(0,o.yg)("p",null,"From the directory of your ",(0,o.yg)("inlineCode",{parentName:"p"},"data-persistence")," deployment module (e.g., ",(0,o.yg)("inlineCode",{parentName:"p"},"data-persistence-tf"),"):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ AWS_REGION=<region> \\ # e.g. us-east-1\n    AWS_PROFILE=<profile> \\\n    terraform apply\n")),(0,o.yg)("h2",{id:"update-cumulus-resources"},"Update Cumulus Resources"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Reminder:")," Remember to ",(0,o.yg)("a",{parentName:"p",href:"/cumulus/docs/v15.0.2/deployment/#initialize-terraform"},"initialize Terraform"),", if necessary."),(0,o.yg)("p",null,"From the directory of your ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus")," deployment module (e.g., ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus-tf"),"):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ AWS_REGION=<region> \\ # e.g. us-east-1\n    AWS_PROFILE=<profile> \\\n    terraform apply\n")),(0,o.yg)("p",null,"Once you have successfully updated all of your resources, verify that your\ndeployment functions correctly. Please refer to some recommended smoke tests\ngiven ",(0,o.yg)("a",{parentName:"p",href:"#migrating-to-a-new-version"},"above"),", and consider additional tests appropriate for your particular\ndeployment and environment."),(0,o.yg)("h2",{id:"update-cumulus-dashboard"},"Update Cumulus Dashboard"),(0,o.yg)("p",null,"If there are breaking (or otherwise significant) changes to the Cumulus API, you should also upgrade your ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-dashboard"},"Cumulus Dashboard")," deployment to use the version of the Cumulus API matching the version of Cumulus to which you are migrating."))}c.isMDXComponent=!0}}]);