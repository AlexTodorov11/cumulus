"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[71022],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),y=n,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||s;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},75549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=a(58168),n=a(98587),s=(a(96540),a(15680)),i=["components"],o={id:"ancillary_metadata",title:"Ancillary Metadata Export",hide_title:!1},l=void 0,u={unversionedId:"features/ancillary_metadata",id:"version-v13.4.0/features/ancillary_metadata",title:"Ancillary Metadata Export",description:"This feature utilizes the type key on a files object in a Cumulus granule.  It uses the key  to provide a mechanism where granule discovery, processing and other tasks can set and use this value to facilitate metadata export to CMR.",source:"@site/versioned_docs/version-v13.4.0/features/ancillary_metadata.md",sourceDirName:"features",slug:"/features/ancillary_metadata",permalink:"/cumulus/docs/v13.4.0/features/ancillary_metadata",draft:!1,tags:[],version:"v13.4.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"ancillary_metadata",title:"Ancillary Metadata Export",hide_title:!1},sidebar:"docs",previous:{title:"Reconciliation Reports",permalink:"/cumulus/docs/v13.4.0/features/reports"},next:{title:"Cumulus Distribution Metrics",permalink:"/cumulus/docs/v13.4.0/features/distribution-metrics"}},p={},c=[{value:"Tasks setting type",id:"tasks-setting-type",level:2},{value:"Discover Granules",id:"discover-granules",level:3},{value:"Parse PDR",id:"parse-pdr",level:3},{value:"CNMToCMALambdaFunction",id:"cnmtocmalambdafunction",level:3},{value:"Tasks using type",id:"tasks-using-type",level:2},{value:"Move Granules",id:"move-granules",level:3}],d={toc:c},y="wrapper";function m(e){var t=e.components,a=(0,n.A)(e,i);return(0,s.yg)(y,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This feature utilizes the ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," key on a files object in a Cumulus ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"granule"),".  It uses the key  to provide a mechanism where granule discovery, processing and other tasks can set and use this value to facilitate metadata export to CMR."),(0,s.yg)("h2",{id:"tasks-setting-type"},"Tasks setting type"),(0,s.yg)("h3",{id:"discover-granules"},(0,s.yg)("a",{parentName:"h3",href:"../workflow_tasks/discover_granules"},"Discover Granules")),(0,s.yg)("p",null,"  Uses the Collection ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," key to set the value for files on discovered granules in it's output."),(0,s.yg)("h3",{id:"parse-pdr"},(0,s.yg)("a",{parentName:"h3",href:"../workflow_tasks/parse_pdr"},"Parse PDR")),(0,s.yg)("p",null,"  Uses a task-specific mapping to map PDR 'FILE_TYPE' to a CNM type to set ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," on granules from the PDR."),(0,s.yg)("h3",{id:"cnmtocmalambdafunction"},"CNMToCMALambdaFunction"),(0,s.yg)("p",null,"  Natively supports types that are included in incoming messages to a ",(0,s.yg)("a",{parentName:"p",href:"../data-cookbooks/cnm-workflow"},"CNM Workflow"),"."),(0,s.yg)("h2",{id:"tasks-using-type"},"Tasks using type"),(0,s.yg)("h3",{id:"move-granules"},(0,s.yg)("a",{parentName:"h3",href:"../workflow_tasks/move_granules"},"Move Granules")),(0,s.yg)("p",null,"  Uses the granule file ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," key to update UMM/ECHO 10 CMR files passed in as candidates to the task. This task adds the external facing URLs to the CMR metadata file based on the ",(0,s.yg)("inlineCode",{parentName:"p"},"type"),".\nSee the ",(0,s.yg)("a",{parentName:"p",href:"../data-cookbooks/tracking-files#publish-to-cmr"},"file tracking data cookbook")," for a detailed mapping.\nIf a non-CNM ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," is specified, the task assumes it is a 'data' file."))}m.isMDXComponent=!0}}]);