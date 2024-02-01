"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[54040],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>y});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(a),p=r,y=c["".concat(u,".").concat(p)]||c[p]||m[p]||o;return a?n.createElement(y,s(s({ref:t},d),{},{components:a})):n.createElement(y,s({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},36192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(45072),r=a(95656),o=(a(11504),a(95788)),s=["components"],i={id:"data_in_dynamodb",title:"Cumulus Metadata in DynamoDB",hide_title:!1},u=void 0,l={unversionedId:"features/data_in_dynamodb",id:"version-v10.1.0/features/data_in_dynamodb",title:"Cumulus Metadata in DynamoDB",description:"- DynamoDB Auto Scaling",source:"@site/versioned_docs/version-v10.1.0/features/data_in_dynamodb.md",sourceDirName:"features",slug:"/features/data_in_dynamodb",permalink:"/cumulus/docs/v10.1.0/features/data_in_dynamodb",draft:!1,tags:[],version:"v10.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"data_in_dynamodb",title:"Cumulus Metadata in DynamoDB",hide_title:!1},sidebar:"docs",previous:{title:"Cumulus Backup and Restore",permalink:"/cumulus/docs/v10.1.0/features/backup_and_restore"},next:{title:"Dead Letter Queues",permalink:"/cumulus/docs/v10.1.0/features/dead_letter_queues"}},d={},c=[{value:"DynamoDB Auto Scaling",id:"dynamodb-auto-scaling",level:2}],m={toc:c},p="wrapper";function y(e){var t=e.components,a=(0,r.c)(e,s);return(0,o.yg)(p,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#dynamodb-auto-scaling"},"DynamoDB Auto Scaling"))),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cumulus/api"},"@cumulus/api")," uses a number of methods to preserve the metadata generated in a Cumulus instance."),(0,o.yg)("p",null,"All configurations and system-generated metadata is stored in DynamoDB tables except the logs. System logs are stored in the AWS CloudWatch service."),(0,o.yg)("p",null,"Amazon DynamoDB stores three geographically distributed replicas of each table to enable high availability and data durability. Amazon DynamoDB runs exclusively on solid-state drives (SSDs). SSDs help AWS achieve the design goals of predictable low-latency response times for storing and accessing data at any scale."),(0,o.yg)("h2",{id:"dynamodb-auto-scaling"},"DynamoDB Auto Scaling"),(0,o.yg)("p",null,"Cumulus deployed tables from the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/data-persistence"},"data-persistence module")," are set to ",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand"},(0,o.yg)("inlineCode",{parentName:"a"},"on-demand"))," mode."))}y.isMDXComponent=!0}}]);