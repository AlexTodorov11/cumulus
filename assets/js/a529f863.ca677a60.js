"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[87688],{95788:(e,l,t)=>{t.d(l,{Iu:()=>g,yg:()=>y});var r=t(11504);function n(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function a(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);l&&(r=r.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?a(Object(t),!0).forEach((function(l){n(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function i(e,l){if(null==e)return{};var t,r,n=function(e,l){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),s=function(e){var l=r.useContext(u),t=l;return e&&(t="function"==typeof e?e(l):o(o({},l),e)),t},g=function(e){var l=s(e.components);return r.createElement(u.Provider,{value:l},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var l=e.children;return r.createElement(r.Fragment,{},l)}},p=r.forwardRef((function(e,l){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=s(t),p=n,y=d["".concat(u,".").concat(p)]||d[p]||c[p]||a;return t?r.createElement(y,o(o({ref:l},g),{},{components:t})):r.createElement(y,o({ref:l},g))}));function y(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var u in l)hasOwnProperty.call(l,u)&&(i[u]=l[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},72916:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>g,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(45072),n=t(95656),a=(t(11504),t(95788)),o=["components"],i={id:"granule-workflows",title:"Granule Workflows",hide_title:!1},u=void 0,s={unversionedId:"operator-docs/granule-workflows",id:"version-v10.0.0/operator-docs/granule-workflows",title:"Granule Workflows",description:"Failed Granule",source:"@site/versioned_docs/version-v10.0.0/operator-docs/granule-workflows.md",sourceDirName:"operator-docs",slug:"/operator-docs/granule-workflows",permalink:"/cumulus/docs/v10.0.0/operator-docs/granule-workflows",draft:!1,tags:[],version:"v10.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"granule-workflows",title:"Granule Workflows",hide_title:!1},sidebar:"Operator Docs",previous:{title:"Create Rule In Cumulus",permalink:"/cumulus/docs/v10.0.0/operator-docs/create-rule-in-cumulus"},next:{title:"Trigger a Workflow Execution",permalink:"/cumulus/docs/v10.0.0/operator-docs/trigger-workflow"}},g={},d=[{value:"Failed Granule",id:"failed-granule",level:2},{value:"Delete and Ingest",id:"delete-and-ingest",level:3},{value:"Reingest",id:"reingest",level:3},{value:"Delete and Ingest",id:"delete-and-ingest-1",level:3},{value:"Multiple Failed Granules",id:"multiple-failed-granules",level:2}],c={toc:d},p="wrapper";function y(e){var l=e.components,i=(0,n.c)(e,o);return(0,a.yg)(p,(0,r.c)({},c,i,{components:l,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"failed-granule"},"Failed Granule"),(0,a.yg)("h3",{id:"delete-and-ingest"},"Delete and Ingest"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Delete Granule")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note"),": Granules published to CMR will need to be removed from CMR via the dashboard prior to deletion")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Ingest Granule via Ingest Rule")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Re-trigger a one-time, kinesis, SQS, or SNS rule or a scheduled rule will re-discover and reingest the deleted granule.")),(0,a.yg)("h3",{id:"reingest"},"Reingest"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Select Failed Granule")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In the Cumulus dashboard, go to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Collections")," page."),(0,a.yg)("li",{parentName:"ul"},"Use search field to find the granule.")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Re-ingest Granule")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Go to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Collections")," page."),(0,a.yg)("li",{parentName:"ul"},"Click on ",(0,a.yg)("inlineCode",{parentName:"li"},"Reingest")," and a modal will pop up for your confirmation.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of the Reingest modal workflow",src:t(72348).c,width:"2876",height:"1524"})),(0,a.yg)("h3",{id:"delete-and-ingest-1"},"Delete and Ingest"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Bulk Delete Granules")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Go to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Granules")," page."),(0,a.yg)("li",{parentName:"ul"},"Use the ",(0,a.yg)("inlineCode",{parentName:"li"},"Bulk Delete")," button to bulk delete selected granules or select via a Kibana query")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note"),": You can optionally force deletion from CMR")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Ingest Granules via Ingest Rule")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Re-trigger one-time, kinesis, SQS, or SNS rules or scheduled rules will re-discover and reingest the deleted granule.")),(0,a.yg)("h2",{id:"multiple-failed-granules"},"Multiple Failed Granules"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Select Failed Granules")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In the Cumulus dashboard, go to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Collections")," page."),(0,a.yg)("li",{parentName:"ul"},"Click on ",(0,a.yg)("inlineCode",{parentName:"li"},"Failed Granules"),"."),(0,a.yg)("li",{parentName:"ul"},"Select multiple granules.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of selected multiple granules",src:t(42088).c,width:"2876",height:"1524"})),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Bulk Re-ingest Granules")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Click on ",(0,a.yg)("inlineCode",{parentName:"li"},"Reingest")," and a modal will pop up for your confirmation.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot of Bulk Reingest modal workflow",src:t(25637).c,width:"2876",height:"1524"})))}y.isMDXComponent=!0},42088:(e,l,t)=>{t.d(l,{c:()=>r});const r=t.p+"assets/images/cd_reingest_bulk-90de39c530a3aad6c5466cab4f47977b.png"},72348:(e,l,t)=>{t.d(l,{c:()=>r});const r=t.p+"assets/images/cd_reingest_granule_modal-2efbff70030144323cff45ed965f2c2a.png"},25637:(e,l,t)=>{t.d(l,{c:()=>r});const r=t.p+"assets/images/cd_reingest_modal_bulk-0e583e98cbe044839e1b7e91302a906e.png"}}]);