"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[54443],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,h=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},42483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(58168),r=a(98587),i=(a(96540),a(15680)),o=["components"],s={id:"bulk-operations",title:"Bulk Operations",hide_title:!1},l=void 0,p={unversionedId:"operator-docs/bulk-operations",id:"version-v16.1.3/operator-docs/bulk-operations",title:"Bulk Operations",description:"Cumulus implements bulk operations through the use of AsyncOperations, which are long-running processes executed on an AWS ECS cluster.",source:"@site/versioned_docs/version-v16.1.3/operator-docs/bulk-operations.md",sourceDirName:"operator-docs",slug:"/operator-docs/bulk-operations",permalink:"/cumulus/docs/v16.1.3/operator-docs/bulk-operations",draft:!1,tags:[],version:"v16.1.3",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1706031284,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"bulk-operations",title:"Bulk Operations",hide_title:!1},sidebar:"docs",previous:{title:"Discovery Filtering",permalink:"/cumulus/docs/v16.1.3/operator-docs/discovery-filtering"},next:{title:"CMR Operations",permalink:"/cumulus/docs/v16.1.3/operator-docs/cmr-operations"}},u={},c=[{value:"Submitting a bulk API request",id:"submitting-a-bulk-api-request",level:2},{value:"Starting bulk operations from the Cumulus dashboard",id:"starting-bulk-operations-from-the-cumulus-dashboard",level:2},{value:"Using a Kibana query",id:"using-a-kibana-query",level:3},{value:"Creating an index pattern for Kibana",id:"creating-an-index-pattern-for-kibana",level:4},{value:"Status Tracking",id:"status-tracking",level:2}],d={toc:c},g="wrapper";function h(e){var t=e.components,s=(0,r.A)(e,o);return(0,i.yg)(g,(0,n.A)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Cumulus implements bulk operations through the use of ",(0,i.yg)("inlineCode",{parentName:"p"},"AsyncOperations"),", which are long-running processes executed on an AWS ECS cluster."),(0,i.yg)("h2",{id:"submitting-a-bulk-api-request"},"Submitting a bulk API request"),(0,i.yg)("p",null,"Bulk operations are generally submitted via the endpoint for the relevant data type, e.g. granules. For a list of supported API requests, refer to the ",(0,i.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-api/#bulk-operations"},"Cumulus API documentation"),". Bulk operations are denoted with the keyword 'bulk'."),(0,i.yg)("h2",{id:"starting-bulk-operations-from-the-cumulus-dashboard"},"Starting bulk operations from the Cumulus dashboard"),(0,i.yg)("h3",{id:"using-a-kibana-query"},"Using a Kibana query"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"You ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"https://github.com/nasa/cumulus-dashboard#configuration"},"must have configured your dashboard build with a KIBANAROOT environment variable"))," in order for the Kibana link to render in the bulk granules modal.")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},'From the Granules dashboard page, click on the "Run Bulk Granules" button, then select what type of action you would like to perform.')),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The rest of the process is the same regardless of what type of bulk action you perform.")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'From the bulk granules modal, click the "Open Kibana" link:'),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of Cumulus dashboard showing modal window for triggering bulk granule operations",src:a(65817).A,width:"1650",height:"1312"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Once you have accessed Kibana, navigate to the "Discover" page. If this is your first time using Kibana, you may see a message like this at the top of the page:'),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"In order to visualize and explore data in Kibana, you'll need to create an index pattern to retrieve data from Elasticsearch.")),(0,i.yg)("p",{parentName:"li"},"In that case, see the docs for ",(0,i.yg)("a",{parentName:"p",href:"#creating-an-index-pattern-for-kibana"},"creating an index pattern for Kibana")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of Kibana user interface showing the &quot;Discover&quot; page for running queries",src:a(70565).A,width:"1951",height:"814"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Enter a query that returns the granule records that you want to use for bulk operations:"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of Kibana user interface showing an example Kibana query and results",src:a(16430).A,width:"1854",height:"999"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Once the Kibana query is returning the results you want, click the "Inspect" link near the top of the page. A slide out tab with request details will appear on the right side of the page:'),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of Kibana user interface showing details of an example request",src:a(12530).A,width:"2158",height:"1257"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'In the slide out tab that appears on the right side of the page, click the "Request" link near the top and scroll down until you see the ',(0,i.yg)("inlineCode",{parentName:"p"},"query")," property:"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of Kibana user interface showing the Elasticsearch data request made for a given Kibana query",src:a(11765).A,width:"2280",height:"1172"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Highlight and copy the ",(0,i.yg)("inlineCode",{parentName:"p"},"query")," contents from Kibana. Go back to the Cumulus dashboard and paste the ",(0,i.yg)("inlineCode",{parentName:"p"},"query")," contents from Kibana ",(0,i.yg)("strong",{parentName:"p"},"inside of the ",(0,i.yg)("inlineCode",{parentName:"strong"},"query")," property in the bulk granules request payload"),". ",(0,i.yg)("strong",{parentName:"p"},"It is expected")," that you should have a property of ",(0,i.yg)("inlineCode",{parentName:"p"},"query")," nested inside of the existing ",(0,i.yg)("inlineCode",{parentName:"p"},"query")," property:"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of Cumulus dashboard showing modal window for triggering bulk granule operations with query information populated",src:a(97320).A,width:"1526",height:"1271"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add values for the ",(0,i.yg)("inlineCode",{parentName:"p"},"index")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"workflowName")," to the bulk granules request payload. The value for ",(0,i.yg)("inlineCode",{parentName:"p"},"index")," will vary based on your Elasticsearch setup, but it is good to target an index specifically for granule data if possible:"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of Cumulus dashboard showing modal window for triggering bulk granule operations with query, index, and workflow information populated",src:a(82595).A,width:"1522",height:"1282"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click the "Run Bulk Operations" button. You should see a confirmation message, including an ID for the async operation that was started to handle your bulk action. You can ',(0,i.yg)("a",{parentName:"p",href:"#status-tracking"},"track the status of this async operation on the Operations dashboard page"),', which can be visited by clicking the "Go To Operations" button:'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"![Screenshot of Cumulus dashboard showing confirmation message with async operation ID for bulk granules request](../assets/bulk-granules-submitted.png)\n")))),(0,i.yg)("h4",{id:"creating-an-index-pattern-for-kibana"},"Creating an index pattern for Kibana"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Define the index pattern for the indices that your Kibana queries should use. A wildcard character, ",(0,i.yg)("inlineCode",{parentName:"p"},"*"),', will match across multiple indices. Once you are satisfied with your index pattern, click the "Next step" button:'),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Screenshot of Kibana user interface for defining an index pattern",src:a(97888).A,width:"2266",height:"1069"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Choose whether to use a Time Filter for your data, which is not required. Then click the "Create index pattern" button:'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"![Screenshot of Kibana user interface for configuring the settings of an index pattern](../assets/kibana-create-index-pattern-2.png)\n")))),(0,i.yg)("h2",{id:"status-tracking"},"Status Tracking"),(0,i.yg)("p",null,"All bulk operations return an ",(0,i.yg)("inlineCode",{parentName:"p"},"AsyncOperationId")," which can be submitted to the ",(0,i.yg)("inlineCode",{parentName:"p"},"/asyncOperations")," endpoint."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"/asyncOperations")," endpoint allows listing of AsyncOperation records as well as record retrieval for individual records, which will contain the status.\nThe ",(0,i.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-api/#list-async-operations"},"Cumulus API documentation")," shows sample requests for these actions."),(0,i.yg)("p",null,"The Cumulus Dashboard also includes an Operations monitoring page, where operations and their status are visible:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot of Cumulus Dashboard Operations Page showing 5 operations and their status, ID, description, type and creation timestamp",src:a(66869).A,width:"2664",height:"1800"})))}h.isMDXComponent=!0},65817:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bulk-granules-modal-e4b4655d19f39ad02eabbb2706353ab9.png"},97320:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bulk-granules-query-1-735cc43ecbc928c9c489fbc6c7c4fc82.png"},82595:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bulk-granules-query-2-56e96781341eaaaae486509d63f4aec8.png"},66869:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cd_operations_page-26e54ac800b043e8a56cfb0f4b02c7fd.png"},97888:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/kibana-create-index-pattern-1-e05cd92f57c8b1c696e76583482c17d0.png"},70565:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/kibana-discover-page-e9e73b06568cd27019ac9a2addb6d5c5.png"},16430:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/kibana-discover-query-856babf364edc98ac40e26a26e149a49.png"},11765:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/kibana-inspect-query-0c8a20272955010099dd90aa3f0087bc.png"},12530:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/kibana-inspect-request-3c9226b6b7aade9f25c2d181ce42a95c.png"}}]);