"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[93685],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||u;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<u;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(58168),i=n(98587),u=(n(96540),n(15680)),o=["components"],a={id:"cumulus_distribution_migration",title:"Migrate from TEA deployment to Cumulus Distribution",hide_title:!1},s=void 0,l={unversionedId:"upgrade-notes/cumulus_distribution_migration",id:"version-v13.0.0/upgrade-notes/cumulus_distribution_migration",title:"Migrate from TEA deployment to Cumulus Distribution",description:"Background",source:"@site/versioned_docs/version-v13.0.0/upgrade-notes/cumulus-distribution.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/cumulus_distribution_migration",permalink:"/cumulus/docs/v13.0.0/upgrade-notes/cumulus_distribution_migration",draft:!1,tags:[],version:"v13.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"cumulus_distribution_migration",title:"Migrate from TEA deployment to Cumulus Distribution",hide_title:!1},sidebar:"docs",previous:{title:"Upgrade to RDS release",permalink:"/cumulus/docs/v13.0.0/upgrade-notes/upgrade-rds"},next:{title:"Updates to task granule file schemas",permalink:"/cumulus/docs/v13.0.0/upgrade-notes/update-task-file-schemas"}},c={},m=[{value:"Background",id:"background",level:2},{value:"Configuring a Cumulus Distribution deployment",id:"configuring-a-cumulus-distribution-deployment",level:2},{value:"Important note if migrating from TEA to Cumulus Distribution",id:"important-note-if-migrating-from-tea-to-cumulus-distribution",level:2}],d={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.A)(e,o);return(0,u.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.yg)("h2",{id:"background"},"Background"),(0,u.yg)("p",null,"The Cumulus Distribution API is configured to use the AWS Cognito OAuth client. This API can be used instead of the Thin Egress App, which is the default distribution API if using the ",(0,u.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy"},"Deployment Template"),"."),(0,u.yg)("h2",{id:"configuring-a-cumulus-distribution-deployment"},"Configuring a Cumulus Distribution deployment"),(0,u.yg)("p",null,"See ",(0,u.yg)("a",{parentName:"p",href:"/cumulus/docs/v13.0.0/deployment/cumulus_distribution"},"these instructions")," for deploying the Cumulus Distribution API."),(0,u.yg)("h2",{id:"important-note-if-migrating-from-tea-to-cumulus-distribution"},"Important note if migrating from TEA to Cumulus Distribution"),(0,u.yg)("p",null,"If you already have a deployment using the TEA distribution and want to switch to Cumulus Distribution, there will be an API Gateway change. This means that there will be downtime while you update your CloudFront endpoint to use\nthe new API gateway."))}g.isMDXComponent=!0}}]);