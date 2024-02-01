"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[19812],{95788:(e,t,r)=>{r.d(t,{Iu:()=>l,yg:()=>f});var s=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,i=function(e,t){if(null==e)return{};var r,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=s.createContext({}),c=function(e){var t=s.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return s.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(r),p=i,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||n;return r?s.createElement(f,a(a({ref:t},l),{},{components:r})):s.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<n;c++)a[c]=r[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=r(45072),i=r(95656),n=(r(11504),r(95788)),a=["components"],o={id:"distribution-metrics",title:"Cumulus Distribution Metrics",hide_title:!1},u=void 0,c={unversionedId:"features/distribution-metrics",id:"version-v11.0.0/features/distribution-metrics",title:"Cumulus Distribution Metrics",description:"It is possible to configure Cumulus and the Cumulus Dashboard to display information about the successes and failures of requests for data.  This requires the Cumulus instance to deliver Cloudwatch Logs and S3 Server Access logs to an ELK stack.",source:"@site/versioned_docs/version-v11.0.0/features/distribution-metrics.md",sourceDirName:"features",slug:"/features/distribution-metrics",permalink:"/cumulus/docs/v11.0.0/features/distribution-metrics",draft:!1,tags:[],version:"v11.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"distribution-metrics",title:"Cumulus Distribution Metrics",hide_title:!1},sidebar:"docs",previous:{title:"Ancillary Metadata Export",permalink:"/cumulus/docs/v11.0.0/features/ancillary_metadata"},next:{title:"Writing logs for ESDIS Metrics",permalink:"/cumulus/docs/v11.0.0/features/logging-esdis-metrics"}},l={},d=[{value:"ESDIS Metrics in NGAP",id:"esdis-metrics-in-ngap",level:2},{value:"Cumulus / ESDIS Metrics distribution system",id:"cumulus--esdis-metrics-distribution-system",level:3}],m={toc:d},p="wrapper";function f(e){var t=e.components,o=(0,i.c)(e,a);return(0,n.yg)(p,(0,s.c)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"It is possible to configure Cumulus and the Cumulus Dashboard to display information about the successes and failures of requests for data.  This requires the Cumulus instance to deliver Cloudwatch Logs and S3 Server Access logs to an ELK stack."),(0,n.yg)("h2",{id:"esdis-metrics-in-ngap"},"ESDIS Metrics in NGAP"),(0,n.yg)("p",null,"Work with the ESDIS metrics team to set up permissions and access to forward ",(0,n.yg)("a",{parentName:"p",href:"../deployment/cloudwatch-logs-delivery"},"Cloudwatch Logs to a shared AWS:Logs:Destination")," as well as transferring your ",(0,n.yg)("a",{parentName:"p",href:"../deployment/share-s3-access-logs"},"S3 Server Access logs to a metrics team bucket"),"."),(0,n.yg)("p",null,"The metrics team has taken care of setting up logstash to ingest the files that get delivered to their bucket into their Elasticsearch instance."),(0,n.yg)("p",null,"Once Cumulus has been configured to deliver Cloudwatch logs to the ESDIS Metrics team, you can use the Elasticsearch indexes to create the necessary target patterns on the dashboard. These are often ",(0,n.yg)("inlineCode",{parentName:"p"},"<daac>-cloudwatch-cumulus-<env>-*")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"<daac>-distribution-<env>-*"),", but they will depend on your specific Elastiscearch setup."),(0,n.yg)("h3",{id:"cumulus--esdis-metrics-distribution-system"},"Cumulus / ESDIS Metrics distribution system"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Architecture diagram showing how logs are replicated from a Cumulus instance to the ESDIS Metrics account and accessed by the Cumulus dashboard",src:r(41248).c,width:"1760",height:"1360"})))}f.isMDXComponent=!0},41248:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/AWS-Cross-account-log-delivery-and-metrics-75732fddd412fd0a7725ed9c876294dd.png"}}]);