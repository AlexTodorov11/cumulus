"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[10676],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>f});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||g[d]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(45072),o=r(95656),a=(r(11504),r(95788)),c=["components"],s={id:"locating-access-logs",title:"Locating S3 Access Logs",hide_title:!1},i=void 0,l={unversionedId:"operator-docs/locating-access-logs",id:"version-v9.9.0/operator-docs/locating-access-logs",title:"Locating S3 Access Logs",description:"When enabling S3 Access Logs for EMS Reporting you configured a TargetBucket and TargetPrefix.  Inside the TargetBucket at the TargetPrefix is where you will find the raw S3 access logs.",source:"@site/versioned_docs/version-v9.9.0/operator-docs/locating-access-logs.md",sourceDirName:"operator-docs",slug:"/operator-docs/locating-access-logs",permalink:"/cumulus/docs/v9.9.0/operator-docs/locating-access-logs",draft:!1,tags:[],version:"v9.9.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"locating-access-logs",title:"Locating S3 Access Logs",hide_title:!1},sidebar:"Operator Docs",previous:{title:"About Operator Docs",permalink:"/cumulus/docs/v9.9.0/operator-docs/about-operator-docs"},next:{title:"Cumulus Data Management Types",permalink:"/cumulus/docs/v9.9.0/configuration/data-management-types"}},p={},u=[],g={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,o.c)(e,c);return(0,a.yg)(d,(0,n.c)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"When ",(0,a.yg)("a",{parentName:"p",href:"../configuration/server_access_logging"},"enabling S3 Access Logs")," for EMS Reporting you configured a ",(0,a.yg)("inlineCode",{parentName:"p"},"TargetBucket")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"TargetPrefix"),".  Inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"TargetBucket")," at the ",(0,a.yg)("inlineCode",{parentName:"p"},"TargetPrefix")," is where you will find the raw S3 access logs."),(0,a.yg)("p",null,"In a standard deployment, this will be your stack's ",(0,a.yg)("inlineCode",{parentName:"p"},"<internal bucket name>")," and a key prefix of ",(0,a.yg)("inlineCode",{parentName:"p"},"<stack>/ems-distribution/s3-server-access-logs/")))}f.isMDXComponent=!0}}]);