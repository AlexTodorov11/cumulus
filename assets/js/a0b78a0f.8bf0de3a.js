"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[65762],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(58168),r=n(98587),i=(n(96540),n(15680)),o=["components"],s={id:"kinesis-stream-for-ingest",title:"Setup Kinesis Stream & CNM Message",hide_title:!1},l=void 0,p={unversionedId:"operator-docs/kinesis-stream-for-ingest",id:"version-v18.4.0/operator-docs/kinesis-stream-for-ingest",title:"Setup Kinesis Stream & CNM Message",description:"Keep in mind that you should only have to set this up once per ingest stream. Kinesis pricing is based on the shard value and not on amount of kinesis usage.",source:"@site/versioned_docs/version-v18.4.0/operator-docs/kinesis-stream-for-ingest.md",sourceDirName:"operator-docs",slug:"/operator-docs/kinesis-stream-for-ingest",permalink:"/cumulus/docs/operator-docs/kinesis-stream-for-ingest",draft:!1,tags:[],version:"v18.4.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1724446966,formattedLastUpdatedAt:"Aug 23, 2024",frontMatter:{id:"kinesis-stream-for-ingest",title:"Setup Kinesis Stream & CNM Message",hide_title:!1},sidebar:"docs",previous:{title:"Operator Common Use Cases",permalink:"/cumulus/docs/operator-docs/ops-common-use-cases"},next:{title:"Create Rule In Cumulus",permalink:"/cumulus/docs/operator-docs/create-rule-in-cumulus"}},m={},u=[],c={toc:u},d="wrapper";function y(e){var t=e.components,n=(0,r.A)(e,o);return(0,i.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Keep in mind that you should only have to set this up once per ingest stream. Kinesis pricing is based on the shard value and not on amount of kinesis usage.")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a Kinesis Stream"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"In your AWS console, go to the ",(0,i.yg)("inlineCode",{parentName:"li"},"Kinesis")," service and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Create Data Stream"),"."),(0,i.yg)("li",{parentName:"ul"},"Assign a name to the stream."),(0,i.yg)("li",{parentName:"ul"},"Select ",(0,i.yg)("inlineCode",{parentName:"li"},"Provisioned")," capacity mode",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Alternatively select ",(0,i.yg)("inlineCode",{parentName:"li"},"On-Demand")," depending on your needs and ",(0,i.yg)("a",{parentName:"li",href:"https://aws.amazon.com/kinesis/data-streams/pricing/"},"cost analysis")))),(0,i.yg)("li",{parentName:"ul"},"Apply a ",(0,i.yg)("inlineCode",{parentName:"li"},"shard value")," of ",(0,i.yg)("inlineCode",{parentName:"li"},"1"),"."),(0,i.yg)("li",{parentName:"ul"},"Click on ",(0,i.yg)("inlineCode",{parentName:"li"},"Create Data Stream"),". A status page with stream details will display."),(0,i.yg)("li",{parentName:"ul"},"Click on ",(0,i.yg)("inlineCode",{parentName:"li"},"Configuration")," and then ",(0,i.yg)("inlineCode",{parentName:"li"},"Edit")," next to ",(0,i.yg)("inlineCode",{parentName:"li"},"Encryption")),(0,i.yg)("li",{parentName:"ul"},"Check the ",(0,i.yg)("inlineCode",{parentName:"li"},"Enable server-side encryption")," checkbox and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Save Changes"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Using the default AWS managed CMK is recommended"))),(0,i.yg)("li",{parentName:"ul"},"Once the status is ",(0,i.yg)("inlineCode",{parentName:"li"},"active")," the stream is ready to use. Record the streamName and StreamARN for later use."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a Rule"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Refer to ",(0,i.yg)("a",{parentName:"li",href:"../operator-docs/create-rule-in-cumulus"},"Create Rule in Cumulus"),"."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Send a message"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Send a message that makes your schema using python or by your command line."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"streamName")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Collection")," must match the ",(0,i.yg)("inlineCode",{parentName:"li"},"kinesisArn+collection")," defined in the rule that you have created in ",(0,i.yg)("a",{parentName:"li",href:"../operator-docs/create-rule-in-cumulus"},"Step 2"),".")))))}y.isMDXComponent=!0}}]);