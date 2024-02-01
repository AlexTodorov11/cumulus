"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[42472],{95788:(e,t,a)=>{a.d(t,{Iu:()=>g,yg:()=>d});var o=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(a),y=n,d=u["".concat(c,".").concat(y)]||u[y]||p[y]||r;return a?o.createElement(d,i(i({ref:t},g),{},{components:a})):o.createElement(d,i({ref:t},g))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}y.displayName="MDXCreateElement"},39964:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var o=a(45072),n=a(95656),r=(a(11504),a(95788)),i=["components"],l={id:"api-gateway-logging",title:"API Gateway Logging",hide_title:!1},c=void 0,s={unversionedId:"deployment/api-gateway-logging",id:"version-v10.0.0/deployment/api-gateway-logging",title:"API Gateway Logging",description:"Enabling API Gateway logging",source:"@site/versioned_docs/version-v10.0.0/deployment/api_gateway_logging.md",sourceDirName:"deployment",slug:"/deployment/api-gateway-logging",permalink:"/cumulus/docs/v10.0.0/deployment/api-gateway-logging",draft:!1,tags:[],version:"v10.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"api-gateway-logging",title:"API Gateway Logging",hide_title:!1},sidebar:"docs",previous:{title:"Using the Cumulus Distribution API",permalink:"/cumulus/docs/v10.0.0/deployment/cumulus_distribution"},next:{title:"Share S3 Access Logs",permalink:"/cumulus/docs/v10.0.0/deployment/share-s3-access-logs"}},g={},u=[{value:"Enabling API Gateway logging",id:"enabling-api-gateway-logging",level:2},{value:"Configure Permissions for API Gateway Logging to CloudWatch",id:"configure-permissions-for-api-gateway-logging-to-cloudwatch",level:2},{value:"Instructions for enabling account level logging from API Gateway to CloudWatch",id:"instructions-for-enabling-account-level-logging-from-api-gateway-to-cloudwatch",level:3},{value:"Create a policy document",id:"create-a-policy-document",level:3},{value:"Create an account role to act as ApiGateway and write to CloudWatchLogs",id:"create-an-account-role-to-act-as-apigateway-and-write-to-cloudwatchlogs",level:3},{value:"Attach correct permissions to role",id:"attach-correct-permissions-to-role",level:3},{value:"Update Account API Gateway settings with correct permissions",id:"update-account-api-gateway-settings-with-correct-permissions",level:3},{value:"Configure API Gateway CloudWatch Logs Delivery",id:"configure-api-gateway-cloudwatch-logs-delivery",level:2}],p={toc:u},y="wrapper";function d(e){var t=e.components,a=(0,n.c)(e,i);return(0,r.yg)(y,(0,o.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"enabling-api-gateway-logging"},"Enabling API Gateway logging"),(0,r.yg)("p",null,"In order to enable distribution API Access and execution logging, configure the TEA deployment by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"log_api_gateway_to_cloudwatch")," on the ",(0,r.yg)("inlineCode",{parentName:"p"},"thin_egress_app")," module:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},"log_api_gateway_to_cloudwatch = true\n")),(0,r.yg)("p",null,"This enables the distribution API to send its logs to the default CloudWatch location: ",(0,r.yg)("inlineCode",{parentName:"p"},"API-Gateway-Execution-Logs_<RESTAPI_ID>/<STAGE>")),(0,r.yg)("h2",{id:"configure-permissions-for-api-gateway-logging-to-cloudwatch"},"Configure Permissions for API Gateway Logging to CloudWatch"),(0,r.yg)("h3",{id:"instructions-for-enabling-account-level-logging-from-api-gateway-to-cloudwatch"},"Instructions for enabling account level logging from API Gateway to CloudWatch"),(0,r.yg)("p",null,"This is a one time operation that must be performed on each AWS account to allow API Gateway to push logs to CloudWatch."),(0,r.yg)("h3",{id:"create-a-policy-document"},"Create a policy document"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"AmazonAPIGatewayPushToCloudWatchLogs")," managed policy, with an ARN of ",(0,r.yg)("inlineCode",{parentName:"p"},"arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"),", has all the required permissions to enable API Gateway logging to CloudWatch.  To grant these permissions to your account, first create an IAM role with ",(0,r.yg)("inlineCode",{parentName:"p"},"apigateway.amazonaws.com")," as its trusted entity."),(0,r.yg)("p",null,"Save this snippet as ",(0,r.yg)("inlineCode",{parentName:"p"},"apigateway-policy.json"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "",\n            "Effect": "Allow",\n            "Principal": {\n                "Service": "apigateway.amazonaws.com"\n            },\n            "Action": "sts:AssumeRole"\n        }\n    ]\n}\n')),(0,r.yg)("h3",{id:"create-an-account-role-to-act-as-apigateway-and-write-to-cloudwatchlogs"},"Create an account role to act as ApiGateway and write to CloudWatchLogs"),(0,r.yg)("p",null,"NASA users in NGAP: be sure to use your account's permission boundary."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"aws iam create-role \\\n--role-name ApiGatewayToCloudWatchLogs \\\n[--permissions-boundary <permissionBoundaryArn>] \\\n--assume-role-policy-document file://apigateway-policy.json\n")),(0,r.yg)("p",null,"Note the ARN of the returned role for the last step."),(0,r.yg)("h3",{id:"attach-correct-permissions-to-role"},"Attach correct permissions to role"),(0,r.yg)("p",null,"Next attach the ",(0,r.yg)("inlineCode",{parentName:"p"},"AmazonAPIGatewayPushToCloudWatchLogs")," policy to the IAM role."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'aws iam attach-role-policy \\\n--role-name ApiGatewayToCloudWatchLogs \\\n--policy-arn "arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"\n')),(0,r.yg)("h3",{id:"update-account-api-gateway-settings-with-correct-permissions"},"Update Account API Gateway settings with correct permissions"),(0,r.yg)("p",null,"Finally, set the IAM role ARN on the ",(0,r.yg)("inlineCode",{parentName:"p"},"cloudWatchRoleArn")," property on your API Gateway Account settings."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"aws apigateway update-account \\\n--patch-operations op='replace',path='/cloudwatchRoleArn',value='<ApiGatewayToCloudWatchLogs ARN>'\n")),(0,r.yg)("h2",{id:"configure-api-gateway-cloudwatch-logs-delivery"},"Configure API Gateway CloudWatch Logs Delivery"),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/cumulus/docs/v10.0.0/deployment/cloudwatch-logs-delivery"},"Configure Cloudwatch Logs Delivery")))}d.isMDXComponent=!0}}]);