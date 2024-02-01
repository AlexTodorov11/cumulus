"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[88668],{95788:(e,t,n)=>{n.d(t,{Iu:()=>g,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(45072),a=n(95656),o=(n(11504),n(95788)),i=["components"],c={id:"server_access_logging",title:"S3 Server Access Logging",hide_title:!1},s=void 0,l={unversionedId:"configuration/server_access_logging",id:"version-v10.1.0/configuration/server_access_logging",title:"S3 Server Access Logging",description:"Via AWS Console",source:"@site/versioned_docs/version-v10.1.0/configuration/server_access_logging.md",sourceDirName:"configuration",slug:"/configuration/server_access_logging",permalink:"/cumulus/docs/v10.1.0/configuration/server_access_logging",draft:!1,tags:[],version:"v10.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"server_access_logging",title:"S3 Server Access Logging",hide_title:!1},sidebar:"docs",previous:{title:"Monitoring Best Practices",permalink:"/cumulus/docs/v10.1.0/configuration/monitoring-readme"},next:{title:"Cloudwatch Retention",permalink:"/cumulus/docs/v10.1.0/configuration/cloudwatch-retention"}},g={},u=[{value:"Via AWS Console",id:"via-aws-console",level:2},{value:"Via AWS Command Line Interface",id:"via-aws-command-line-interface",level:2}],p={toc:u},m="wrapper";function d(e){var t=e.components,n=(0,a.c)(e,i);return(0,o.yg)(m,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"via-aws-console"},"Via AWS Console"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/user-guide/server-access-logging.html",title:"Amazon Console Instructions"},"Enable server access logging for an S3 bucket")),(0,o.yg)("h2",{id:"via-aws-command-line-interface"},"Via ",(0,o.yg)("a",{parentName:"h2",href:"https://aws.amazon.com/cli/",title:"Amazon command line interface"},"AWS Command Line Interface")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a ",(0,o.yg)("inlineCode",{parentName:"p"},"logging.json")," file with these contents, replacing ",(0,o.yg)("inlineCode",{parentName:"p"},"<stack-internal-bucket>")," with your stack's internal bucket name, and ",(0,o.yg)("inlineCode",{parentName:"p"},"<stack>")," with the name of your cumulus stack."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "LoggingEnabled": {\n    "TargetBucket": "<stack-internal-bucket>",\n    "TargetPrefix": "<stack>/ems-distribution/s3-server-access-logs/"\n  }\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add the logging policy to each of your protected and public buckets by calling this command on each bucket."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"aws s3api put-bucket-logging --bucket <protected/public-bucket-name> --bucket-logging-status file://logging.json\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Verify the logging policy exists on your buckets."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"aws s3api get-bucket-logging --bucket <protected/public-bucket-name>\n")))))}d.isMDXComponent=!0}}]);