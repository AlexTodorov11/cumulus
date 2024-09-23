"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[57989],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=l(a),c=o,g=m["".concat(i,".").concat(c)]||m[c]||p[c]||r;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:o,s[1]=u;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>u,metadata:()=>l,toc:()=>m});var n=a(58168),o=a(98587),r=(a(96540),a(15680)),s=["components"],u={id:"migrate_tea_standalone",title:"Migrate TEA deployment to standalone module",hide_title:!1},i=void 0,l={unversionedId:"upgrade-notes/migrate_tea_standalone",id:"version-v18.4.0/upgrade-notes/migrate_tea_standalone",title:"Migrate TEA deployment to standalone module",description:"Background",source:"@site/versioned_docs/version-v18.4.0/upgrade-notes/migrate-tea-standalone.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/migrate_tea_standalone",permalink:"/cumulus/docs/v18.4.0/upgrade-notes/migrate_tea_standalone",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"migrate_tea_standalone",title:"Migrate TEA deployment to standalone module",hide_title:!1},sidebar:"docs",previous:{title:"Upgrade Notes",permalink:"/cumulus/docs/v18.4.0/category/upgrade-notes"},next:{title:"Upgrade to TF version 0.13.6",permalink:"/cumulus/docs/v18.4.0/upgrade-notes/upgrade_tf_version_0.13.6"}},d={},m=[{value:"Background",id:"background",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Notes about state management",id:"notes-about-state-management",level:2},{value:"Download your most recent state version",id:"download-your-most-recent-state-version",level:3},{value:"Restore a previous state version",id:"restore-a-previous-state-version",level:3},{value:"Migration instructions",id:"migration-instructions",level:2}],p={toc:m},c="wrapper";function g(e){var t=e.components,a=(0,o.A)(e,s);return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"background"},"Background"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This document is only relevant for upgrades of Cumulus from versions < 3.x.x to versions > 3.x.x")),(0,r.yg)("p",null,"Previous versions of Cumulus included deployment of the Thin Egress App (TEA) by default in the ",(0,r.yg)("inlineCode",{parentName:"p"},"distribution")," module. As a result, Cumulus users who wanted to deploy a new version of TEA to wait on a new release of Cumulus that incorporated that release."),(0,r.yg)("p",null,"In order to give Cumulus users the flexibility to deploy newer versions of TEA whenever they want, deployment of TEA has been removed from the ",(0,r.yg)("inlineCode",{parentName:"p"},"distribution")," module and ",(0,r.yg)("strong",{parentName:"p"},"Cumulus users must now add the TEA module to their deployment"),". ",(0,r.yg)("a",{parentName:"p",href:"/cumulus/docs/v18.4.0/deployment/thin_egress_app"},"Guidance on integrating the TEA module to your deployment is provided"),", or you can refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/main.tf"},"Cumulus core example deployment code for the ",(0,r.yg)("inlineCode",{parentName:"a"},"thin_egress_app")," module"),"."),(0,r.yg)("p",null,"By default, when upgrading Cumulus and moving from TEA deployed via the ",(0,r.yg)("inlineCode",{parentName:"p"},"distribution")," module to deployed as a separate module, your API gateway for TEA would be destroyed and re-created, which could cause outages for any Cloudfront endpoints pointing at that API gateway."),(0,r.yg)("p",null,"These instructions outline how to modify your state to preserve your existing Thin Egress App (TEA) API gateway when upgrading Cumulus and moving deployment of TEA to a standalone module. ",(0,r.yg)("strong",{parentName:"p"},"If you do not care about preserving your API gateway for TEA when upgrading your Cumulus deployment, you can skip these instructions.")),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You ",(0,r.yg)("a",{parentName:"li",href:"../deployment/terraform-best-practices#enable-bucket-versioning"},(0,r.yg)("strong",{parentName:"a"},"must have bucket versioning enabled")," for the Terraform state bucket used by your ",(0,r.yg)("inlineCode",{parentName:"a"},"cumulus")," deployment"))),(0,r.yg)("h2",{id:"notes-about-state-management"},"Notes about state management"),(0,r.yg)("p",null,"These instructions will involve manipulating your Terraform state via ",(0,r.yg)("inlineCode",{parentName:"p"},"terraform state mv")," commands. These operations are ",(0,r.yg)("strong",{parentName:"p"},"extremely dangerous"),", since a mistake in editing your Terraform state can leave your stack in a corrupted state where deployment may be impossible or may result in unanticipated resource deletion."),(0,r.yg)("p",null,"Since bucket versioning preserves a separate version of your state file each time it is written, and the Terraform state modification commands overwrite the state file, we can mitigate the risk of these operations by downloading the most recent state file before starting the upgrade process. Then, if anything goes wrong during the upgrade, we can restore that previous state version. Guidance on how to perform both operations is provided below."),(0,r.yg)("h3",{id:"download-your-most-recent-state-version"},"Download your most recent state version"),(0,r.yg)("p",null,"Run this command to download the most recent cumulus deployment state file, replacing ",(0,r.yg)("inlineCode",{parentName:"p"},"BUCKET")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"KEY")," with the correct values from ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus-tf/terraform.tf"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"}," aws s3 cp s3://BUCKET/KEY /path/to/terraform.tfstate\n")),(0,r.yg)("h3",{id:"restore-a-previous-state-version"},"Restore a previous state version"),(0,r.yg)("p",null,"Upload the state file that was previously downloaded to the bucket/key for your state file, replacing ",(0,r.yg)("inlineCode",{parentName:"p"},"BUCKET")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"KEY")," with the correct values from ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus-tf/terraform.tf"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"}," aws s3 cp /path/to/terraform.tfstate s3://BUCKET/KEY\n")),(0,r.yg)("p",null,"Then run ",(0,r.yg)("inlineCode",{parentName:"p"},"terraform plan"),", which will give an error because we manually overwrote the state file and it is now out of sync with the lock table Terraform uses to track your state file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"Error: Error loading state: state data in S3 does not have the expected content.\n\nThis may be caused by unusually long delays in S3 processing a previous state\nupdate.  Please wait for a minute or two and try again. If this problem\npersists, and neither S3 nor DynamoDB are experiencing an outage, you may need\nto manually verify the remote state and update the Digest value stored in the\nDynamoDB table to the following value: <some-digest-value>\n")),(0,r.yg)("p",null,"To resolve this error, run this command and replace ",(0,r.yg)("inlineCode",{parentName:"p"},"DYNAMO_LOCK_TABLE"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"BUCKET")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"KEY")," with the correct values from ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus-tf/terraform.tf"),", and use the digest value from the previous error output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},' aws dynamodb put-item \\\n    --table-name DYNAMO_LOCK_TABLE \\\n    --item \'{\n        "LockID": {"S": "BUCKET/KEY-md5"},\n        "Digest": {"S": "some-digest-value"}\n      }\'\n')),(0,r.yg)("p",null,"Now, if you re-run ",(0,r.yg)("inlineCode",{parentName:"p"},"terraform plan"),", it should work as expected."),(0,r.yg)("h2",{id:"migration-instructions"},"Migration instructions"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"These instructions assume that you are deploying the ",(0,r.yg)("inlineCode",{parentName:"p"},"thin_egress_app")," module as shown in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/main.tf"},"Cumulus core example deployment code"),".")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Ensure that you have ",(0,r.yg)("a",{parentName:"p",href:"#download-your-most-recent-state-version"},"downloaded the latest version of your state file for your cumulus deployment"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Find the URL for your ",(0,r.yg)("inlineCode",{parentName:"p"},"<prefix>-thin-egress-app-EgressGateway")," API gateway. Confirm that you can access it in the browser and that it is functional.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run ",(0,r.yg)("inlineCode",{parentName:"p"},"terraform plan"),". You should see output like (edited for readability):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'# module.thin_egress_app.aws_cloudformation_stack.thin_egress_app will be created\n  + resource "aws_cloudformation_stack" "thin_egress_app" {\n\n# module.thin_egress_app.aws_s3_bucket.lambda_source will be created\n  + resource "aws_s3_bucket" "lambda_source" {\n\n# module.thin_egress_app.aws_s3_bucket_object.cloudformation_template will be created\n  + resource "aws_s3_bucket_object" "cloudformation_template" {\n\n# module.thin_egress_app.aws_s3_bucket_object.lambda_code_dependency_archive will be created\n  + resource "aws_s3_bucket_object" "lambda_code_dependency_archive" {\n\n# module.thin_egress_app.aws_s3_bucket_object.lambda_source will be created\n  + resource "aws_s3_bucket_object" "lambda_source" {\n\n# module.thin_egress_app.aws_security_group.egress_lambda[0] will be created\n  + resource "aws_security_group" "egress_lambda" {\n\n...\n\n# module.cumulus.module.distribution.module.thin_egress_app.aws_cloudformation_stack.thin_egress_app will be destroyed\n  - resource "aws_cloudformation_stack" "thin_egress_app" {\n\n# module.cumulus.module.distribution.module.thin_egress_app.aws_s3_bucket.lambda_source will be destroyed\n  - resource "aws_s3_bucket" "lambda_source" {\n\n# module.cumulus.module.distribution.module.thin_egress_app.aws_s3_bucket_object.cloudformation_template will be destroyed\n  - resource "aws_s3_bucket_object" "cloudformation_template" {\n\n# module.cumulus.module.distribution.module.thin_egress_app.aws_s3_bucket_object.lambda_code_dependency_archive will be destroyed\n  - resource "aws_s3_bucket_object" "lambda_code_dependency_archive" {\n\n# module.cumulus.module.distribution.module.thin_egress_app.aws_s3_bucket_object.lambda_source will be destroyed\n  - resource "aws_s3_bucket_object" "lambda_source" {\n\n# module.cumulus.module.distribution.module.thin_egress_app.aws_security_group.egress_lambda[0] will be destroyed\n  - resource "aws_security_group" "egress_lambda" {\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the state modification commands. The commands must be run in exactly this order:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"}," # Move security group\n terraform state mv module.cumulus.module.distribution.module.thin_egress_app.aws_security_group.egress_lambda module.thin_egress_app.aws_security_group.egress_lambda\n\n # Move TEA storage bucket\n terraform state mv module.cumulus.module.distribution.module.thin_egress_app.aws_s3_bucket.lambda_source module.thin_egress_app.aws_s3_bucket.lambda_source\n\n # Move TEA lambda source code\n terraform state mv module.cumulus.module.distribution.module.thin_egress_app.aws_s3_bucket_object.lambda_source module.thin_egress_app.aws_s3_bucket_object.lambda_source\n\n # Move TEA lambda dependency code\n terraform state mv module.cumulus.module.distribution.module.thin_egress_app.aws_s3_bucket_object.lambda_code_dependency_archive module.thin_egress_app.aws_s3_bucket_object.lambda_code_dependency_archive\n\n # Move TEA Cloudformation template\n terraform state mv module.cumulus.module.distribution.module.thin_egress_app.aws_s3_bucket_object.cloudformation_template module.thin_egress_app.aws_s3_bucket_object.cloudformation_template\n\n # Move URS creds secret version\n terraform state mv module.cumulus.module.distribution.aws_secretsmanager_secret_version.thin_egress_urs_creds aws_secretsmanager_secret_version.thin_egress_urs_creds\n\n # Move URS creds secret\n terraform state mv module.cumulus.module.distribution.aws_secretsmanager_secret.thin_egress_urs_creds aws_secretsmanager_secret.thin_egress_urs_creds\n\n # Move TEA Cloudformation stack\n terraform state mv module.cumulus.module.distribution.module.thin_egress_app.aws_cloudformation_stack.thin_egress_app module.thin_egress_app.aws_cloudformation_stack.thin_egress_app\n")),(0,r.yg)("p",{parentName:"li"}," Depending on how you were supplying a bucket map to TEA, there may be an additional step. If you were specifying the ",(0,r.yg)("inlineCode",{parentName:"p"},"bucket_map_key")," variable to the ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus")," module to use a custom bucket map, then you can ignore this step and just ensure that the ",(0,r.yg)("inlineCode",{parentName:"p"},"bucket_map_file")," variable to the TEA module uses that same S3 key. Otherwise, if you were letting Cumulus generate a bucket map for you, then you need to take this step to migrate that bucket map:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Move bucket map\nterraform state mv module.cumulus.module.distribution.aws_s3_bucket_object.bucket_map_yaml[0] aws_s3_bucket_object.bucket_map_yaml\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run ",(0,r.yg)("inlineCode",{parentName:"p"},"terraform plan")," again. You may still see a few additions/modifications pending like below, but you should not see any deletion of Thin Egress App resources pending:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'# module.thin_egress_app.aws_cloudformation_stack.thin_egress_app will be updated in-place\n  ~ resource "aws_cloudformation_stack" "thin_egress_app" {\n\n# module.thin_egress_app.aws_s3_bucket_object.cloudformation_template will be updated in-place\n  ~ resource "aws_s3_bucket_object" "cloudformation_template" {\n\n# module.thin_egress_app.aws_s3_bucket_object.lambda_code_dependency_archive will be updated in-place\n  ~ resource "aws_s3_bucket_object" "lambda_code_dependency_archive" {\n\n# module.thin_egress_app.aws_s3_bucket_object.lambda_source will be updated in-place\n  ~ resource "aws_s3_bucket_object" "lambda_source" {\n')),(0,r.yg)("p",{parentName:"li"},"If you still see deletion of ",(0,r.yg)("inlineCode",{parentName:"p"},"module.cumulus.module.distribution.module.thin_egress_app.aws_cloudformation_stack.thin_egress_app")," pending, then something went wrong and you should ",(0,r.yg)("a",{parentName:"p",href:"#restore-a-previous-state-version"},"restore the previously downloaded state file version")," and start over from step 1. Otherwise, proceed to step 6.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once you have confirmed that everything looks as expected, run ",(0,r.yg)("inlineCode",{parentName:"p"},"terraform apply"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Visit the same API gateway from step 1 and confirm that it still works."))),(0,r.yg)("p",null,"Your TEA deployment has now been migrated to a standalone module, which gives you the ability to upgrade the deployed version of TEA independently of Cumulus releases."))}g.isMDXComponent=!0}}]);