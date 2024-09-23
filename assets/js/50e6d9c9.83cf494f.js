"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[63156],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||g[m]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(58168),o=n(98587),r=(n(96540),n(15680)),i=["components"],l={id:"collection-storage-best-practices",title:"Collection Cost Tracking and Storage Best Practices",hide_title:!1},c=void 0,s={unversionedId:"configuration/collection-storage-best-practices",id:"version-v19.0.0/configuration/collection-storage-best-practices",title:"Collection Cost Tracking and Storage Best Practices",description:"Organizing your data is important for metrics you may want to collect. AWS S3 storage and cost metrics are calculated at the bucket level, so it is easy to get metrics by bucket. You can get storage metrics at the key prefix level, but that is done through the CLI, which can be very slow for large buckets. It is very difficult to estimate costs at the prefix level.",source:"@site/versioned_docs/version-v19.0.0/configuration/collection-storage-best-practices.md",sourceDirName:"configuration",slug:"/configuration/collection-storage-best-practices",permalink:"/cumulus/docs/configuration/collection-storage-best-practices",draft:!1,tags:[],version:"v19.0.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724951961,formattedLastUpdatedAt:"Aug 29, 2024",frontMatter:{id:"collection-storage-best-practices",title:"Collection Cost Tracking and Storage Best Practices",hide_title:!1},sidebar:"docs",previous:{title:"Setting S3 Lifecycle Policies",permalink:"/cumulus/docs/configuration/lifecycle-policies"},next:{title:"Configuration of Tasks",permalink:"/cumulus/docs/configuration/task-configuration"}},u={},p=[{value:"Calculating Storage By Collection",id:"calculating-storage-by-collection",level:2},{value:"By bucket",id:"by-bucket",level:3},{value:"By key prefix",id:"by-key-prefix",level:3},{value:"Calculating Cost By Collection",id:"calculating-cost-by-collection",level:2},{value:"NASA NGAP Environment",id:"nasa-ngap-environment",level:3},{value:"Outside of NGAP",id:"outside-of-ngap",level:3},{value:"Storage Configuration",id:"storage-configuration",level:2},{value:"Organizing By Bucket",id:"organizing-by-bucket",level:3},{value:"Organizing by Key Prefix",id:"organizing-by-key-prefix",level:3}],g={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,o.A)(e,i);return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Organizing your data is important for metrics you may want to collect. AWS S3 storage and cost metrics are calculated at the bucket level, so it is easy to get metrics by bucket. You can get storage metrics at the key prefix level, but that is done through the CLI, which can be very slow for large buckets. It is very difficult to estimate costs at the prefix level."),(0,r.yg)("h2",{id:"calculating-storage-by-collection"},"Calculating Storage By Collection"),(0,r.yg)("h3",{id:"by-bucket"},"By bucket"),(0,r.yg)("p",null,"Usage by bucket can be obtained in your ",(0,r.yg)("a",{parentName:"p",href:"https://console.aws.amazon.com/billing/home"},"AWS Billing Dashboard")," via an ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/aws-usage-report.html"},"S3 Usage Report"),". You can download your usage report for a period of time and review your storage and requests at the bucket level."),(0,r.yg)("p",null,"Bucket metrics can also be found in the ",(0,r.yg)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudwatch/home#metricsV2:graph=~();namespace=~'AWS*2fS3"},"AWS CloudWatch Metrics Console")," (also see ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/working_with_metrics.html"},"Using Amazon CloudWatch Metrics"),")."),(0,r.yg)("p",null,"Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"Storage Metrics")," and select the ",(0,r.yg)("inlineCode",{parentName:"p"},"BucketName")," for all buckets you are interested in. The available metrics are ",(0,r.yg)("inlineCode",{parentName:"p"},"BucketSizeInBytes")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"NumberOfObjects"),"."),(0,r.yg)("p",null,"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"Graphed metrics")," tab, you can select the type of statistic (i.e. average, minimum, maximum) and the period for the stats. At the top, it's useful to select from the dropdown to view the metrics as a number. You can also select the time period for which you want to see stats."),(0,r.yg)("p",null,"Alternatively you can query CloudWatch using the CLI."),(0,r.yg)("p",null,"This command will return the average number of bytes in the bucket ",(0,r.yg)("inlineCode",{parentName:"p"},"test-bucket")," for 7/31/2019:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"aws cloudwatch get-metric-statistics --namespace AWS/S3 --start-time 2019-07-31T00:00:00 --end-time 2019-08-01T00:00:00 --period 86400 --statistics Average --region us-east-1 --metric-name BucketSizeBytes --dimensions Name=BucketName,Value=test-bucket Name=StorageType,Value=StandardStorage\n")),(0,r.yg)("p",null,"The result looks like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "Datapoints": [\n        {\n            "Timestamp": "2019-07-31T00:00:00Z",\n            "Average": 150996467959.0,\n            "Unit": "Bytes"\n        }\n    ],\n    "Label": "BucketSizeBytes"\n}\n')),(0,r.yg)("h3",{id:"by-key-prefix"},"By key prefix"),(0,r.yg)("p",null,"AWS does not offer storage and usage statistics at a key prefix level. Via the AWS CLI, you can get the total storage for a bucket or folder. The following command would get the storage for folder ",(0,r.yg)("inlineCode",{parentName:"p"},"example-folder")," in bucket ",(0,r.yg)("inlineCode",{parentName:"p"},"sample-bucket"),":"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"aws s3 ls --summarize --human-readable --recursive s3://sample-bucket/example-folder | grep 'Total'")),(0,r.yg)("p",null,"Note that this can be a long-running operation for large buckets."),(0,r.yg)("h2",{id:"calculating-cost-by-collection"},"Calculating Cost By Collection"),(0,r.yg)("h3",{id:"nasa-ngap-environment"},"NASA NGAP Environment"),(0,r.yg)("p",null,"If using an NGAP account, the cost per bucket can be found in your CloudTamer console, in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Financials")," section of your account information. This is calculated on a monthly basis."),(0,r.yg)("p",null,"There is no easy way to get the cost by folder in the buckets. You could calculate an estimate using the storage per prefix vs. the storage of the bucket."),(0,r.yg)("h3",{id:"outside-of-ngap"},"Outside of NGAP"),(0,r.yg)("p",null,"You can enabled ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/CostAllocTagging.html"},"S3 Cost Allocation Tags")," and tag your buckets. From there, you can view the cost breakdown in your ",(0,r.yg)("a",{parentName:"p",href:"https://console.aws.amazon.com/billing/home"},"AWS Billing Dashboard")," via the Cost Explorer. Cost Allocation Tagging is available at the bucket level."),(0,r.yg)("p",null,"There is no easy way to get the cost by folder in the buckets. You could calculate an estimate using the storage per prefix vs. the storage of the bucket."),(0,r.yg)("h2",{id:"storage-configuration"},"Storage Configuration"),(0,r.yg)("p",null,"Cumulus allows for the configuration of many buckets for your files. Buckets are created and added to your deployment as part of the ",(0,r.yg)("a",{parentName:"p",href:"../deployment/#create-s3-buckets"},"deployment process"),"."),(0,r.yg)("p",null,"In your Cumulus ",(0,r.yg)("a",{parentName:"p",href:"data-management-types#collections"},"collection configuration"),", you specify where you want the files to be stored post-processing. This is done by matching a regular expression on the file with the configured bucket."),(0,r.yg)("p",null,"Note that in the collection configuration, the ",(0,r.yg)("inlineCode",{parentName:"p"},"bucket")," field is the key to the ",(0,r.yg)("inlineCode",{parentName:"p"},"buckets")," variable in the deployment's ",(0,r.yg)("inlineCode",{parentName:"p"},".tfvars")," file."),(0,r.yg)("h3",{id:"organizing-by-bucket"},"Organizing By Bucket"),(0,r.yg)("p",null,"You can specify separate groups of buckets for each collection, which could look like the example below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MOD09GQ",\n  "version": "006",\n  "granuleId": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}$",\n  "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n  "files": [\n    {\n      "bucket": "MOD09GQ-006-protected",\n      "regex": "^.*\\\\.hdf$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf"\n    },\n    {\n      "bucket": "MOD09GQ-006-private",\n      "regex": "^.*\\\\.hdf\\\\.met$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf.met"\n    },\n    {\n      "bucket": "MOD09GQ-006-protected",\n      "regex": "^.*\\\\.cmr\\\\.xml$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.cmr.xml"\n    },\n    {\n      "bucket": "MOD09GQ-006-public",\n      "regex": "^*\\\\.jpg$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104_ndvi.jpg"\n    }\n  ]\n}\n')),(0,r.yg)("p",null,"Additional collections would go to different buckets."),(0,r.yg)("h3",{id:"organizing-by-key-prefix"},"Organizing by Key Prefix"),(0,r.yg)("p",null,"Different collections can be organized into different folders in the same bucket, using the key prefix, which is specified as the ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," in the collection configuration. In this simplified collection configuration example, the ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," field is set at the top level so that all files go to a path prefixed with the collection name and version."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MOD09GQ",\n  "version": "006",\n  "granuleId": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}$",\n  "url_path": "{cmrMetadata.Granule.Collection.ShortName}___{cmrMetadata.Granule.Collection.VersionId}",\n  "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n  "files": [\n    {\n      "bucket": "protected",\n      "regex": "^.*\\\\.hdf$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf"\n    },\n    {\n      "bucket": "private",\n      "regex": "^.*\\\\.hdf\\\\.met$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf.met"\n    },\n    {\n      "bucket": "protected",\n      "regex": "^.*\\\\.cmr\\\\.xml$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.cmr.xml"\n    },\n    {\n      "bucket": "public",\n      "regex": "^*\\\\.jpg$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104_ndvi.jpg"\n    }\n  ]\n}\n')),(0,r.yg)("p",null,"In this case, the path to all the files would be: ",(0,r.yg)("inlineCode",{parentName:"p"},"MOD09GQ___006/<filename>")," in their respective buckets."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," can be overidden directly on the file configuration. The example below produces the same result."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MOD09GQ",\n  "version": "006",\n  "granuleId": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}$",\n  "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n  "files": [\n    {\n      "bucket": "protected",\n      "regex": "^.*\\\\.hdf$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n      "url_path": "{cmrMetadata.Granule.Collection.ShortName}___{cmrMetadata.Granule.Collection.VersionId}"\n    },\n    {\n      "bucket": "private",\n      "regex": "^.*\\\\.hdf\\\\.met$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf.met",\n      "url_path": "{cmrMetadata.Granule.Collection.ShortName}___{cmrMetadata.Granule.Collection.VersionId}"\n    },\n    {\n      "bucket": "protected-2",\n      "regex": "^.*\\\\.cmr\\\\.xml$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.cmr.xml",\n      "url_path": "{cmrMetadata.Granule.Collection.ShortName}___{cmrMetadata.Granule.Collection.VersionId}"\n    },\n    {\n      "bucket": "public",\n      "regex": "^*\\\\.jpg$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104_ndvi.jpg",\n      "url_path": "{cmrMetadata.Granule.Collection.ShortName}___{cmrMetadata.Granule.Collection.VersionId}"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);