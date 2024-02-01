"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[47968],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>g});var o=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,g=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?o.createElement(g,s(s({ref:t},u),{},{components:r})):o.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(45072),n=r(95656),a=(r(11504),r(95788)),s=["components"],i={id:"protocol",title:"Workflow Protocol",hide_title:!1},c=void 0,l={unversionedId:"workflows/protocol",id:"version-v9.9.0/workflows/protocol",title:"Workflow Protocol",description:"Configuration and Message Use Diagram",source:"@site/versioned_docs/version-v9.9.0/workflows/protocol.md",sourceDirName:"workflows",slug:"/workflows/protocol",permalink:"/cumulus/docs/v9.9.0/workflows/protocol",draft:!1,tags:[],version:"v9.9.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"protocol",title:"Workflow Protocol",hide_title:!1},sidebar:"docs",previous:{title:"Workflows",permalink:"/cumulus/docs/v9.9.0/workflows/"},next:{title:"Workflow Inputs & Outputs",permalink:"/cumulus/docs/v9.9.0/workflows/input_output"}},u={},p=[{value:"Configuration and Message Use Diagram",id:"configuration-and-message-use-diagram",level:2}],f={toc:p},m="wrapper";function g(e){var t=e.components,i=(0,n.c)(e,s);return(0,a.yg)(m,(0,o.c)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"configuration-and-message-use-diagram"},"Configuration and Message Use Diagram"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"A diagram showing at which point in a workflow the Cumulus message is checked for conformity with the message schema and where the configuration is checked for conformity with the configuration schema",src:r(30992).c,width:"779",height:"552"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Configuration")," - The Cumulus workflow configuration defines everything needed to describe an instance of Cumulus."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Scheduler")," - This starts ingest of a collection on configured intervals."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Input to Step Functions")," - The Scheduler uses the Configuration as source data to construct the input to the Workflow."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"AWS Step Functions")," - Run the workflows as kicked off by the scheduler or other processes."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Input to Task")," - The input for each task is a JSON document that conforms to the message schema."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Output from Task")," - The output of each task must conform to the message schemas as well and is used as the input for the subsequent task.")))}g.isMDXComponent=!0},30992:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/cumulus_configuration_and_message_schema_diagram-05bebe36f17a76b99bce71d4bd0e4d42.png"}}]);