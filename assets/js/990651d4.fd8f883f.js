"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[37716],{95788:(e,l,t)=>{t.d(l,{Iu:()=>g,yg:()=>m});var n=t(11504);function r(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function a(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?a(Object(t),!0).forEach((function(l){r(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function i(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var l=n.useContext(u),t=l;return e&&(t="function"==typeof e?e(l):o(o({},l),e)),t},g=function(e){var l=s(e.components);return n.createElement(u.Provider,{value:l},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},p=n.forwardRef((function(e,l){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=s(t),p=r,m=d["".concat(u,".").concat(p)]||d[p]||c[p]||a;return t?n.createElement(m,o(o({ref:l},g),{},{components:t})):n.createElement(m,o({ref:l},g))}));function m(e,l){var t=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var u in l)hasOwnProperty.call(l,u)&&(i[u]=l[u]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92176:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>g,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(45072),r=t(95656),a=(t(11504),t(95788)),o=["components"],i={id:"granule-workflows",title:"Granule Workflows",hide_title:!1},u=void 0,s={unversionedId:"operator-docs/granule-workflows",id:"version-v16.1.3/operator-docs/granule-workflows",title:"Granule Workflows",description:"Failed Granule",source:"@site/versioned_docs/version-v16.1.3/operator-docs/granule-workflows.md",sourceDirName:"operator-docs",slug:"/operator-docs/granule-workflows",permalink:"/cumulus/docs/v16.1.3/operator-docs/granule-workflows",draft:!1,tags:[],version:"v16.1.3",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1706031284,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"granule-workflows",title:"Granule Workflows",hide_title:!1},sidebar:"docs",previous:{title:"Create Rule In Cumulus",permalink:"/cumulus/docs/v16.1.3/operator-docs/create-rule-in-cumulus"},next:{title:"Trigger a Workflow Execution",permalink:"/cumulus/docs/v16.1.3/operator-docs/trigger-workflow"}},g={},d=[{value:"Failed Granule",id:"failed-granule",level:2},{value:"Delete and Ingest",id:"delete-and-ingest",level:3},{value:"Reingest",id:"reingest",level:3},{value:"Delete and Ingest",id:"delete-and-ingest-1",level:3},{value:"Multiple Failed Granules",id:"multiple-failed-granules",level:2}],c={toc:d},p="wrapper";function m(e){var l=e.components,i=(0,r.c)(e,o);return(0,a.yg)(p,(0,n.c)({},c,i,{components:l,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"failed-granule"},"Failed Granule"),(0,a.yg)("h3",{id:"delete-and-ingest"},"Delete and Ingest"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Delete Granule")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Granules published to CMR will need to be removed from CMR via the dashboard prior to deletion.")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Ingest Granule via Ingest Rule")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Re-trigger a one-time, kinesis, SQS, or SNS rule or a scheduled rule will re-discover and reingest the deleted granule.")),(0,a.yg)("h3",{id:"reingest"},"Reingest"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Select Failed Granule")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In the Cumulus dashboard, go to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Collections")," page."),(0,a.yg)("li",{parentName:"ul"},"Use search field to find the granule.")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Re-ingest Granule")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Go to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Collections")," page."),(0,a.yg)("li",{parentName:"ul"},"Click on ",(0,a.yg)("inlineCode",{parentName:"li"},"Reingest")," and a modal will pop up for your confirmation.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of the Reingest modal workflow",src:t(54688).c,width:"2876",height:"1524"})),(0,a.yg)("h3",{id:"delete-and-ingest-1"},"Delete and Ingest"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Bulk Delete Granules")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Go to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Granules")," page."),(0,a.yg)("li",{parentName:"ul"},"Use the ",(0,a.yg)("inlineCode",{parentName:"li"},"Bulk Delete")," button to bulk delete selected granules or select via a Kibana query")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You can optionally force deletion from CMR.")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Ingest Granules via Ingest Rule")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Re-trigger one-time, kinesis, SQS, or SNS rules or scheduled rules will re-discover and reingest the deleted granule.")),(0,a.yg)("h2",{id:"multiple-failed-granules"},"Multiple Failed Granules"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Select Failed Granules")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In the Cumulus dashboard, go to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Collections")," page."),(0,a.yg)("li",{parentName:"ul"},"Click on ",(0,a.yg)("inlineCode",{parentName:"li"},"Failed Granules"),"."),(0,a.yg)("li",{parentName:"ul"},"Select multiple granules.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of selected multiple granules",src:t(40556).c,width:"2876",height:"1524"})),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Bulk Re-ingest Granules")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Click on ",(0,a.yg)("inlineCode",{parentName:"li"},"Reingest")," and a modal will pop up for your confirmation.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of Bulk Reingest modal workflow",src:t(5884).c,width:"2876",height:"1524"})))}m.isMDXComponent=!0},40556:(e,l,t)=>{t.d(l,{c:()=>n});const n=t.p+"assets/images/cd_reingest_bulk-90de39c530a3aad6c5466cab4f47977b.png"},54688:(e,l,t)=>{t.d(l,{c:()=>n});const n=t.p+"assets/images/cd_reingest_granule_modal-2efbff70030144323cff45ed965f2c2a.png"},5884:(e,l,t)=>{t.d(l,{c:()=>n});const n=t.p+"assets/images/cd_reingest_modal_bulk-0e583e98cbe044839e1b7e91302a906e.png"}}]);