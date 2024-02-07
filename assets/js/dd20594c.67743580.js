"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[37840],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(45072),a=r(95656),i=(r(11504),r(95788)),o=["components"],s={id:"kinesis-stream-for-ingest",title:"Setup Kinesis Stream & CNM Message",hide_title:!1},l=void 0,p={unversionedId:"operator-docs/kinesis-stream-for-ingest",id:"version-v18.1.0/operator-docs/kinesis-stream-for-ingest",title:"Setup Kinesis Stream & CNM Message",description:"Keep in mind that you should only have to set this up once per ingest stream. Kinesis pricing is based on the shard value and not on amount of kinesis usage.",source:"@site/versioned_docs/version-v18.1.0/operator-docs/kinesis-stream-for-ingest.md",sourceDirName:"operator-docs",slug:"/operator-docs/kinesis-stream-for-ingest",permalink:"/cumulus/docs/operator-docs/kinesis-stream-for-ingest",draft:!1,tags:[],version:"v18.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1698355623,formattedLastUpdatedAt:"Oct 26, 2023",frontMatter:{id:"kinesis-stream-for-ingest",title:"Setup Kinesis Stream & CNM Message",hide_title:!1},sidebar:"docs",previous:{title:"Operator Common Use Cases",permalink:"/cumulus/docs/operator-docs/ops-common-use-cases"},next:{title:"Create Rule In Cumulus",permalink:"/cumulus/docs/operator-docs/create-rule-in-cumulus"}},u={},c=[],m={toc:c},d="wrapper";function y(e){var t=e.components,s=(0,a.c)(e,o);return(0,i.yg)(d,(0,n.c)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Keep in mind that you should only have to set this up once per ingest stream. Kinesis pricing is based on the shard value and not on amount of kinesis usage.")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a Kinesis Stream"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"In your AWS console, go to the ",(0,i.yg)("inlineCode",{parentName:"li"},"Kinesis")," service and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Create Data Stream"),"."),(0,i.yg)("li",{parentName:"ul"},"Assign a name to the stream."),(0,i.yg)("li",{parentName:"ul"},"Apply a ",(0,i.yg)("inlineCode",{parentName:"li"},"shard value")," of ",(0,i.yg)("inlineCode",{parentName:"li"},"1"),"."),(0,i.yg)("li",{parentName:"ul"},"Click on ",(0,i.yg)("inlineCode",{parentName:"li"},"Create Kinesis Stream"),"."),(0,i.yg)("li",{parentName:"ul"},"A status page with stream details display. Once the status is ",(0,i.yg)("inlineCode",{parentName:"li"},"active")," then the stream is ready to use. Keep in mind to record the streamName and StreamARN for later use.")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of AWS console page for creating a Kinesis stream",src:r(82235).c,width:"966",height:"925"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a Rule"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Refer to ",(0,i.yg)("a",{parentName:"li",href:"../operator-docs/create-rule-in-cumulus"},"Create Rule in Cumulus"),"."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Send a message"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Send a message that makes your schema using python or by your command line."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"streamName")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Collection")," must match the ",(0,i.yg)("inlineCode",{parentName:"li"},"kinesisArn+collection")," defined in the rule that you have created in ",(0,i.yg)("a",{parentName:"li",href:"../operator-docs/create-rule-in-cumulus"},"Step 2"),".")))))}y.isMDXComponent=!0},82235:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/cnm_create_kinesis_stream-c6a0bf74658b4d41c2274474add74d65.jpg"}}]);