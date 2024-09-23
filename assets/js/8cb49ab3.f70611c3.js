"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[91269],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||s;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(58168),n=r(98587),s=(r(96540),r(15680)),o=["components"],i={id:"share-s3-access-logs",title:"Share S3 Access Logs",hide_title:!1},c=void 0,l={unversionedId:"deployment/share-s3-access-logs",id:"version-v18.4.0/deployment/share-s3-access-logs",title:"Share S3 Access Logs",description:"It is possible through Cumulus to share S3 access logs across multiple S3 packages using the S3 replicator package.",source:"@site/versioned_docs/version-v18.4.0/deployment/share-s3-access-logs.md",sourceDirName:"deployment",slug:"/deployment/share-s3-access-logs",permalink:"/cumulus/docs/v18.4.0/deployment/share-s3-access-logs",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"share-s3-access-logs",title:"Share S3 Access Logs",hide_title:!1},sidebar:"docs",previous:{title:"API Gateway Logging",permalink:"/cumulus/docs/v18.4.0/deployment/api-gateway-logging"},next:{title:"Configure Cloudwatch Logs Delivery",permalink:"/cumulus/docs/v18.4.0/deployment/cloudwatch-logs-delivery"}},u={},p=[{value:"S3 Replicator",id:"s3-replicator",level:2},{value:"ESDIS Metrics",id:"esdis-metrics",level:2}],g={toc:p},d="wrapper";function m(e){var t=e.components,r=(0,n.A)(e,o);return(0,s.yg)(d,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"It is possible through Cumulus to share S3 access logs across multiple S3 packages using the S3 replicator package."),(0,s.yg)("h2",{id:"s3-replicator"},"S3 Replicator"),(0,s.yg)("p",null,"The S3 Replicator is a Node.js package that contains a simple Lambda function, associated permissions, and the Terraform instructions to replicate create-object events from one S3 bucket to another."),(0,s.yg)("p",null,"First, ensure that you have enabled ",(0,s.yg)("a",{parentName:"p",href:"../configuration/server_access_logging"},"S3 Server Access Logging"),"."),(0,s.yg)("p",null,"Next, configure your ",(0,s.yg)("inlineCode",{parentName:"p"},"terraform.tfvars")," as described in the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/s3-replicator/README.md"},(0,s.yg)("inlineCode",{parentName:"a"},"s3-replicator/README.md"))," to correspond to your deployment.  The ",(0,s.yg)("inlineCode",{parentName:"p"},"source_bucket")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"source_prefix")," are determined by how you enabled the ",(0,s.yg)("a",{parentName:"p",href:"../configuration/server_access_logging"},"S3 Server Access Logging"),"."),(0,s.yg)("p",null,"In order to deploy the ",(0,s.yg)("inlineCode",{parentName:"p"},"s3-replicator")," with Cumulus you will need to add the module to your terraform ",(0,s.yg)("inlineCode",{parentName:"p"},"main.tf")," definition as the example below:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-hcl"},'module "s3-replicator" {\n  source = "<path to s3-replicator.zip>"\n  prefix               = var.prefix\n  vpc_id               = var.vpc_id\n  subnet_ids           = var.subnet_ids\n  permissions_boundary = var.permissions_boundary_arn\n  source_bucket        = var.s3_replicator_config.source_bucket\n  source_prefix        = var.s3_replicator_config.source_prefix\n  target_bucket        = var.s3_replicator_config.target_bucket\n  target_prefix        = var.s3_replicator_config.target_prefix\n}\n')),(0,s.yg)("p",null,"The Terraform source package can be found on the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"Cumulus GitHub Release page")," under the asset tab ",(0,s.yg)("inlineCode",{parentName:"p"},"terraform-aws-cumulus-s3-replicator.zip"),"."),(0,s.yg)("h2",{id:"esdis-metrics"},"ESDIS Metrics"),(0,s.yg)("p",null,"In the NGAP environment, the ESDIS Metrics team has set up an ELK stack to process logs from Cumulus instances.  To use this system, you must deliver any S3 Server Access logs that Cumulus creates."),(0,s.yg)("p",null,"Configure the S3 Replicator as described above using the ",(0,s.yg)("inlineCode",{parentName:"p"},"target_bucket")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"target_prefix")," provided by the Metrics team."),(0,s.yg)("p",null,"The Metrics team has taken care of setting up Logstash to ingest the files that get delivered to their bucket into their Elasticsearch instance."),(0,s.yg)("admonition",{type:"info"},(0,s.yg)("p",{parentName:"admonition"},"For a more in-depth overview regarding ESDIS Metrics view the ",(0,s.yg)("a",{parentName:"p",href:"/cumulus/docs/v18.4.0/features/distribution-metrics"},"Cumulus Distribution Metrics")," section.")))}m.isMDXComponent=!0}}]);