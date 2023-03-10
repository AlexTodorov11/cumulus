"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[80940],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>k});var r=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(l),m=n,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return l?r.createElement(k,o(o({ref:t},d),{},{components:l})):r.createElement(k,o({ref:t},d))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=l[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},30678:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=l(87462),n=l(63366),a=(l(67294),l(3905)),o=["components"],i={id:"granule-workflows",title:"Granule Workflows",hide_title:!1},u=void 0,s={unversionedId:"operator-docs/granule-workflows",id:"version-v11.1.0/operator-docs/granule-workflows",title:"Granule Workflows",description:"Failed Granule",source:"@site/versioned_docs/version-v11.1.0/operator-docs/granule-workflows.md",sourceDirName:"operator-docs",slug:"/operator-docs/granule-workflows",permalink:"/cumulus/docs/v11.1.0/operator-docs/granule-workflows",draft:!1,tags:[],version:"v11.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"granule-workflows",title:"Granule Workflows",hide_title:!1},sidebar:"Operator Docs",previous:{title:"Create Rule In Cumulus",permalink:"/cumulus/docs/v11.1.0/operator-docs/create-rule-in-cumulus"},next:{title:"Trigger a Workflow Execution",permalink:"/cumulus/docs/v11.1.0/operator-docs/trigger-workflow"}},d={},p=[{value:"Failed Granule",id:"failed-granule",level:2},{value:"Delete and Ingest",id:"delete-and-ingest",level:3},{value:"Reingest",id:"reingest",level:3},{value:"Delete and Ingest",id:"delete-and-ingest-1",level:3},{value:"Multiple Failed Granules",id:"multiple-failed-granules",level:2}],c={toc:p},m="wrapper";function k(e){var t=e.components,i=(0,n.Z)(e,o);return(0,a.kt)(m,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"failed-granule"},"Failed Granule"),(0,a.kt)("h3",{id:"delete-and-ingest"},"Delete and Ingest"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Delete Granule")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": Granules published to CMR will need to be removed from CMR via the dashboard prior to deletion")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Ingest Granule via Ingest Rule")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Re-trigger a one-time, kinesis, SQS, or SNS rule or a scheduled rule will re-discover and reingest the deleted granule.")),(0,a.kt)("h3",{id:"reingest"},"Reingest"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select Failed Granule")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the Cumulus dashboard, go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Collections")," page."),(0,a.kt)("li",{parentName:"ul"},"Use search field to find the granule.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Re-ingest Granule")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Collections")," page."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Reingest")," and a modal will pop up for your confirmation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Reingest modal workflow",src:l(85640).Z,width:"2876",height:"1524"})),(0,a.kt)("h3",{id:"delete-and-ingest-1"},"Delete and Ingest"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bulk Delete Granules")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Granules")," page."),(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"Bulk Delete")," button to bulk delete selected granules or select via a Kibana query")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": You can optionally force deletion from CMR")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Ingest Granules via Ingest Rule")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Re-trigger one-time, kinesis, SQS, or SNS rules or scheduled rules will re-discover and reingest the deleted granule.")),(0,a.kt)("h2",{id:"multiple-failed-granules"},"Multiple Failed Granules"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select Failed Granules")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the Cumulus dashboard, go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Collections")," page."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Failed Granules"),"."),(0,a.kt)("li",{parentName:"ul"},"Select multiple granules.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of selected multiple granules",src:l(21581).Z,width:"2876",height:"1524"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Bulk Re-ingest Granules")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Reingest")," and a modal will pop up for your confirmation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Bulk Reingest modal workflow",src:l(46002).Z,width:"2876",height:"1524"})))}k.isMDXComponent=!0},21581:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/cd_reingest_bulk-90de39c530a3aad6c5466cab4f47977b.png"},85640:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/cd_reingest_granule_modal-2efbff70030144323cff45ed965f2c2a.png"},46002:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/cd_reingest_modal_bulk-0e583e98cbe044839e1b7e91302a906e.png"}}]);