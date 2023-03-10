"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[59496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"cloudwatch-retention",title:"Cloudwatch Retention",hide_title:!1},c=void 0,s={unversionedId:"configuration/cloudwatch-retention",id:"version-v11.0.0/configuration/cloudwatch-retention",title:"Cloudwatch Retention",description:"Our lambdas dump logs to AWS CloudWatch. By default, these logs exist indefinitely. However, there are ways to specify a duration for log retention.",source:"@site/versioned_docs/version-v11.0.0/configuration/cloudwatch-retention.md",sourceDirName:"configuration",slug:"/configuration/cloudwatch-retention",permalink:"/cumulus/docs/v11.0.0/configuration/cloudwatch-retention",draft:!1,tags:[],version:"v11.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"cloudwatch-retention",title:"Cloudwatch Retention",hide_title:!1},sidebar:"docs",previous:{title:"S3 Server Access Logging",permalink:"/cumulus/docs/v11.0.0/configuration/server_access_logging"},next:{title:"Setting S3 Lifecycle Policies",permalink:"/cumulus/docs/v11.0.0/configuration/lifecycle-policies"}},u={},p=[{value:"aws-cli",id:"aws-cli",level:2},{value:"AWS Management Console",id:"aws-management-console",level:2}],d={toc:p},m="wrapper";function g(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)(m,(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our lambdas dump logs to ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cloudwatch/"},"AWS CloudWatch"),". By default, these logs exist indefinitely. However, there are ways to specify a duration for log retention."),(0,a.kt)("h2",{id:"aws-cli"},"aws-cli"),(0,a.kt)("p",null,"In addition to getting your aws-cli ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html"},"set-up"),", there are two values you'll need to acquire."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"log-group-name"),": the name of the log group who's retention policy (retention time) you'd like to change. We'll use ",(0,a.kt)("inlineCode",{parentName:"li"},"/aws/lambda/KinesisInboundLogger")," in our examples."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"retention-in-days"),": the number of days you'd like to retain the logs in the specified log group for. There is a list of possible values available in the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/reference/logs/put-retention-policy.html"},"aws logs documentation"),".")),(0,a.kt)("p",null,"For example, if we wanted to set log retention to 30 days on our ",(0,a.kt)("inlineCode",{parentName:"p"},"KinesisInboundLogger")," lambda, we would write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'aws logs put-retention-policy --log-group-name "/aws/lambda/KinesisInboundLogger" --retention-in-days 30\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The aws-cli log command that we're using is explained in detail ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/reference/logs/put-retention-policy.html"},"here"),"."),(0,a.kt)("h2",{id:"aws-management-console"},"AWS Management Console"),(0,a.kt)("p",null,"Changing the log retention policy in the AWS Management Console is a fairly simple process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the CloudWatch service in the AWS Management Console."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Logs")," entry on the sidebar."),(0,a.kt)("li",{parentName:"ol"},"Find the Log Group who's retention policy you're interested in changing."),(0,a.kt)("li",{parentName:"ol"},"Click on the value in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Expire Events After")," column."),(0,a.kt)("li",{parentName:"ol"},"Enter/Select the number of days you'd like to retain logs in that log group for.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of AWS console showing how to configure the retention period for Cloudwatch logs",src:n(6824).Z,width:"1156",height:"841"})))}g.isMDXComponent=!0},6824:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cloudwatch-retention-841daeaa6b834c931b9dc2872a47b814.png"}}]);