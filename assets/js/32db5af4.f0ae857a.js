"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[29812],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>g});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(45072),a=r(95656),l=(r(11504),r(95788)),o=["components"],s={id:"create-rule-in-cumulus",title:"Create Rule In Cumulus",hide_title:!1},i=void 0,u={unversionedId:"operator-docs/create-rule-in-cumulus",id:"version-v11.1.0/operator-docs/create-rule-in-cumulus",title:"Create Rule In Cumulus",description:"Once the above files are in place and the entries created in CMR and Cumulus, we are ready to begin ingesting data. Depending on the type of ingestion (FTP/Kinesis, etc) the values below will change, but for the most part they are all similar. Rules tell Cumulus how to associate providers and collections, and when/how to start processing a workflow.",source:"@site/versioned_docs/version-v11.1.0/operator-docs/create-rule-in-cumulus.md",sourceDirName:"operator-docs",slug:"/operator-docs/create-rule-in-cumulus",permalink:"/cumulus/docs/v11.1.0/operator-docs/create-rule-in-cumulus",draft:!1,tags:[],version:"v11.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"create-rule-in-cumulus",title:"Create Rule In Cumulus",hide_title:!1},sidebar:"Operator Docs",previous:{title:"Setup Kinesis Stream & CNM Message",permalink:"/cumulus/docs/v11.1.0/operator-docs/kinesis-stream-for-ingest"},next:{title:"Granule Workflows",permalink:"/cumulus/docs/v11.1.0/operator-docs/granule-workflows"}},c={},p=[{value:"Steps",id:"steps",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function g(e){var t=e.components,s=(0,a.c)(e,o);return(0,l.yg)(m,(0,n.c)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Once the above files are in place and the entries created in CMR and Cumulus, we are ready to begin ingesting data. Depending on the type of ingestion (FTP/Kinesis, etc) the values below will change, but for the most part they are all similar. Rules tell Cumulus how to associate providers and collections, and when/how to start processing a workflow."),(0,l.yg)("h2",{id:"steps"},"Steps"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Go To Rules Page")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Go to the Cumulus dashboard, click on ",(0,l.yg)("inlineCode",{parentName:"li"},"Rules")," in the navigation."),(0,l.yg)("li",{parentName:"ul"},"Click ",(0,l.yg)("inlineCode",{parentName:"li"},"Add Rule"),".")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of Rules page",src:r(60400).c,width:"2868",height:"1488"})),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Complete Form")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fill out the template form.")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of a Rules template for adding a new rule",src:r(88785).c,width:"2876",height:"1524"})),(0,l.yg)("p",null,"For more details regarding the field definitions and required information go to ",(0,l.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus/docs/data-cookbooks/setup#rules"},"Data Cookbooks"),"."),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("strong",{parentName:"p"},"Note:")," If the state field is left blank, it defaults to ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),".")),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"A rule form with completed required fields:")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of a completed rule form",src:r(41344).c,width:"3736",height:"2086"})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"A successfully added Rule:")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of created rule",src:r(17568).c,width:"5005",height:"1399"})))}g.isMDXComponent=!0},41344:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/cd_add_rule_filled-00ee34fb85ee70df5390b2e299e5d2a1.png"},88785:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/cd_add_rule_form_blank-13d12ca7209af5e3c41f3f983787bde4.png"},17568:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/cd_add_rule_overview-4845738418b459667adf629a1176e901.png"},60400:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/cd_rules_page-0c8124e30435218183ebb46583579b57.png"}}]);