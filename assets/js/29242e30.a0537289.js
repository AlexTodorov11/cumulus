"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[91220],{15680:(e,o,n)=>{n.d(o,{xA:()=>c,yg:()=>g});var t=n(96540);function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,t,a=function(e,o){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),u=function(e){var o=t.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},c=function(e){var o=u(e.components);return t.createElement(l.Provider,{value:o},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?t.createElement(g,r(r({ref:o},c),{},{components:n})):t.createElement(g,r({ref:o},c))}));function g(e,o){var n=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77096:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var t=n(58168),a=n(98587),i=(n(96540),n(15680)),r=["components"],s={id:"monitoring-readme",title:"Monitoring Best Practices",hide_title:!1},l=void 0,u={unversionedId:"configuration/monitoring-readme",id:"version-v18.4.0/configuration/monitoring-readme",title:"Monitoring Best Practices",description:"This document intends to provide a set of recommendations and best practices for monitoring the state of a deployed Cumulus and diagnosing any issues.",source:"@site/versioned_docs/version-v18.4.0/configuration/monitoring.md",sourceDirName:"configuration",slug:"/configuration/monitoring-readme",permalink:"/cumulus/docs/v18.4.0/configuration/monitoring-readme",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"monitoring-readme",title:"Monitoring Best Practices",hide_title:!1},sidebar:"docs",previous:{title:"Cumulus Data Management Types",permalink:"/cumulus/docs/v18.4.0/configuration/data-management-types"},next:{title:"S3 Server Access Logging",permalink:"/cumulus/docs/v18.4.0/configuration/server_access_logging"}},c={},d=[{value:"Cumulus-provided resources and integrations for monitoring",id:"cumulus-provided-resources-and-integrations-for-monitoring",level:2},{value:"Cumulus Dashboard",id:"cumulus-dashboard",level:3},{value:"Cumulus-provided AWS resources",id:"cumulus-provided-aws-resources",level:3},{value:"Monitoring Lambda Functions",id:"monitoring-lambda-functions",level:4},{value:"Monitoring ECS services",id:"monitoring-ecs-services",level:4},{value:"Monitoring workflows",id:"monitoring-workflows",level:4},{value:"AWS recommendations",id:"aws-recommendations",level:2},{value:"Example: Setting up email notifications for CloudWatch logs",id:"example-setting-up-email-notifications-for-cloudwatch-logs",level:2}],m={toc:d},p="wrapper";function g(e){var o=e.components,n=(0,a.A)(e,r);return(0,i.yg)(p,(0,t.A)({},m,n,{components:o,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This document intends to provide a set of recommendations and best practices for monitoring the state of a deployed Cumulus and diagnosing any issues."),(0,i.yg)("h2",{id:"cumulus-provided-resources-and-integrations-for-monitoring"},"Cumulus-provided resources and integrations for monitoring"),(0,i.yg)("p",null,"Cumulus provides a number set of resources that are useful for monitoring the system and its operation."),(0,i.yg)("h3",{id:"cumulus-dashboard"},"Cumulus Dashboard"),(0,i.yg)("p",null,"The primary tool for monitoring the Cumulus system is the Cumulus Dashboard. The dashboard is hosted ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-dashboard/"},"on Github")," and includes instructions on how to deploy and link it into your core Cumulus deployment."),(0,i.yg)("p",null,"The dashboard displays workflow executions, their status, inputs, outputs, and some diagnostic information such as logs. For further information on the dashboard, its usage, and the information it provides, see the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-dashboard/blob/master/README.md"},"documentation"),"."),(0,i.yg)("h3",{id:"cumulus-provided-aws-resources"},"Cumulus-provided AWS resources"),(0,i.yg)("p",null,"Cumulus sets up CloudWatch log groups for all Core-provided tasks."),(0,i.yg)("h4",{id:"monitoring-lambda-functions"},"Monitoring Lambda Functions"),(0,i.yg)("p",null,"Logging for each Lambda Function is available in Lambda-specific CloudWatch log groups."),(0,i.yg)("h4",{id:"monitoring-ecs-services"},"Monitoring ECS services"),(0,i.yg)("p",null,"Each deployed ",(0,i.yg)("inlineCode",{parentName:"p"},"cumulus_ecs_service")," module also includes a CloudWatch log group for the processes running on ECS."),(0,i.yg)("h4",{id:"monitoring-workflows"},"Monitoring workflows"),(0,i.yg)("p",null,"For advanced debugging, we also configure dead letter queues on critical system functions. These will allow you to monitor and debug invalid inputs to the functions we use to start workflows, which can be helpful if you find that you are not seeing workflows being started as expected. More information on these can be found in the ",(0,i.yg)("a",{parentName:"p",href:"/cumulus/docs/v18.4.0/features/dead_letter_queues"},"dead letter queue documentation")),(0,i.yg)("h2",{id:"aws-recommendations"},"AWS recommendations"),(0,i.yg)("p",null,"AWS has a number of recommendations on system monitoring. Rather than reproduce those here and risk providing outdated guidance, we've documented the following links which will take you to available AWS docs on monitoring recommendations and best practices for the services used in Cumulus:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring_ec2.html"},"EC2 Monitoring")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-monitoring.html"},"Lambda Monitoring")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/index.html"},"CloudWatch documentation"))),(0,i.yg)("h2",{id:"example-setting-up-email-notifications-for-cloudwatch-logs"},"Example: Setting up email notifications for CloudWatch logs"),(0,i.yg)("p",null,"Cumulus does not provide out-of-the-box support for email notifications at this time.\nHowever, setting up email notifications on AWS is fairly straightforward in that the operative components are an ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/US_SetupSNS.html"},"AWS SNS topic and a subscribed email address"),"."),(0,i.yg)("p",null,"In terms of Cumulus integration, forwarding CloudWatch logs requires creating a mechanism, most likely a ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample"},"Lambda Function subscribed to the log group")," that will receive, filter and forward these messages to the SNS topic."),(0,i.yg)("p",null,"As a very simple example, we could create a function that filters CloudWatch logs created by the ",(0,i.yg)("inlineCode",{parentName:"p"},"@cumulus/logger")," package and sends email notifications for ",(0,i.yg)("inlineCode",{parentName:"p"},"error")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"fatal")," log levels, adapting the example linked above:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const zlib = require('zlib');\nconst { SNS } = require('@aws-sdk/client-sns');\nconst { promisify } = require('util');\n\nconst gunzip = promisify(zlib.gunzip);\nconst sns = new SNS();\n\nexports.handler = async (event) => {\n  const payload = Buffer.from(event.awslogs.data, 'base64');\n  const decompressedData = await gunzip(payload);\n  const logData = JSON.parse(decompressedData.toString('ascii'));\n  return await Promise.all(logData.logEvents.map(async (logEvent) => {\n    const logMessage = JSON.parse(logEvent.message);\n    if (['error', 'fatal'].includes(logMessage.level)) {\n      return sns.publish({\n        TopicArn: process.env.EmailReportingTopicArn,\n        Message: logEvent.message\n      }).promise();\n    }\n    return Promise.resolve();\n  }));\n};\n")),(0,i.yg)("p",null,"After creating the SNS topic, We can deploy this code as a lambda function, ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample"},"following the setup steps from Amazon"),". Make sure to include your SNS topic ARN as an environment variable on the lambda function by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"--environment")," option on ",(0,i.yg)("inlineCode",{parentName:"p"},"aws lambda create-function"),"."),(0,i.yg)("p",null,"You will need to create subscription filters for each log group you want to receive emails for. We recommend automating this as much as possible, and you could very well handle this via Terraform, such as using a module to deploy filters alongside log groups, or exporting the log group names to an all-in-one email notification module."))}g.isMDXComponent=!0}}]);