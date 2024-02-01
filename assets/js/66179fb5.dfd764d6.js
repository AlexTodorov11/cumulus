"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[42768],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>y});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=a(45072),n=a(95656),s=(a(11504),a(95788)),i=["components"],o={id:"ancillary_metadata",title:"Ancillary Metadata Export",hide_title:!1},l=void 0,u={unversionedId:"features/ancillary_metadata",id:"version-v9.0.0/features/ancillary_metadata",title:"Ancillary Metadata Export",description:"This feature utilizes the type key on a files object in a Cumulus granule.  It uses the key  to provide a mechanism where granule discovery, processing and other tasks can set and use this value to facilitate metadata export to CMR.",source:"@site/versioned_docs/version-v9.0.0/features/ancillary_metadata.md",sourceDirName:"features",slug:"/features/ancillary_metadata",permalink:"/cumulus/docs/v9.0.0/features/ancillary_metadata",draft:!1,tags:[],version:"v9.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"ancillary_metadata",title:"Ancillary Metadata Export",hide_title:!1},sidebar:"docs",previous:{title:"Lambda Versioning",permalink:"/cumulus/docs/v9.0.0/features/lambda_versioning"},next:{title:"Cumulus Distribution Metrics",permalink:"/cumulus/docs/v9.0.0/features/distribution-metrics"}},c={},p=[{value:"Tasks setting type",id:"tasks-setting-type",level:2},{value:"Discover Granules",id:"discover-granules",level:3},{value:"Parse PDR",id:"parse-pdr",level:3},{value:"CNMToCMALambdaFunction",id:"cnmtocmalambdafunction",level:3},{value:"Tasks using type",id:"tasks-using-type",level:2},{value:"Move Granules",id:"move-granules",level:3}],d={toc:p},m="wrapper";function y(e){var t=e.components,a=(0,n.c)(e,i);return(0,s.yg)(m,(0,r.c)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This feature utilizes the ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," key on a files object in a Cumulus ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/models/schemas.js"},"granule"),".  It uses the key  to provide a mechanism where granule discovery, processing and other tasks can set and use this value to facilitate metadata export to CMR."),(0,s.yg)("h2",{id:"tasks-setting-type"},"Tasks setting type"),(0,s.yg)("h3",{id:"discover-granules"},(0,s.yg)("a",{parentName:"h3",href:"../workflow_tasks/discover_granules"},"Discover Granules")),(0,s.yg)("p",null,"  Uses the Collection ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," key to set the value for files on discovered granules in it's output."),(0,s.yg)("h3",{id:"parse-pdr"},(0,s.yg)("a",{parentName:"h3",href:"../workflow_tasks/parse_pdr"},"Parse PDR")),(0,s.yg)("p",null,"  Uses a task-specific mapping to map PDR 'FILE_TYPE' to a CNM type to set ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," on granules from the PDR."),(0,s.yg)("h3",{id:"cnmtocmalambdafunction"},"CNMToCMALambdaFunction"),(0,s.yg)("p",null,"  Natively supports types that are included in incoming messages to a ",(0,s.yg)("a",{parentName:"p",href:"../data-cookbooks/cnm-workflow"},"CNM Workflow"),"."),(0,s.yg)("h2",{id:"tasks-using-type"},"Tasks using type"),(0,s.yg)("h3",{id:"move-granules"},(0,s.yg)("a",{parentName:"h3",href:"../workflow_tasks/move_granules"},"Move Granules")),(0,s.yg)("p",null,"  Uses the granule file ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," key to update UMM/ECHO 10 CMR files passed in as candidates to the task. This task adds the external facing URLs to the CMR metadata file based on the ",(0,s.yg)("inlineCode",{parentName:"p"},"type"),".\nSee the ",(0,s.yg)("a",{parentName:"p",href:"../data-cookbooks/tracking-files#publish-to-cmr"},"file tracking data cookbook")," for a detailed mapping.\nIf a non-CNM ",(0,s.yg)("inlineCode",{parentName:"p"},"type")," is specified, the task assumes it is a 'data' file."))}y.isMDXComponent=!0}}]);