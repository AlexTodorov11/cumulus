"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[69988],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,u=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||u;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=r.length,o=new Array(u);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<u;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(58168),i=r(98587),u=(r(96540),r(15680)),o=["components"],a={id:"cumulus_distribution_migration",title:"Migrate from TEA deployment to Cumulus Distribution",hide_title:!1},s=void 0,l={unversionedId:"upgrade-notes/cumulus_distribution_migration",id:"version-v15.0.2/upgrade-notes/cumulus_distribution_migration",title:"Migrate from TEA deployment to Cumulus Distribution",description:"Background",source:"@site/versioned_docs/version-v15.0.2/upgrade-notes/cumulus-distribution.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/cumulus_distribution_migration",permalink:"/cumulus/docs/v15.0.2/upgrade-notes/cumulus_distribution_migration",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"cumulus_distribution_migration",title:"Migrate from TEA deployment to Cumulus Distribution",hide_title:!1},sidebar:"docs",previous:{title:"Upgrade to RDS release",permalink:"/cumulus/docs/v15.0.2/upgrade-notes/upgrade-rds"},next:{title:"Updates to task granule file schemas",permalink:"/cumulus/docs/v15.0.2/upgrade-notes/update-task-file-schemas"}},c={},m=[{value:"Background",id:"background",level:2},{value:"Configuring a Cumulus Distribution deployment",id:"configuring-a-cumulus-distribution-deployment",level:2},{value:"Important note if migrating from TEA to Cumulus Distribution",id:"important-note-if-migrating-from-tea-to-cumulus-distribution",level:2}],p={toc:m},d="wrapper";function g(e){var t=e.components,r=(0,i.A)(e,o);return(0,u.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,u.yg)("h2",{id:"background"},"Background"),(0,u.yg)("p",null,"The Cumulus Distribution API is configured to use the AWS Cognito OAuth client. This API can be used instead of the Thin Egress App, which is the default distribution API if using the ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy"},"Deployment Template"),"."),(0,u.yg)("h2",{id:"configuring-a-cumulus-distribution-deployment"},"Configuring a Cumulus Distribution deployment"),(0,u.yg)("p",null,"See ",(0,u.yg)("a",{parentName:"p",href:"/cumulus/docs/v15.0.2/deployment/cumulus_distribution"},"these instructions")," for deploying the Cumulus Distribution API."),(0,u.yg)("h2",{id:"important-note-if-migrating-from-tea-to-cumulus-distribution"},"Important note if migrating from TEA to Cumulus Distribution"),(0,u.yg)("p",null,"If you already have a deployment using the TEA distribution and want to switch to Cumulus Distribution, there will be an API Gateway change. This means that there will be downtime while you update your CloudFront endpoint to use\nthe new API gateway."))}g.isMDXComponent=!0}}]);