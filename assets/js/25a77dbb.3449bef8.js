"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[81533],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>d});var n=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=n.createContext({}),c=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(g.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,d=p["".concat(g,".").concat(y)]||p[y]||u[y]||r;return t?n.createElement(d,i(i({ref:a},s),{},{components:t})):n.createElement(d,i({ref:a},s))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=y;var l={};for(var g in a)hasOwnProperty.call(a,g)&&(l[g]=a[g]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},94879:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(58168),o=t(98587),r=(t(96540),t(15680)),i=["components"],l={id:"api-gateway-logging",title:"API Gateway Logging",hide_title:!1},g=void 0,c={unversionedId:"deployment/api-gateway-logging",id:"version-v18.1.0/deployment/api-gateway-logging",title:"API Gateway Logging",description:"Enabling API Gateway Logging",source:"@site/versioned_docs/version-v18.1.0/deployment/api_gateway_logging.md",sourceDirName:"deployment",slug:"/deployment/api-gateway-logging",permalink:"/cumulus/docs/v18.1.0/deployment/api-gateway-logging",draft:!1,tags:[],version:"v18.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1698355623,formattedLastUpdatedAt:"Oct 26, 2023",frontMatter:{id:"api-gateway-logging",title:"API Gateway Logging",hide_title:!1},sidebar:"docs",previous:{title:"Logs",permalink:"/cumulus/docs/v18.1.0/category/logs"},next:{title:"Share S3 Access Logs",permalink:"/cumulus/docs/v18.1.0/deployment/share-s3-access-logs"}},s={},p=[{value:"Enabling API Gateway Logging",id:"enabling-api-gateway-logging",level:2},{value:"Configure Permissions for API Gateway Logging to CloudWatch",id:"configure-permissions-for-api-gateway-logging-to-cloudwatch",level:2},{value:"Instructions: Enabling Account Level Logging from API Gateway to CloudWatch",id:"instructions-enabling-account-level-logging-from-api-gateway-to-cloudwatch",level:3},{value:"Configure API Gateway CloudWatch Logs Delivery",id:"configure-api-gateway-cloudwatch-logs-delivery",level:2}],u={toc:p},y="wrapper";function d(e){var a=e.components,t=(0,o.A)(e,i);return(0,r.yg)(y,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"enabling-api-gateway-logging"},"Enabling API Gateway Logging"),(0,r.yg)("p",null,"In order to enable distribution API Access and execution logging, configure the TEA deployment by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"log_api_gateway_to_cloudwatch")," on the ",(0,r.yg)("inlineCode",{parentName:"p"},"thin_egress_app")," module:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},"log_api_gateway_to_cloudwatch = true\n")),(0,r.yg)("p",null,"This enables the distribution API to send its logs to the default CloudWatch location: ",(0,r.yg)("inlineCode",{parentName:"p"},"API-Gateway-Execution-Logs_<RESTAPI_ID>/<STAGE>")),(0,r.yg)("h2",{id:"configure-permissions-for-api-gateway-logging-to-cloudwatch"},"Configure Permissions for API Gateway Logging to CloudWatch"),(0,r.yg)("h3",{id:"instructions-enabling-account-level-logging-from-api-gateway-to-cloudwatch"},"Instructions: Enabling Account Level Logging from API Gateway to CloudWatch"),(0,r.yg)("p",null,"This is a one time operation that must be performed on each AWS account to allow API Gateway to push logs to CloudWatch."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("h3",{parentName:"li",id:"create-a-policy-document"},"Create a policy document"),(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"AmazonAPIGatewayPushToCloudWatchLogs")," managed policy, with an ARN of ",(0,r.yg)("inlineCode",{parentName:"p"},"arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"),", has all the required permissions to enable API Gateway logging to CloudWatch.  To grant these permissions to your account, first create an IAM role with ",(0,r.yg)("inlineCode",{parentName:"p"},"apigateway.amazonaws.com")," as its trusted entity."),(0,r.yg)("p",{parentName:"li"},"Save this snippet as ",(0,r.yg)("inlineCode",{parentName:"p"},"apigateway-policy.json"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "",\n            "Effect": "Allow",\n            "Principal": {\n                "Service": "apigateway.amazonaws.com"\n            },\n            "Action": "sts:AssumeRole"\n        }\n    ]\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("h3",{parentName:"li",id:"create-an-account-role-to-act-as-apigateway-and-write-to-cloudwatchlogs"},"Create an account role to act as ApiGateway and write to CloudWatchLogs"),(0,r.yg)("admonition",{parentName:"li",title:"in NGAP",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"NASA users in NGAP"),": Be sure to use your account's permission boundary.")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"    aws iam create-role \\\n    --role-name ApiGatewayToCloudWatchLogs \\\n    [--permissions-boundary <permissionBoundaryArn>] \\\n    --assume-role-policy-document file://apigateway-policy.json\n")),(0,r.yg)("p",{parentName:"li"},"Note the ARN of the returned role for the last step.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("h3",{parentName:"li",id:"attach-correct-permissions-to-role"},"Attach correct permissions to role"),(0,r.yg)("p",{parentName:"li"},"Next attach the ",(0,r.yg)("inlineCode",{parentName:"p"},"AmazonAPIGatewayPushToCloudWatchLogs")," policy to the IAM role."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'aws iam attach-role-policy \\\n--role-name ApiGatewayToCloudWatchLogs \\\n--policy-arn "arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("h3",{parentName:"li",id:"update-account-api-gateway-settings-with-correct-permissions"},"Update Account API Gateway settings with correct permissions"),(0,r.yg)("p",{parentName:"li"},"Finally, set the IAM role ARN on the ",(0,r.yg)("inlineCode",{parentName:"p"},"cloudWatchRoleArn")," property on your API Gateway Account settings."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"aws apigateway update-account \\\n--patch-operations op='replace',path='/cloudwatchRoleArn',value='<ApiGatewayToCloudWatchLogs ARN>'\n")))),(0,r.yg)("h2",{id:"configure-api-gateway-cloudwatch-logs-delivery"},"Configure API Gateway CloudWatch Logs Delivery"),(0,r.yg)("p",null,"For details about configuring the API Gateway CloudWatch Logs delivery, see ",(0,r.yg)("a",{parentName:"p",href:"/cumulus/docs/v18.1.0/deployment/cloudwatch-logs-delivery"},"Configure Cloudwatch Logs Delivery"),"."))}d.isMDXComponent=!0}}]);