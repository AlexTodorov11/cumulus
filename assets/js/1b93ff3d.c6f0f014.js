"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[83212],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>d});var o=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=s(n),y=a,d=p["".concat(c,".").concat(y)]||p[y]||g[y]||i;return n?o.createElement(d,l(l({ref:t},u),{},{components:n})):o.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},15808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(45072),a=n(95656),i=(n(11504),n(95788)),l=["components"],r={id:"lifecycle-policies",title:"Setting S3 Lifecycle Policies",hide_title:!1},c=void 0,s={unversionedId:"configuration/lifecycle-policies",id:"version-v10.0.0/configuration/lifecycle-policies",title:"Setting S3 Lifecycle Policies",description:"This document will outline, in brief, how to set data lifecycle policies so that you are more easily able to control data storage costs while keeping your data accessible.   For more information on why you might want to do this, see the 'Additional Information' section at the end of the document.",source:"@site/versioned_docs/version-v10.0.0/configuration/lifecycle-policies.md",sourceDirName:"configuration",slug:"/configuration/lifecycle-policies",permalink:"/cumulus/docs/v10.0.0/configuration/lifecycle-policies",draft:!1,tags:[],version:"v10.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"lifecycle-policies",title:"Setting S3 Lifecycle Policies",hide_title:!1},sidebar:"docs",previous:{title:"Cloudwatch Retention",permalink:"/cumulus/docs/v10.0.0/configuration/cloudwatch-retention"},next:{title:"Collection Cost Tracking and Storage Best Practices",permalink:"/cumulus/docs/v10.0.0/configuration/collection-storage-best-practices"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Examples",id:"examples",level:2},{value:"Walk-through on setting time-based S3 Infrequent Access (S3IA) bucket policy",id:"walk-through-on-setting-time-based-s3-infrequent-access-s3ia-bucket-policy",level:3},{value:"Command Line",id:"command-line",level:3},{value:"Create policy",id:"create-policy",level:4},{value:"Set policy",id:"set-policy",level:4},{value:"Verify policy has been set",id:"verify-policy-has-been-set",level:4},{value:"Management Console",id:"management-console",level:3},{value:"Create Policy",id:"create-policy-1",level:4},{value:"Additional Information",id:"additional-information",level:2},{value:"Strategy Overview",id:"strategy-overview",level:3},{value:"AWS Documentation",id:"aws-documentation",level:3}],g={toc:p},y="wrapper";function d(e){var t=e.components,r=(0,a.c)(e,l);return(0,i.yg)(y,(0,o.c)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This document will outline, in brief, how to set data lifecycle policies so that you are more easily able to control data storage costs while keeping your data accessible.   For more information on why you might want to do this, see the 'Additional Information' section at the end of the document."),(0,i.yg)("h2",{id:"requirements"},"Requirements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The AWS CLI installed and configured (if you wish to run the CLI example).  See ",(0,i.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/setup-aws-cli.html"},"AWS's guide to setting up the AWS CLI")," for more on this.   Please ensure the AWS CLI is in your shell path."),(0,i.yg)("li",{parentName:"ul"},"You will need a S3 bucket on AWS. ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("em",{parentName:"strong"},"You are strongly encouraged to use a bucket without voluminous amounts of data in it for experimenting/learning")),"."),(0,i.yg)("li",{parentName:"ul"},"An AWS user with the appropriate roles to access the target bucket as well as modify bucket policies.")),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("h3",{id:"walk-through-on-setting-time-based-s3-infrequent-access-s3ia-bucket-policy"},"Walk-through on setting time-based S3 Infrequent Access (S3IA) bucket policy"),(0,i.yg)("p",null,"This example will give step-by-step instructions on updating a bucket's lifecycle policy to move all objects in the bucket from the default storage to S3 Infrequent Access (S3IA) after a period of 90 days.   Below are instructions for walking through configuration via the command line and the management console."),(0,i.yg)("h3",{id:"command-line"},"Command Line"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Please ensure you have the AWS CLI installed and configured for access prior to attempting this example.")),(0,i.yg)("h4",{id:"create-policy"},"Create policy"),(0,i.yg)("p",null,"From any directory you chose, open an editor and add the following to a file named ",(0,i.yg)("inlineCode",{parentName:"p"},"exampleRule.json")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'{\n    "Rules": [\n        {\n          "Status": "Enabled",\n          "Filter": {\n            "Prefix": ""\n          },\n          "Transitions": [\n            {\n              "Days": 90,\n              "StorageClass": "STANDARD_IA"\n            }\n          ],\n          "NoncurrentVersionTransitions": [\n            {\n              "NoncurrentDays": 90,\n              "StorageClass": "STANDARD_IA"\n            }\n          ]\n          "ID": "90DayS3IAExample"\n        }\n    ]\n}\n')),(0,i.yg)("h4",{id:"set-policy"},"Set policy"),(0,i.yg)("p",null,"On the command line run the following command (with the bucket you're working with substituted in place of yourBucketNameHere)."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"aws s3api put-bucket-lifecycle-configuration --bucket yourBucketNameHere --lifecycle-configuration file://exampleRule.json\n")),(0,i.yg)("h4",{id:"verify-policy-has-been-set"},"Verify policy has been set"),(0,i.yg)("p",null,"To obtain all of the existing policies for a bucket, run the following command (again substituting the correct bucket name):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},' $ aws s3api get-bucket-lifecycle-configuration --bucket yourBucketNameHere\n  {\n      "Rules": [\n          {\n              "Status": "Enabled",\n              "Filter": {\n                  "Prefix": ""\n              },\n              "Transitions": [\n              {\n                      "Days": 90,\n                      "StorageClass": "STANDARD_IA"\n                  }\n              ],\n              "NoncurrentVersionTransitions": [\n                  {\n                      "NoncurrentDays": 90,\n                      "StorageClass": "STANDARD_IA"\n                  }\n              ]\n              "ID": "90DayS3IAExample"\n          }\n      ]\n  }\n')),(0,i.yg)("p",null,"You have set a policy that transitions any version of an object in the bucket to S3IA after each object version has not been modified for 90 days."),(0,i.yg)("h3",{id:"management-console"},"Management Console"),(0,i.yg)("h4",{id:"create-policy-1"},"Create Policy"),(0,i.yg)("p",null,"To create the example policy on a bucket via the management console, go to the following URL (replacing 'yourBucketHere' with the bucket you intend to update):"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"https://s3.console.aws.amazon.com/s3/buckets/yourBucketHere/?tab=overview")),(0,i.yg)("p",null,"You should see a screen similar to:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot of AWS console for an S3 bucket",src:n(15648).c,width:"3310",height:"1498"})),(0,i.yg)("p",null,'Click the "Management" Tab, then lifecycle button and press ',(0,i.yg)("inlineCode",{parentName:"p"},"+ Add lifecycle rule"),":"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot of &quot;Management&quot; tab of AWS console for an S3 bucket",src:n(44516).c,width:"3106",height:"1630"})),(0,i.yg)("p",null,"Give the rule a name (e.g. '90DayRule'), leaving the filter blank:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot of window for configuring the name and scope of a lifecycle rule on an S3 bucket in the AWS console",src:n(40464).c,width:"1424",height:"1372"})),(0,i.yg)("p",null,"Click ",(0,i.yg)("inlineCode",{parentName:"p"},"next"),", and mark ",(0,i.yg)("inlineCode",{parentName:"p"},"Current Version")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Previous Versions"),"."),(0,i.yg)("p",null,"Then for each, click ",(0,i.yg)("inlineCode",{parentName:"p"},"+ Add transition")," and select ",(0,i.yg)("inlineCode",{parentName:"p"},"Transition to Standard-IA after")," for the ",(0,i.yg)("inlineCode",{parentName:"p"},"Object creation")," field, and set ",(0,i.yg)("inlineCode",{parentName:"p"},"90")," for the ",(0,i.yg)("inlineCode",{parentName:"p"},"Days after creation"),"/",(0,i.yg)("inlineCode",{parentName:"p"},"Days after objects become concurrent")," field.    Your screen should look similar to:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot of window for configuring the storage class transitions of a lifecycle rule on an S3 bucket in the AWS console",src:n(13636).c,width:"1404",height:"1398"})),(0,i.yg)("p",null,"Click ",(0,i.yg)("inlineCode",{parentName:"p"},"next"),", then next past the ",(0,i.yg)("inlineCode",{parentName:"p"},"Configure expiration")," screen (we won't be setting this), and on the fourth page, click ",(0,i.yg)("inlineCode",{parentName:"p"},"Save"),":"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot of window for reviewing the configuration of a lifecycle rule on an S3 bucket in the AWS console",src:n(47104).c,width:"1394",height:"1396"})),(0,i.yg)("p",null,"You should now see you have a rule configured for your bucket:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot of lifecycle rule appearing in the &quot;Management&quot; tab of AWS console for an S3 bucket",src:n(80100).c,width:"3110",height:"672"})),(0,i.yg)("p",null,"You have now set a policy that transitions any version of an object in the bucket to S3IA after each object has not been modified for 90 days."),(0,i.yg)("h2",{id:"additional-information"},"Additional Information"),(0,i.yg)("p",null,"This section lists information you may want prior to enacting lifecycle policies.  It is not required content for working through the examples."),(0,i.yg)("h3",{id:"strategy-overview"},"Strategy Overview"),(0,i.yg)("p",null,"For a discussion of overall recommended strategy, please review the ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.earthdata.nasa.gov/display/CUMULUS/Methodology+for+Data+Lifecycle+Management"},"Methodology for Data Lifecycle Management")," on the EarthData wiki."),(0,i.yg)("h3",{id:"aws-documentation"},"AWS Documentation"),(0,i.yg)("p",null,"The examples shown in this document are obviously fairly basic cases.  By using object tags, filters and other configuration options  you can enact far more complicated policies for various scenarios. For more reading on the topics presented on this page see:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-lifecycle.html"},"AWS - Guide on setting bucket lifecycle policies via the management Console")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/set-lifecycle-cli.html"},"AWS - Guide on setting bucket lifecycle policies using the AWS CLI")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html"},"AWS - Object Lifecycle Management")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-configuration-examples.html"},"AWS - Lifecycle Configuration Examples"))))}d.isMDXComponent=!0},44516:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/add_lifecycle_rule-837f5408e70f6f626576bfa784e3126a.png"},15648:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/aws_bucket_console_example-697cd87c217beb0ba5d6405daa6711e8.png"},40464:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/lifecycle_1-202281074038e5125891280790652fd9.png"},13636:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/lifecycle_2-04ac1e7c06f298d2a8864d57766de084.png"},47104:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/lifecycle_4-9d59bd2dfdf4be986d9c29a137e7504d.png"},80100:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/lifecycle_5-e5e14604e745b8d2d0c3007a642779b5.png"}}]);