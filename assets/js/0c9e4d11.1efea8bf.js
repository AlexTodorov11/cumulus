"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[37796],{95788:(e,t,o)=>{o.d(t,{Iu:()=>c,yg:()=>m});var n=o(11504);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(o),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return o?n.createElement(m,l(l({ref:t},c),{},{components:o})):n.createElement(m,l({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},55612:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=o(45072),a=o(95656),r=(o(11504),o(95788)),l=["components"],i={id:"cloudwatch-logs-delivery",title:"Configure Cloudwatch Logs Delivery",hide_title:!1},s=void 0,u={unversionedId:"deployment/cloudwatch-logs-delivery",id:"version-v11.0.0/deployment/cloudwatch-logs-delivery",title:"Configure Cloudwatch Logs Delivery",description:"As an optional configuration step, it is possible to deliver CloudWatch logs to a cross-account shared AWS::Destination. An operator does this by configuring the cumulus module for your deployment as shown below. The value of the logdestinationarn variable is the ARN of a writeable log destination.",source:"@site/versioned_docs/version-v11.0.0/deployment/configure_cloudwatch_logs_delivery.md",sourceDirName:"deployment",slug:"/deployment/cloudwatch-logs-delivery",permalink:"/cumulus/docs/v11.0.0/deployment/cloudwatch-logs-delivery",draft:!1,tags:[],version:"v11.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"cloudwatch-logs-delivery",title:"Configure Cloudwatch Logs Delivery",hide_title:!1},sidebar:"docs",previous:{title:"Share S3 Access Logs",permalink:"/cumulus/docs/v11.0.0/deployment/share-s3-access-logs"},next:{title:"Upgrading Cumulus",permalink:"/cumulus/docs/v11.0.0/deployment/upgrade-readme"}},c={},d=[{value:"Logs Sent",id:"logs-sent",level:2},{value:"Additional Logs",id:"additional-logs",level:2}],p={toc:d},g="wrapper";function m(e){var t=e.components,o=(0,a.c)(e,l);return(0,r.yg)(g,(0,n.c)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"As an optional configuration step, it is possible to deliver CloudWatch logs to a cross-account shared AWS::Logs::Destination. An operator does this by configuring the ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus")," module for ",(0,r.yg)("a",{parentName:"p",href:"/cumulus/docs/v11.0.0/deployment/#configure-and-deploy-the-cumulus-tf-root-module"},"your deployment")," as shown below. The value of the ",(0,r.yg)("inlineCode",{parentName:"p"},"log_destination_arn")," variable is the ARN of a writeable log destination."),(0,r.yg)("p",null,"The value can be either an ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html"},"AWS::Logs::Destination")," or a ",(0,r.yg)("a",{parentName:"p",href:"https://aws.amazon.com/kinesis/data-streams/"},"Kinesis Stream")," ARN to which your account can write."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},"log_destination_arn           = arn:aws:[kinesis|logs]:us-east-1:123456789012:[streamName|destination:logDestinationName]\n")),(0,r.yg)("h2",{id:"logs-sent"},"Logs Sent"),(0,r.yg)("p",null,"Be default, the following logs will be sent to the destination when one is given."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ingest logs"),(0,r.yg)("li",{parentName:"ul"},"Async Operation logs"),(0,r.yg)("li",{parentName:"ul"},"Thin Egress App API Gateway logs (",(0,r.yg)("a",{parentName:"li",href:"/cumulus/docs/v11.0.0/deployment/api-gateway-logging"},"if configured"),")")),(0,r.yg)("h2",{id:"additional-logs"},"Additional Logs"),(0,r.yg)("p",null,"If additional logs are needed, you can configure ",(0,r.yg)("inlineCode",{parentName:"p"},"additional_log_groups_to_elk")," with the Cloudwatch log groups you want to send to the destination. ",(0,r.yg)("inlineCode",{parentName:"p"},"additional_log_groups_to_elk")," is a map with the key as a descriptor and the value with the Cloudwatch log group name."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},'additional_log_groups_to_elk = {\n  "HelloWorldTask" = "/aws/lambda/cumulus-example-HelloWorld"\n  "MyCustomTask" = "my-custom-task-log-group"\n}\n')))}m.isMDXComponent=!0}}]);