"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[9836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?o.createElement(d,s(s({ref:t},c),{},{components:r})):o.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"protocol",title:"Workflow Protocol",hide_title:!1},l=void 0,u={unversionedId:"workflows/protocol",id:"version-v9.9.0/workflows/protocol",title:"Workflow Protocol",description:"Configuration and Message Use Diagram",source:"@site/versioned_docs/version-v9.9.0/workflows/protocol.md",sourceDirName:"workflows",slug:"/workflows/protocol",permalink:"/cumulus/docs/v9.9.0/workflows/protocol",draft:!1,tags:[],version:"v9.9.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"protocol",title:"Workflow Protocol",hide_title:!1},sidebar:"docs",previous:{title:"Workflows",permalink:"/cumulus/docs/v9.9.0/workflows/"},next:{title:"Workflow Inputs & Outputs",permalink:"/cumulus/docs/v9.9.0/workflows/input_output"}},c={},p=[{value:"Configuration and Message Use Diagram",id:"configuration-and-message-use-diagram",level:2}],f={toc:p},m="wrapper";function d(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)(m,(0,o.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"configuration-and-message-use-diagram"},"Configuration and Message Use Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A diagram showing at which point in a workflow the Cumulus message is checked for conformity with the message schema and where the configuration is checked for conformity with the configuration schema",src:r(57285).Z,width:"779",height:"552"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configuration")," - The Cumulus workflow configuration defines everything needed to describe an instance of Cumulus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scheduler")," - This starts ingest of a collection on configured intervals."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input to Step Functions")," - The Scheduler uses the Configuration as source data to construct the input to the Workflow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AWS Step Functions")," - Run the workflows as kicked off by the scheduler or other processes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input to Task")," - The input for each task is a JSON document that conforms to the message schema."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output from Task")," - The output of each task must conform to the message schemas as well and is used as the input for the subsequent task.")))}d.isMDXComponent=!0},57285:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/cumulus_configuration_and_message_schema_diagram-05bebe36f17a76b99bce71d4bd0e4d42.png"}}]);