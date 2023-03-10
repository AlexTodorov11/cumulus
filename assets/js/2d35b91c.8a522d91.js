"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[80380],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},95464:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],s={id:"troubleshooting-deployment",title:"Troubleshooting Deployment",hide_title:!1},l=void 0,d={unversionedId:"troubleshooting/troubleshooting-deployment",id:"version-v12.0.0/troubleshooting/troubleshooting-deployment",title:"Troubleshooting Deployment",description:"This document provides 'notes' on frequently encountered deployment issues. The issues reported are organized by relevant subsection.",source:"@site/versioned_docs/version-v12.0.0/troubleshooting/troubleshoot_deployment.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/troubleshooting-deployment",permalink:"/cumulus/docs/v12.0.0/troubleshooting/troubleshooting-deployment",draft:!1,tags:[],version:"v12.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"troubleshooting-deployment",title:"Troubleshooting Deployment",hide_title:!1},sidebar:"docs",previous:{title:"How to Troubleshoot and Fix Issues",permalink:"/cumulus/docs/v12.0.0/troubleshooting/"},next:{title:"Re-running workflow executions",permalink:"/cumulus/docs/v12.0.0/troubleshooting/rerunning-workflow-executions"}},c={},u=[{value:"Terraform Logging",id:"terraform-logging",level:2},{value:"<code>terraform init</code>",id:"terraform-init",level:2},{value:"<code>Failed to get existing workspaces: AccessDenied: Access Denied</code>",id:"failed-to-get-existing-workspaces-accessdenied-access-denied",level:3},{value:"Deploying data persistence resources",id:"deploying-data-persistence-resources",level:2},{value:"<code>Invalid index: aws_elasticsearch_domain.es_vpc[0] is empty tuple</code>",id:"invalid-index-aws_elasticsearch_domaines_vpc0-is-empty-tuple",level:3},{value:"Deploying Cumulus",id:"deploying-cumulus",level:2},{value:"<code>The provided execution role does not have permissions to call SendMessage on SQS</code>",id:"the-provided-execution-role-does-not-have-permissions-to-call-sendmessage-on-sqs",level:3},{value:"<code>The provided execution role does not have permissions to call CreateNetworkInterface on EC2</code>",id:"the-provided-execution-role-does-not-have-permissions-to-call-createnetworkinterface-on-ec2",level:3},{value:"<code>ValidationException: You must specify exactly one subnet.</code> when deploying the data-persistence module",id:"validationexception-you-must-specify-exactly-one-subnet-when-deploying-the-data-persistence-module",level:3},{value:"Install dashboard",id:"install-dashboard",level:2},{value:"Dashboard configuration",id:"dashboard-configuration",level:3},{value:"Dashboard deployment",id:"dashboard-deployment",level:3}],p={toc:u},m="wrapper";function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document provides 'notes' on frequently encountered deployment issues. The issues reported are organized by relevant subsection."),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note:")," In order to reduce your risk of the corruption or loss of your\nTerraform state file, or otherwise corrupt your Cumulus deployment, please see\nthe ",(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/v12.0.0/deployment/terraform-best-practices"},"Terraform Best Practices")," guide."),(0,a.kt)("h2",{id:"terraform-logging"},"Terraform Logging"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TF_LOG")," environment variable can be set to help debug Terraform-specific issues. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/internals/debugging.html"},"Terraform debugging"),"."),(0,a.kt)("p",null,"For example ",(0,a.kt)("inlineCode",{parentName:"p"},"export TF_LOG=DEBUG")," will log verbose output from Terraform commands to help debug issues."),(0,a.kt)("h2",{id:"terraform-init"},(0,a.kt)("inlineCode",{parentName:"h2"},"terraform init")),(0,a.kt)("h3",{id:"failed-to-get-existing-workspaces-accessdenied-access-denied"},(0,a.kt)("inlineCode",{parentName:"h3"},"Failed to get existing workspaces: AccessDenied: Access Denied")),(0,a.kt)("p",null,"This is an issue accessing the remote configuration in your S3 bucket. You can check your access to the bucket via the CLI using ",(0,a.kt)("inlineCode",{parentName:"p"},"aws s3 ls <bucket-name>"),". If that works, Terraform may be looking at the incorrect bucket."),(0,a.kt)("p",null,"When switching between accounts, you may need to use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/commands/init.html#backend-initialization"},(0,a.kt)("inlineCode",{parentName:"a"},"-reconfigure"))," option and run ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform init -reconfigure"),"."),(0,a.kt)("h2",{id:"deploying-data-persistence-resources"},"Deploying data persistence resources"),(0,a.kt)("h3",{id:"invalid-index-aws_elasticsearch_domaines_vpc0-is-empty-tuple"},(0,a.kt)("inlineCode",{parentName:"h3"},"Invalid index: aws_elasticsearch_domain.es_vpc[0] is empty tuple")),(0,a.kt)("p",null,"You may see this error if the Elasticsearch domain tracked by your Terraform state cannot be found or no longer exists. This could happen if you have accidentally deleted your Elasticsearch domain, producing an error on your next ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply")," that looks something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},'Error: Invalid index\n\n  on ../../tf-modules/data-persistence/elasticsearch.tf line 144, in resource "aws_elasticsearch_domain_policy" "es_vpc_domain_policy":\n 144:       "Resource": "${aws_elasticsearch_domain.es_vpc[[0].arn}/*"\n    ----------------\n     aws_elasticsearch_domain.es_vpc[0] is empty tuple\n\nThe given key does not identify an element in this collection value.\n')),(0,a.kt)("p",null,"To resolve this issue, you need to manually remove the entry from your Terraform state referencing the missing resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ terraform state rm module.data_persistence.aws_elasticsearch_domain.es_vpc\nRemoved module.data_persistence.aws_elasticsearch_domain.es_vpc[0]\nSuccessfully removed 1 resource instance(s).\n")),(0,a.kt)("p",null,"After removing the entry from the Terraform state, ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply")," should work correctly."),(0,a.kt)("h2",{id:"deploying-cumulus"},"Deploying Cumulus"),(0,a.kt)("h3",{id:"the-provided-execution-role-does-not-have-permissions-to-call-sendmessage-on-sqs"},(0,a.kt)("inlineCode",{parentName:"h3"},"The provided execution role does not have permissions to call SendMessage on SQS")),(0,a.kt)("h3",{id:"the-provided-execution-role-does-not-have-permissions-to-call-createnetworkinterface-on-ec2"},(0,a.kt)("inlineCode",{parentName:"h3"},"The provided execution role does not have permissions to call CreateNetworkInterface on EC2")),(0,a.kt)("p",null,"You may see one or both of these error the first time you run ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply")," for your Cumulus deployment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cause:")," The Amazon service for managing roles and permissions, IAM, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency"},"is eventually consistent"),", meaning there can be a delay between when permission updates are applied and when they actually take effect. As a result, when doing a Terraform deployment the role permissions required for a resource may not have fully taken effect before Terraform attempts to create that resource, so the deployment fails."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution:")," Re-run ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply")," and the problem should not recur."),(0,a.kt)("h3",{id:"validationexception-you-must-specify-exactly-one-subnet-when-deploying-the-data-persistence-module"},(0,a.kt)("inlineCode",{parentName:"h3"},"ValidationException: You must specify exactly one subnet.")," when deploying the data-persistence module"),(0,a.kt)("p",null,"This can happen if you have multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"subnet_ids")," configured for your\n",(0,a.kt)("inlineCode",{parentName:"p"},"data-persistence")," modules, but your config is only creating one\nElasticsearch instance. To fix the issue, update the ",(0,a.kt)("inlineCode",{parentName:"p"},"elasticsearch_config"),"\nvariable for your ",(0,a.kt)("inlineCode",{parentName:"p"},"data-persistence")," module to increase the number of instances:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  domain_name    = "es"\n  instance_count = 2\n  instance_type  = "t2.small.elasticsearch"\n  version        = "5.3"\n  volume_size    = 10\n}\n')),(0,a.kt)("h2",{id:"install-dashboard"},"Install dashboard"),(0,a.kt)("h3",{id:"dashboard-configuration"},"Dashboard configuration"),(0,a.kt)("p",null,"Issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Problem clearing the cache: EACCES: permission denied, rmdir '/tmp/gulp-cache/default'"),'", this probably means the files at that location, and/or the folder, are owned by someone else (or some other factor prevents you from writing there).')),(0,a.kt)("p",null,"It's possible to workaround this by editing the file ",(0,a.kt)("inlineCode",{parentName:"p"},"cumulus-dashboard/node_modules/gulp-cache/index.js")," and alter the value of the line ",(0,a.kt)("inlineCode",{parentName:"p"},"var fileCache = new Cache({cacheDirName: 'gulp-cache'});")," to something like ",(0,a.kt)("inlineCode",{parentName:"p"},"var fileCache = new Cache({cacheDirName: '<prefix>-cache'});"),". Now gulp-cache will be able to write to ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/<prefix>-cache/default"),", and the error should resolve."),(0,a.kt)("h3",{id:"dashboard-deployment"},"Dashboard deployment"),(0,a.kt)("p",null,"Issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the dashboard sends you to an Earthdata Login page that has an error reading ",(0,a.kt)("strong",{parentName:"li"},'"Invalid request, please verify the client status or redirect_uri before resubmitting"'),', this means you\'ve either forgotten to update one or more of your EARTHDATA_CLIENT_ID, EARTHDATA_CLIENT_PASSWORD environment variables (from your app/.env file) and re-deploy Cumulus, or you haven\'t placed the correct values in them, or you\'ve forgotten to add both the "redirect" and "token" URL to the Earthdata Application.'),(0,a.kt)("li",{parentName:"ul"},"There is odd caching behavior associated with the dashboard and Earthdata Login at this point in time that can cause the above error to reappear on the Earthdata Login page loaded by the dashboard even after fixing the cause of the error. If you experience this, attempt to access the dashboard in a new browser window, and it should work.")))}h.isMDXComponent=!0}}]);